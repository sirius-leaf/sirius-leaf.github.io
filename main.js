const mainContainer = document.getElementsByTagName('main')[0];
const scrollSensitivity = 0.5;

mainContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  mainContainer.scrollLeft += event.deltaY * scrollSensitivity;
});