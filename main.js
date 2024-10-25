window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})
const menu=document.querySelector(".nav_menu");
const menuBtn=document.querySelector("#open-menu-btn");
const closeBtn=document.querySelector("#close-menu-btn");
menuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
})
const closeNav = () => {
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
}
closeBtn.addEventListener('click',closeNav)
const scrollContainer = document.getElementById('image-container');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

// Scroll left
scrollLeftBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -200, // Adjust this value for how much to scroll
    behavior: 'smooth'
  });
});

// Scroll right
scrollRightBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 200, // Adjust this value for how much to scroll
    behavior: 'smooth'
  });
});
