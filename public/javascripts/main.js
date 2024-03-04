/*----- constants -----*/


/*----- state variables -----*/
const hideClassName = "hide";
const greyClassName = "grey";

/*----- cached elements  -----*/
const sideNavCreateEl = document.getElementById("create");
const createPostFormEl = document.getElementById("form-wrapper");
const closePostFormBtn = document.getElementById("close-create-form");

/*----- event listeners -----*/
sideNavCreateEl.addEventListener('click', showCreateForm);
closePostFormBtn.addEventListener('click', hideCreateForm);

/*----- functions -----*/
function showCreateForm() {
    if (!sideNavCreateEl.classList.contains(greyClassName)) {
        createPostFormEl.classList.remove(hideClassName);
    }
    
}

function hideCreateForm() {
    createPostFormEl.classList.add(hideClassName);
}

