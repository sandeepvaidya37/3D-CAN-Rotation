const banner = document.querySelector(".product");
const video2 = document.querySelector(".video2");
const Title = document.querySelector(".Title");

banner.addEventListener("mouseenter", ()=>{
  video2.style.opacity = '1';
  Title.style.color='#FFF8DC';
});
banner.addEventListener("mouseleave", ()=>{
  video2.style.opacity = '0';
  Title.style.color='#FFD700';
  
});
//D88CA0