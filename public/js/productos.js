const productos = [
    {"pr_id": 0, "pr_titulo": "GTX1650",           "pr_url": "./public/img/productos/TVD-ASUS-GTX1650.jpg",          "pr_descripcion": "Tarjeta de video GTX1650", "pr_valor": "2,000.00"},
    {"pr_id": 1, "pr_titulo": "RTX4080",           "pr_url": "./public/img/productos/TVD-ASUS-RTX4080.jpg",          "pr_descripcion": "Tarjeta de video RTX4080", "pr_valor": "2,000.00"},
    {"pr_id": 2, "pr_titulo": "RTX40801",          "pr_url": "./public/img/productos/TVD-ASUS-RTX40801.jpg",         "pr_descripcion": "Tarjeta de video RTX40801", "pr_valor": "2,000.00"},
    {"pr_id": 3, "pr_titulo": "MANHATTAN 200ML",  "pr_url": "./public/img/productos/ACCESORIO-MANHATTAN-200ML.jpg", "pr_descripcion": "Accesorio de Limpieza 200ml", "pr_valor": "2,000.00"},
    {"pr_id": 4, "pr_titulo": "SABO 590ML",       "pr_url": "./public/img/productos/ACCESORIO-SABO-590ML.jpg",      "pr_descripcion": "Accesorio de Limpieza 590ml", "pr_valor": "2,000.00"},
    {"pr_id": 5, "pr_titulo": "WHOOSH 8ML",       "pr_url": "./public/img/productos/ACCESORIO-WHOOSH-8ML.jpg",      "pr_descripcion": "Accesorio de Limpieza 800ml", "pr_valor": "2,000.00"},
    {"pr_id": 6, "pr_titulo": "MBOARD ASUS ARZ790",         "pr_url": "./public/img/productos/MBOARD-ASUS-ARZ790.jpg",        "pr_descripcion": "MBOARD ASUS ARZ 790", "pr_valor": "2,000.00"},
    {"pr_id": 7, "pr_titulo": "MBOARD ASUS PRB760",         "pr_url": "./public/img/productos/MBOARD-ASUS-PRB760.jpg",        "pr_descripcion": "", "pr_valor": "2,000.00"},
    {"pr_id": 8, "pr_titulo": "MBOARD ASUS PRZ690PD4",      "pr_url": "./public/img/productos/MBOARD-ASUS-PRZ690PD4.jpg",     "pr_descripcion": "", "pr_valor": "2,000.00"},
    {"pr_id": 10, "pr_titulo": "MONITOR ASUS VG23",         "pr_url": "./public/img/productos/MONITOR-ASUS-VG23.jpg",         "pr_descripcion": "", "pr_valor": "2,000.00"},
    {"pr_id": 11, "pr_titulo": "MONITOR ASUS VG24",         "pr_url": "./public/img/productos/MONITOR-ASUS-VG24.jpg",         "pr_descripcion": "", "pr_valor": "2,000.00"},
    {"pr_id": 12, "pr_titulo": "MONITOR ASUS VG27",         "pr_url": "./public/img/productos/MONITOR-ASUS-VG27.jpg",         "pr_descripcion": "", "pr_valor": "2,000.00"},
    {"pr_id": 13, "pr_titulo": "TVD-ASUS-GTX1650", "pr_url": "./public/img/productos/TVD-ASUS-GTX1650.jpg",                   "pr_descripcion": "", "pr_valor": "2,000.00"},
    {"pr_id": 14, "pr_titulo": "TVD-ASUS-RTX4080", "pr_url": "./public/img/productos/TVD-ASUS-RTX4080.jpg",                   "pr_descripcion": "", "pr_valor": "2,000.00"},
    {"pr_id": 15, "pr_titulo": "TVD-ASUS-RTX40801", "pr_url": "./public/img/productos/TVD-ASUS-RTX40801.jpg",                 "pr_descripcion": "", "pr_valor": "2,000.00"},
]
$(document).ready(() => {
  let html_productos = ""
  $(productos).each((index, elemento) =>{
    console.log(elemento)
    html_productos += fn_html_card(elemento.pr_id, elemento.pr_titulo, elemento.pr_descripcion, elemento.pr_url, elemento.pr_valor)
  })  
  $('#div_elementos').html(html_productos)
})

function fn_html_card(id, titulo, commit, url, total){
    const html_elemento = `
    <div class="col">
    <div class="card" id="producto_${id}">
      <div class="ratio ratio-16x9">
      <img src="${url}" class="card-img-top">
      </div>
      <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text">${commit}</p>
        <a href="#" class="btn btn-primary">Q ${total}</a>
      </div>
    </div>
    </div>
    `
    return html_elemento
}

$('#inp_buscar').keyup( () => {
  const inp_buscar = $('#inp_buscar').val()
  console.log(inp_buscar)
})