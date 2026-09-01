const mainContainer = document.getElementsByTagName('main')[0];
const scrollSensitivity = 0.5;

mainContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  mainContainer.scrollLeft += event.deltaY * scrollSensitivity;
});

const updateParallax = () => {
  const scrollLeft = mainContainer.scrollLeft;
  const parallaxLayers = document.querySelectorAll('[data-parallax-speed], [data-x], [data-y]');
  
  parallaxLayers.forEach((layer) => {
     const section = layer.closest('.container');
     const sectionLeft = section.offsetLeft;
     const relativeScroll = scrollLeft - sectionLeft;
     const speed = parseFloat(layer.getAttribute('data-parallax-speed')) || 0;
     
     // 50 is center, 0 is edge, 100 is opposite edge
     const xPercent = layer.hasAttribute('data-x') ? parseFloat(layer.getAttribute('data-x')) : 50;
     const yPercent = layer.hasAttribute('data-y') ? parseFloat(layer.getAttribute('data-y')) : 50;
     
     // Calculate offset from the center of the container
     const offsetX = section.offsetWidth * (xPercent / 100 - 0.5);
     const offsetY = section.offsetHeight * (yPercent / 100 - 0.5);
     
     const finalX = (relativeScroll * speed) + offsetX;
     
     layer.style.transform = `translate(${finalX}px, ${offsetY}px)`;
  });
};

mainContainer.addEventListener('scroll', updateParallax);
window.addEventListener('resize', updateParallax);
updateParallax();