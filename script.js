// HTMLCollection de todos los list item
let lists = document.getElementsByClassName("list");

// Contenedor Derecho
let rightBox = document.getElementById("right");

// Contenedor Izquierdo
let leftBox = document.getElementById("left");


for(list of lists){
    // dragstart: evento que se dispara cuando el usuario comienza a arrastrar un elemento.
    list.addEventListener("dragstart", (e) =>{

        // Se almacena el elemento que está siendo arrastrado
        let selected = e.target;

        // dragover: evento que se dispara cuando un elemento arrastrado está sobre el área donde se puede soltar
        rightBox.addEventListener("dragover", (e) =>{
            
            /* evita el comportamiento predeterminado del navegador 
            (que podría impedir que el elemento sea soltado en este contenedor).*/
            e.preventDefault()
        })

        //  drop: evento que se dispara cuando el usuario suelta el elemento en este contenedor
        rightBox.addEventListener("drop", () =>{
            rightBox.appendChild(selected);
            selected = null;
        })


        leftBox.addEventListener("dragover", (e) =>{
            e.preventDefault()
        })

        leftBox.addEventListener("drop", () =>{
            leftBox.appendChild(selected);
            selected = null;
        })
    });
}
