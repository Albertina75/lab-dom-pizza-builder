module.exports = {
  server: {
    command: 'serve . -l 4444',
    port: 4444
  }
};
// elementos de los botones
const pepperoniButton = document.querySelector('.btn-peppeoni');
const mushroomsButton = document.querySelector('.btn-mushrooms');
const greenPeppersButton = document.querySelector('.btn-green-peppers');


// agrego click a los botones
pepperoniButton.addEventListener('click', () => {
//llamo a las funciones para mostrar o no el ingrediente
renderPepperoni();
});
mushroomsButton.addEventListener('click', () => {
  renderMushrooms();
});
greenPeppersButton.addEventListener('click', () => {
renderGreenPepperoni();
});

