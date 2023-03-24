// change navbar styles on scroll.
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)

})
// show/hide faq answer;
const faqs =document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        const icon =faq.querySelector('.faq_icon span');
        if(icon.className==='add'){
            icon= remove;
        }
    })
})
console.log(remove)
// <span class="material-symbols-outlined"> remove</span>

