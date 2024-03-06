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
const showPostImageEl = document.getElementById("show-post-image");

const likeNotLoggedBtnEl = document.getElementById('like-not-loggedin');

const tagDeleteBtnEl = document.getElementById("tag-delete-btn");
const deleteBoxEl = document.getElementById("delete-box");
const noBtnEl = document.getElementById("no-btn");

const editBtnEl = document.getElementById("tag-edit-btn");
const updateContentEl = document.getElementById("tag-update-content");

/*----- event listeners -----*/
sideNavCreateEl.addEventListener('click', showCreateForm);
closePostFormBtn.addEventListener('click', hideCreateForm);
sideNavMyPostEl.addEventListener("click", goToMyPost);
sideNavLikeEl.addEventListener('click', goToLike);
if (tagDeleteBtnEl !== null) {
    tagDeleteBtnEl.addEventListener("click", showDeleteBox);
}
if (noBtnEl !== null) {
    noBtnEl.addEventListener("click", hideDeleteBox);
}
if (editBtnEl !== null) {
    editBtnEl.addEventListener("click", showUpdateBtnAndEnableEdit)
}
if (likeNotLoggedBtnEl !== null) {
    likeNotLoggedBtnEl.addEventListener('click', alertLogIn);
}


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

function alertLogIn() {
    alert("Log in to like");
}

function resizeShowPostImageSize() {
    if (showPostImageEl) {
        const oldWidth = showPostImageEl.width;
        const oldHeight = showPostImageEl.height;
        const ratio = oldHeight/oldWidth;
        if (oldWidth > oldHeight) {
            const newWidth = 850;
            const newHeight = newWidth * ratio;
            if (newHeight > 730) {
                showPostImageEl.height = 730;
                showPostImageEl.width = 730 / ratio;
            } else {
                showPostImageEl.width = 850;
                showPostImageEl.height = 850 * ratio;
            }
        } else if (oldWidth < oldHeight) {
            showPostImageEl.height = 730;
            showPostImageEl.width = 730 / ratio;
        } else {
            showPostImageEl.height = 730;
            showPostImageEl.width = 730 * ratio;
        }
    }
}

function showDeleteBox() {
    if (tagDeleteBtnEl && deleteBoxEl.classList.contains(hideClassName)) {
        deleteBoxEl.classList.remove(hideClassName)
    }
}

function hideDeleteBox() {
    if (noBtnEl && !deleteBoxEl.classList.contains(hideClassName)) {
        deleteBoxEl.classList.add(hideClassName)
    }
}

function showUpdateBtnAndEnableEdit() {
    if (editBtnEl && updateContentEl.readOnly) {
        updateContentEl.readOnly = false;
    } else if (editBtnEl && !updateContentEl.readOnly) {
        updateContentEl.readOnly = true;
        updateContentEl.focus();
    }
}

function init() {
    resizeShowPostImageSize();
}

init();