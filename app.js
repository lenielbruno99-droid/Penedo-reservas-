"use strict";
/* ===== Para adicionar uma pousada nova, copie um bloco abaixo e troque os dados ===== */
const WHATSAPP = "5524992132158";
const POUSADAS = [
  {
    id:"viking", nome:"Pousada Viking", tipo:"Pousada",
    local:"Perto da Casa do Chocolate, a poucos minutos do centrinho de Penedo",
    desc:"Conforto, lazer e tranquilidade para aproveitar Penedo, com piscina ao ar livre e café da manhã.",
    cat:"pousadas",
    comodidades:["Piscina ao ar livre","Café da manhã","Estacionamento grátis","Wi-Fi grátis","Cama box queen","Ar-condicionado split","TV LED","Frigobar","Banheiro privativo"],
    fotos:[{t:"Suíte Standard",u:"https://photos.app.goo.gl/wHHCmXxYJu86KxMs9"}],
    quartos:[{nome:"Suíte Standard",sub:"Cama box queen, ar split, TV e frigobar",fotos:"https://photos.app.goo.gl/wHHCmXxYJu86KxMs9"}],
    capa:"fotos/viking/fachada.jpg",
    galeria:["fachada","jardim","v4","v8","v2","v1","v5","v3","v7"].map(n=>`fotos/viking/${n}.jpg`),
    cena:0
  },
  {
    id:"alto", nome:"Pousada no Alto Penedo", tipo:"Pousada",
    local:"Estrada da Fazendinha, bem pertinho da Cachoeira de Deus",
    desc:"A pousada no sossego que você espera de Penedo, bem pertinho da Cachoeira de Deus. Todas as acomodações com café da manhã.",
    cat:"pousadas",
    comodidades:["Café da manhã incluso","Piscina com vista pra mata","Suítes com lareira","Varanda com vista","Chalés com hidromassagem","Frigobar e TV","Perto da cachoeira"],
    fotos:[{t:"A pousada",u:"https://photos.app.goo.gl/5Q3gVPF9bcWK3tf66"}],
    quartos:[
      {nome:"Suíte Standard sem lareira",sub:"Suítes 2, 3, 4 e 7 · com café da manhã",d1:299,d2:598,fotos:"https://photos.app.goo.gl/S4BKPfp3MPakRjEX8"},
      {nome:"Suíte Standard com lareira",sub:"Suítes 5 e 6 · com varanda · com café da manhã",d1:315,d2:630,fotos:"https://photos.app.goo.gl/CTPP7ZYCroVDd3Wa8"},
      {nome:"Chalé com hidro simples",sub:"Chalé com hidromassagem · com café da manhã",d1:345,d2:690,fotos:"https://photos.app.goo.gl/h57292L4drzNSyGq7"},
      {nome:"Chalé com hidro dupla",sub:"Chalé com hidromassagem dupla · com café da manhã",d1:386,d2:772,fotos:"https://photos.app.goo.gl/mhtYshpg9vpVaqLr5"},
      {nome:"Suíte Master 1",sub:"Suíte Master · com café da manhã",d1:330,d2:660,fotos:"https://photos.app.goo.gl/5EgUEL861QHsBU8B6"},
      {nome:"Suíte Master 8",sub:"Agora apenas com cama de casal · com café da manhã",d1:330,d2:660,fotos:"https://photos.app.goo.gl/pxuv6t7c1NqJNppFA"},
      {nome:"Suíte Master 9",sub:"Suíte Master · com café da manhã",d1:330,d2:660,fotos:"https://photos.app.goo.gl/x5UvXZNtswahxi2j8"}
    ],
    capa:"fotos/alto/a01.jpg",
    galeria:Array.from({length:27},(_,i)=>`fotos/alto/a${String(i+1).padStart(2,"0")}.jpg`),
    cena:1
  },
  {
    id:"aurora", nome:"Pousada Aurora da Mantiqueira", tipo:"Pousada",
    local:"A menos de 2 km do centro de Penedo",
    desc:"Conforto, natureza e hospitalidade, com vista pra serra, café da manhã caseiro e muita área verde.",
    cat:"pousadas",
    comodidades:["Piscina","Café da manhã caseiro","Suítes com varanda","Área verde","Campinho","Estacionamento seguro","Ar-condicionado","Frigobar","TV"],
    fotos:[
      {t:"Área externa",u:"https://photos.app.goo.gl/5L3UUfwF2GDg1ggg9"},
      {t:"Piscina",u:"https://photos.app.goo.gl/JrE88KdUcWy83SVX8"},
      {t:"Recepção e café",u:"https://photos.app.goo.gl/n3Dbcb2xAjzj4QLE6"}
    ],
    quartos:[{nome:"Suítes",sub:"Ar-condicionado, frigobar e TV · casal com café",fotos:"https://photos.app.goo.gl/7QZzXJcT2NznAD1p8"}],
    capa:"fotos/aurora/r01.jpg",
    galeria:Array.from({length:30},(_,i)=>`fotos/aurora/r${String(i+1).padStart(2,"0")}.jpg`),
    cena:2
  },
  {
    id:"casa16", nome:"Super Casa na Natureza", tipo:"Casa · até 16 pessoas",
    local:"Penedo-RJ, um refúgio cercado de verde",
    desc:"Perfeita para quem busca conforto, paz e contato com a natureza. Ideal para famílias e grupos grandes.",
    cat:"casas",
    comodidades:["6 quartos","Até 16 pessoas","Piscina","Espaço para fogueira","Sala de jogos com sinuca e totó","Churrasqueira","Fogão a lenha","Varandas"],
    fotos:[],
    quartos:[],
    capa:"fotos/casa16/c01.jpg",
    galeria:Array.from({length:32},(_,i)=>`fotos/casa16/c${String(i+1).padStart(2,"0")}.jpg`),
    cena:0
  },
  {
    id:"canto", nome:"Canto da Montanha", tipo:"Casa · até 8 pessoas",
    local:"A 2 km do centro, uns 10 minutos a pé da Praça Finlândia",
    desc:"Chalé encantador com piscina e churrasqueira privativas, pra aproveitar Penedo com a família e os amigos.",
    cat:"casas",
    comodidades:["2 quartos","5 camas","Até 8 pessoas","Piscina privativa","Churrasqueira","Quintal com gramado e rede","Vista para as montanhas","Ar-condicionado nos quartos","Cozinha","Wi-Fi","Estacionamento","Aceita pet"],
    fotos:[],
    quartos:[],
    capa:"fotos/canto/k01.jpg",
    galeria:Array.from({length:23},(_,i)=>`fotos/canto/k${String(i+1).padStart(2,"0")}.jpg`),
    cena:0
  }
];
const CATEGORIAS = [
  {id:"pousadas",nome:"Pousadas",um:"pousada",icone:'<path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M9 11h.01M15 11h.01"/>'},
  {id:"casas",nome:"Casas",um:"casa",icone:'<path d="M3 11l9-7 9 7M5 9.5V21h14V9.5M10 21v-5h4v5"/>'},
  {id:"sitios",nome:"Sítios",um:"sítio",icone:'<path d="M2 21h20M7 21V11l-4 2M7 11l5-4 5 4v10M17 13l4 2M12 3v4M10 16h4v5h-4z"/>'},
  {id:"apartamentos",nome:"Apartamentos",um:"apartamento",icone:'<path d="M5 21V3h14v18M3 21h18M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M11 21v-3h2v3"/>'}
];

