"""Gera uma página própria (/h/<id>) e uma imagem de prévia (og/<id>.jpg) para cada hospedagem.
Rode na raiz do site depois de mexer no app.js:  python3 tools/gerar_paginas.py"""
import json, os, re, subprocess, html
from PIL import Image, ImageOps

SITE = "https://www.penedoreservasturismo.com.br"
js = r"""
const fs=require('fs');const src=fs.readFileSync('app.js','utf8');
const dados=src.split('/* ===== daqui pra baixo')[0];
const P=new Function(dados+';return POUSADAS;')();
const C=new Function(dados+';return CATEGORIAS;')();
console.log(JSON.stringify({P:P.map(p=>({id:p.id,nome:p.nome,desc:p.desc,local:p.local,cat:p.cat,capa:p.capa})),C:C.map(c=>({id:c.id,nome:c.nome}))}));
"""
d = json.loads(subprocess.check_output(["node", "-e", js]))
base = open("index.html", encoding="utf-8").read()
os.makedirs("h", exist_ok=True); os.makedirs("og", exist_ok=True)
for f in os.listdir("h"):
    if f.endswith(".html"): os.remove(os.path.join("h", f))

def meta(s, prop, val, attr="property"):
    pat = re.compile(r'(<meta %s="%s" content=")[^"]*(")' % (attr, re.escape(prop)))
    assert pat.search(s), prop
    return pat.sub(lambda m: m.group(1) + val + m.group(2), s, count=1)

for p in d["P"]:
    pid = p["id"]
    if not re.fullmatch(r"[a-z0-9-]+", pid): raise SystemExit("id inválido: " + pid)
    img_url = SITE + "/og.jpg"
    if p.get("capa"):
        im = ImageOps.exif_transpose(Image.open(p["capa"])).convert("RGB")
        im = ImageOps.fit(im, (1200, 630), Image.LANCZOS, centering=(0.5, 0.5))
        im.save(f"og/{pid}.jpg", quality=82, optimize=True, progressive=True)
        img_url = f"{SITE}/og/{pid}.jpg"
    titulo = html.escape(f'{p["nome"]} | Penedo Reservas Turismo', quote=True)
    desc = html.escape(f'{p["local"]}. {p["desc"]} Veja as fotos e consulte pelo WhatsApp.', quote=True)
    url = f"{SITE}/h/{pid}"
    s = base
    s = re.sub(r"<title>[^<]*</title>", f"<title>{titulo}</title>", s, count=1)
    s = meta(s, "description", desc, "name")
    s = meta(s, "og:title", titulo); s = meta(s, "og:description", desc); s = meta(s, "og:url", url)
    s = meta(s, "og:image", img_url); s = meta(s, "og:image:secure_url", img_url)
    s = meta(s, "twitter:image", img_url, "name")
    assert s.count("</head><body>") == 1
    s = s.replace("</head><body>", f'</head><body data-solo="{pid}">', 1)
    open(f"h/{pid}.html", "w", encoding="utf-8").write(s)
    print("ok", pid)
