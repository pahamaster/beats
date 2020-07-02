const specificationBtn=document.querySelector("#specificationBtn");
const specificationPopup=document.querySelector("#specificationPopup");

specificationBtn.addEventListener("mouseover", e=>{
  specificationPopup.style.display="block";
});

specificationBtn.addEventListener("mouseout", e=>{
    specificationPopup.style.display="none";
});

specificationPopup.addEventListener("mouseover", e=>{
    specificationPopup.style.display="block";
});

specificationPopup.addEventListener("mouseout", e=>{
  specificationPopup.style.display="none";
});