/* ===== daqui pra baixo não precisa mexer ===== */
function waLink(pousada, quarto){
  let msg = "Olá, Jussara! Vi o site do Penedo Reservas";
  if(pousada) msg += ` e tenho interesse na ${pousada}` + (quarto?` (${quarto})`:"") + ".";
  else msg += " e quero ajuda para encontrar uma hospedagem em Penedo.";
  msg += "\nPode me passar valores e disponibilidade?";
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}
const esc = s => String(s).replace(/[&<>"'`]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"}[c]));
const urlSegura = u => { const t=String(u||""); return /^(https:\/\/|fotos\/)[^\s"'<>()\\]*$/.test(t) ? t : ""; };
const CENAS = [
  `<path d="M0 220 V140 L70 95 L130 130 L210 70 L300 125 L400 85 L400 220 Z" fill="var(--m1)"/><path d="M0 220 V170 L90 140 L180 165 L260 130 L400 160 V220 Z" fill="var(--m2)"/><rect x="250" y="150" width="70" height="38" fill="#c9a27a"/><path d="M244 152 L285 122 L326 152 Z" fill="#7a4a2a"/><rect x="278" y="166" width="14" height="22" fill="#3b2a1e"/><path d="M0 220 V195 L400 188 V220 Z" fill="var(--m3)"/>`,
  `<path d="M0 220 V120 L90 60 L160 105 L240 40 L330 100 L400 70 V220 Z" fill="var(--m1)"/><path d="M0 220 V160 L120 125 L220 150 L320 118 L400 140 V220 Z" fill="var(--m2)"/><g fill="var(--m3)"><rect x="58" y="120" width="3" height="60"/><path d="M59.5 95 l-14 11 h28Z M59.5 105 l-17 12 h34Z M59.5 116 l-20 13 h40Z"/><rect x="338" y="118" width="3" height="60"/><path d="M339.5 92 l-14 11 h28Z M339.5 102 l-17 12 h34Z M339.5 113 l-20 13 h40Z"/></g><path d="M0 220 V190 L400 182 V220 Z" fill="var(--m3)"/>`,
  `<circle cx="300" cy="70" r="26" fill="#f6d79a" opacity=".9"/><path d="M0 220 V130 L100 85 L190 120 L280 75 L400 115 V220 Z" fill="var(--m1)"/><path d="M0 220 V165 L140 140 L260 160 L400 135 V220 Z" fill="var(--m2)"/><rect x="90" y="182" width="120" height="16" rx="8" fill="#7fc3d6"/><path d="M0 220 V200 L400 196 V220 Z" fill="var(--m3)"/>`
];
let cat="pousadas";
function render(){
  const list=document.getElementById("list");
  const c=CATEGORIAS.find(x=>x.id===cat);
  const itens=POUSADAS.filter(p=>p.cat===cat);
  document.getElementById("cat-title").textContent=`${c.nome} em Penedo`;
  document.querySelectorAll(".cat").forEach(b=>b.setAttribute("aria-pressed",b.dataset.c===cat));
  if(!itens.length){list.innerHTML=`<div class="empty-cat"><b>Em breve, ${c.nome.toLowerCase()} aqui no site.</b><p>Já tenho opções de ${c.nome.toLowerCase()} em Penedo. Me chama no WhatsApp que eu te mando as fotos e os valores.</p><a class="btn btn-wa" data-wa-cat="${c.nome.toLowerCase()}" href="#" target="_blank" rel="noopener"><svg><use href="#i-wa"/></svg>Quero ver ${c.nome.toLowerCase()}</a></div>`;atualizarLinks();return;}
  list.innerHTML=itens.map(p=>{
    return `<article class="card">
      <div class="cover${p.capa?" photo":""}">${p.capa?`<span class="bg" aria-hidden="true" style="background-image:url('${esc(urlSegura(p.capa))}')"></span>`:""}
        ${p.capa?"":`<svg class="scene" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">${CENAS[p.cena%CENAS.length]}</svg>`}
        <span class="logo mark" aria-hidden="true"></span>
        <span class="tag">${esc(p.tipo)}</span>
        ${p.galeria?`<button class="gal" type="button" data-g="${esc(p.id)}" data-i="0"><svg><use href="#i-cam"/></svg>Ver as ${p.galeria.length} fotos</button>`:""}
        ${p.galeria?"":`<div class="albums">${p.fotos.map(f=>`<a href="${esc(urlSegura(f.u))}" target="_blank" rel="noopener noreferrer"><svg><use href="#i-cam"/></svg>${esc(f.t)}</a>`).join("")}</div>`}
      </div>
      <div class="body">
        <h3>${esc(p.nome)}</h3>
        <div class="loc"><svg><use href="#i-pin"/></svg><span>${esc(p.local)}</span></div>
        <p class="desc">${esc(p.desc)}</p>
        ${p.galeria?`<div class="thumbs">${p.galeria.map((u,i)=>`<button type="button" data-g="${esc(p.id)}" data-i="${i}" aria-label="Foto ${i+1}"><img src="${esc(urlSegura(u))}" alt="" loading="lazy"></button>`).join("")}</div>`:""}
        <ul class="amen">${p.comodidades.map(c=>`<li>${esc(c)}</li>`).join("")}</ul>
        <a class="btn btn-wa" data-p="${esc(p.nome)}" href="#" target="_blank" rel="noopener"><svg><use href="#i-wa"/></svg>Consultar valores e disponibilidade</a>
      </div>
    </article>`;
  }).join("");
  atualizarLinks();
}
let lbFotos=[],lbI=0;
function lbShow(){const d=document.getElementById("lb");d.querySelector("img").src=urlSegura(lbFotos[lbI]);d.querySelector(".ct").textContent=`${lbI+1} de ${lbFotos.length}`;}
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-g]");
  if(b){const p=POUSADAS.find(x=>x.id===b.dataset.g);if(!p||!p.galeria)return;lbFotos=p.galeria;lbI=+b.dataset.i;lbShow();document.getElementById("lb").showModal();return;}
  const d=document.getElementById("lb"); if(!d.open) return;
  if(e.target.closest(".x")||e.target===d||e.target.classList.contains("in")) d.close();
  else if(e.target.closest(".pv")){lbI=(lbI-1+lbFotos.length)%lbFotos.length;lbShow();}
  else if(e.target.closest(".nx")){lbI=(lbI+1)%lbFotos.length;lbShow();}
});
document.addEventListener("keydown",e=>{const d=document.getElementById("lb");if(!d.open)return;if(e.key==="ArrowLeft")d.querySelector(".pv").click();if(e.key==="ArrowRight")d.querySelector(".nx").click();});
let tx=null;
document.addEventListener("touchstart",e=>{if(document.getElementById("lb").open)tx=e.touches[0].clientX;},{passive:true});
document.addEventListener("touchend",e=>{const d=document.getElementById("lb");if(!d.open||tx===null)return;const dx=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(dx)>40)d.querySelector(dx<0?".nx":".pv").click();});
function atualizarLinks(){
  document.querySelectorAll("[data-wa='geral']").forEach(a=>a.href=waLink());
  document.querySelectorAll("[data-p]").forEach(a=>a.href=waLink(a.dataset.p,a.dataset.q));
  document.querySelectorAll("[data-wa-cat]").forEach(a=>a.href=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá, Jussara! Vi o site do Penedo Reservas e quero ver as opções de ${a.dataset.waCat} em Penedo. Pode me mandar?`)}`);
}
function desenharCats(){
  document.getElementById("cats").innerHTML=CATEGORIAS.map(c=>{
    const n=POUSADAS.filter(p=>p.cat===c.id).length;
    return `<button class="cat" type="button" data-c="${c.id}" aria-pressed="${c.id===cat}"><svg viewBox="0 0 24 24" aria-hidden="true">${c.icone}</svg><b>${c.nome}</b><small>${n?`${n} ${n>1?"opções":"opção"}`:"Fale comigo"}</small></button>`;
  }).join("");
}
document.getElementById("cats").addEventListener("click",e=>{
  const b=e.target.closest(".cat"); if(!b) return;
  cat=b.dataset.c;
  try{history.replaceState(null,"","#"+cat);}catch(_){}
  render();
});
const h=(location.hash||"").slice(1);
if(CATEGORIAS.some(c=>c.id===h)) cat=h;
desenharCats();
render();
