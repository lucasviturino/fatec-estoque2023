// const modal = document.querySelector('.modal-container')
// const tbody = document.querySelector('tbody')
// const sNome = document.querySelector('#m-nome')
// const sMarca = document.querySelector('#m-marca')
// const sQuantidade = document.querySelector('#m-quantidade')
// const sEstado = document.querySelector('#m-estado')
// const btnSalvar = document.querySelector('#btnSalvar')

// document.getElementById("ButtonLogout").onclick = function () {
//   location.href = "http://127.0.0.1:5500/assets/LoginPage/index.html";
// };

// let itens
// let id

// function openModal(edit = false, index = 0) {
//   modal.classList.add('active')

//   modal.onclick = e => {
//     if (e.target.className.indexOf('modal-container') !== -1) {
//       modal.classList.remove('active')
//     }
//   }

//   if (edit) {
//     sNome.value = itens[index].nome
//     sMarca.value = itens[index].marca
//     sQuantidade.value = itens[index].quantidade
//     sEstado.value = itens[index].estado
//     id = index
//   } else {
//     sNome.value = ""
//     sMarca.value = ""
//     sQuantidade.value = ""
//     sEstado.value = ""
//   }
  
// }

// function editItem(index) {

//   openModal(true, index)
// }

// function deleteItem(index) {
//   itens.splice(index, 1)
//   setItensBD()
//   loadItens()
// }

// function insertItem(item, index) {
//   let tr = document.createElement('tr')

//   tr.innerHTML = `
//     <td>${item.nome}</td>
//     <td>${item.marca}</td>
//     <td> ${item.quantidade} UN.</td>
//     <td> ${item.estado}</td>

//     <td class="acao">
//       <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
//     </td>
//     <td class="acao">
//       <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
//     </td>
//   `
//   tbody.appendChild(tr)
// }

// btnSalvar.onclick = e => {
  
//   if (sNome.value == '' || sMarca.value == '' || sQuantidade.value == '' || sEstado.value == '') {
//     return
//   }

//   e.preventDefault();

//   if (id !== undefined) {
//     itens[id].nome = sNome.value
//     itens[id].marca = sMarca.value
//     itens[id].quantidade = sQuantidade.value
//     itens[id].estado = sEstado.value
//   } else {
//     itens.push({'nome': sNome.value, 'marca': sMarca.value, 'quantidade': sQuantidade.value, 'estado': sEstado.value, })
//   }

//   setItensBD()

//   modal.classList.remove('active')
//   loadItens()
//   id = undefined
// }

// function loadItens() {
//   itens = getItensBD()
//   tbody.innerHTML = ''
//   itens.forEach((item, index) => {
//     insertItem(item, index)
//   })

// }

// const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
// const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

// loadItens()

const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sMarca = document.querySelector('#m-marca')
const sQuantidade = document.querySelector('#m-quantidade')
const sEstado = document.querySelector('#m-estado')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sMarca.value = itens[index].marca
    sQuantidade.value = itens[index].quantidade
    sEstado.value = itens[index].estado
    id = index
  } else {
    sNome.value = ''
    sMarca.value = ''
    sQuantidade.value = ''
    sEstado.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.marca}</td>
    <td> ${item.quantidade} UN.</td>
    <td> ${item.estado}</td>

    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || sMarca.value == '' || sQuantidade.value == '' || sEstado.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].marca = sMarca.value
    itens[id].quantidade = sQuantidade.value
    itens[id].estado = sEstado.value
  } else {
    itens.push({'nome': sNome.value, 'marca': sMarca.value, 'quantidade': sQuantidade.value, 'estado': sEstado.value, })
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()