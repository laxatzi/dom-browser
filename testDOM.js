//callback
const callback = function callback(evt){
    // escape program in case of click occurring in an irrelevant link
    if (!evt.target.classList.contains('accordion_toggle')) return;
   // content of tab
    const accordionContent = document.querySelector(evt.target.hash);
  // if no content bail.
    if (!accordionContent) return;

  // prevent strange/default browser behaviour
   evt.preventDefault();

 // toggle accordion tabs
   if (accordionContent.classList.contains('active')) {
       accordionContent.classList.remove('active');
       return;
   }
   
    // create array of accordions 
    const accordions = Array.from(document.querySelectorAll('.accordion_content.active'));
    // close all accordioncontents by removing active
    accordions.forEach((accordion) => {
        accordion.classList.remove('active');
    });
   // expand tab
    return accordionContent.classList.add('active');
}
document.addEventListener('click', callback)