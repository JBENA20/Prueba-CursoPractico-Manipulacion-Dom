const obj = {
    nombre: 'Fulanito',
    edad: 3,
    comidasFavoritas: ['Pollo frito', 'vegetales'],
  };

  function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

imprimirElementoPorElementoObjeto(obj)