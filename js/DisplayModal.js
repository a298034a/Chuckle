const memberModal = document.getElementById("member-modal");
const memberModalCheckbox = document.getElementById("member-modal-switch");

memberModal.style.display = "none";

memberModalCheckbox.addEventListener('change',()=>{
    if(memberModalCheckbox.checked){
        memberModal.style.display = "flex";
    }
    else{
        memberModal.style.display = "none";
    }
});

const searchModal = document.getElementById("search-modal");
const searchModalCheckbox = document.getElementById("search-modal-switch");

searchModal.style.display = "none";

searchModalCheckbox.addEventListener('change',()=>{
    if(searchModalCheckbox.checked){
        searchModal.style.display = "block";
    }
    else{
        searchModal.style.display = "none";
    }
});