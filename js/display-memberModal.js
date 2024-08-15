const memberModal = document.getElementById("member-modal");
const checkbox = document.getElementById("member-modal-switch");

memberModal.style.display = "none";

checkbox.addEventListener('change',()=>{
    if(checkbox.checked){
        memberModal.style.display = "flex";
    }
    else{
        memberModal.style.display = "none";
    }
});