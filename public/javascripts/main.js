/*----- constants -----*/


/*----- state variables -----*/
const hideClassName = "hide";
const greyClassName = "grey";

/*----- cached elements  -----*/
const sideNavCreateEl = document.getElementById("create");
const sideNavMyPostEl = document.getElementById("my-post");
const sideNavLikeEl = document.getElementById("like");

const createPostFormEl = document.getElementById("form-wrapper");
const closePostFormBtn = document.getElementById("close-create-form");

/*----- event listeners -----*/
sideNavCreateEl.addEventListener('click', showCreateForm);
closePostFormBtn.addEventListener('click', hideCreateForm);
sideNavMyPostEl.addEventListener("click", goToMyPost);
sideNavLikeEl.addEventListener('click', goToLike);

/*----- functions -----*/
function showCreateForm() {
    if (!sideNavCreateEl.classList.contains(greyClassName)) {
        createPostFormEl.classList.remove(hideClassName);
    }
}

function hideCreateForm() {
    createPostFormEl.classList.add(hideClassName);
}

function goToMyPost() {
    if (!sideNavMyPostEl.classList.contains(greyClassName)) {
        window.location.href = "/insightify/mypost";
    }
}

function goToLike() {
    if (!sideNavLikeEl.classList.contains(greyClassName)) {
        window.location.href = "/insightify/like";
    }
}