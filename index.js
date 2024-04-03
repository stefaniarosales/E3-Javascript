const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

//selección//
const card = document.querySelector("#idCard");
const btn = document.getElementById("btn");
const inputNumber = document.getElementById("buscarId");
const noEncontrado= document.getElementById("noEncontrado")

//función para capturar el evento click
btn.addEventListener("click", () => {
  const buscarId = inputNumber.value; //carturamos el value del input
  if(inputVacio(buscarId)){
    card.innerHTML = `<h3>Campo vacio</h3>`
    return
  }
  buscarPizza(buscarId, pizzas);
});

//función para buscar la pizza
const buscarPizza = (id, array) => {
  let exist = false
  let obj = {}
  array.find((value) => {
    if (value.id === parseInt(id)) {
      exist = true
      obj = value
      let cardPizzaEncontrada =`
        <div id="card">
                <h2>${value.nombre}</h2>
                <p>Precio: $${value.precio}</p>
                <p>Ingredientes: ${value.ingredientes}</p>
                <img src=${value.imagen} alt="pizza">
        </div>`
      card.innerHTML = cardPizzaEncontrada;
      
    } 
  })

  if (exist) {
    localStorage.setItem("pizza",JSON.stringify(obj))
  } else {
    localStorage.removeItem("pizza")
      card.innerHTML = `<h3>La pizza ${id} no existe</h3>` 
  }
};


//funcion para validar campo vacio
const inputVacio =(inputValue)=>{
  return !inputValue.trim().length;
}

//funcion para obtener lo que hay en el localStorage guardado
const obtenerPizza= ()=>{
  let pizza = JSON.parse(localStorage.getItem("pizza"))
  console.log(pizza);
  if(pizza != null){
    let cardPizzaEncontrada =`
        <div id="card">
                <h2>${pizza.nombre}</h2>
                <p>Precio: $${pizza.precio}</p>
                <p>Ingredientes: ${pizza.ingredientes}</p>
                <img src=${pizza.imagen} alt="pizza">
        </div>`
      card.innerHTML = cardPizzaEncontrada;
  }
}

obtenerPizza()

