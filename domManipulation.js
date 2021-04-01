

//callback
const accordionToggler = function accordionToggler(evt){
  if (!evt.target.classList.contains('accordion_toggle')) return;

  const accordionContent = document.querySelector(evt.target.hash);
  if(!accordionContent) return;
  
  evt.preventDefault();

  // toggle same opened tab
  if (accordionContent.classList.contains('active')) {
      accordionContent.classList.remove('active');
      return;
  }
  // close already opened tabs
  const accordions = Array.from(document.querySelectorAll('.accordion_content.active'));
  accordions.forEach((accordion) => {
      accordion.classList.remove('active');
  });

  return accordionContent.classList.add('active');
}
// event listener catching clicks in the document
document.addEventListener('click', accordionToggler);