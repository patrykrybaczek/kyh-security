const toggle = document.getElementById("toggle-btn");
toggle.addEventListener("click", () => {
  let toggleTheMenu = document.getElementById("toggle-menu");
  toggleTheMenu.classList.toggle("active-toggle");
});

const togglebutton = document.getElementById("toggle-person");
togglebutton.addEventListener('click', ()=>{
  document.getElementById('drop-s3').classList.toggle('active-p');
})
const togglebuttonB = document.getElementById('toggle-bevakning');
togglebuttonB.addEventListener('click', ()=>{
  document.getElementById('drop-s2').classList.toggle('active-b');


})
const togglebuttonE = document.getElementById('toggle-egendom');
togglebuttonE.addEventListener('click',()=>{
  document.getElementById('drop-s').classList.toggle('active-e')
})