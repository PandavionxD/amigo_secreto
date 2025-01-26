// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// ? AQUI VA LA CREACION DEL ARRAY
let amigos = [];

// ? AQUI VA LA FUNCION PARA MOSTRAR LOS AMIGOS
const mostrarAmigos = () => {
    let amigosHTML = "";
    amigos.forEach((amigo) => {
      const primeraLetra = amigo.charAt(0).toUpperCase();
      const resto = amigo.slice(1);
      const texto = primeraLetra + resto;
      amigosHTML += `<li>${texto}</li>`;
    });
    document.getElementById("listaAmigos").innerHTML = amigosHTML;
  };
  
  // ? AQUI VA LA FUNCION PARA AGREGAR AMIGOS - que se ejecuta al hacer click en el botón "Agregar amigo" y llamamos la funcion mostrarAmigos() y limpiamso el input
  const agregarAmigo = () => {
    // ? Agarramos el valor del input
    let amigo = document.getElementById("amigo").value;
    //   ? Realizamos la funcion para versi esta vacio el input
    if (amigo.trim() === "") {
      alert("Debe ingresar un nombre");
      return;
    }
    //   ? Agregamos el amigo a la lista
    amigos.push(amigo);
    //   ? Mostramos el amigo en console apra revisar si esta bien
    console.log(amigos);
    //   ? Limpiamos el input
    document.getElementById("amigo").value = "";
    //   ? Mostramos los amigos en el HTML
    mostrarAmigos();
  };

  // ? AQUI VA LA FUNCION PARA SORTEAR AMIGOS - que se ejecuta al hacer click en el botón "Sortear amigo"
const sortearAmigo = () => {
    // ? Agarramos un indice al azar del array de amigos
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    //   ? Mostramos el amigo sorteado en el HTML
    document.getElementById("resultado").innerHTML = amigoSorteado;
  };
  