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
const searchInputEl = document.getElementById("search-input");
const editBtnEl = document.getElementById("tag-edit-btn");
const updateContentEl = document.getElementById("tag-update-content");
const cancellEditBtnEl = document.getElementById("tag-cancell-edit-btn");
const updateContentBtnEl = document.getElementById("tag-update-btn");

/*----- event listeners -----*/
sideNavCreateEl.addEventListener('click', showCreateForm);
closePostFormBtn.addEventListener('click', hideCreateForm);
sideNavMyPostEl.addEventListener("click", goToMyPost);
sideNavLikeEl.addEventListener('click', goToLike);
if (searchInputEl) {
    searchInputEl.addEventListener('click', clearSearchInput); 
}
if (tagDeleteBtnEl) {
    tagDeleteBtnEl.addEventListener("click", showDeleteBox);
}
if (noBtnEl) {
    noBtnEl.addEventListener("click", hideDeleteBox);
}
if (editBtnEl) {
    editBtnEl.addEventListener("click", showUpdateBtnAndEnableEdit)
}
if (likeNotLoggedBtnEl) {
    likeNotLoggedBtnEl.addEventListener('click', alertLogIn);
}
if (cancellEditBtnEl) {
    cancellEditBtnEl.addEventListener("click", hideContentUpdateConfirmBtn);
}


/*----- functions -----*/
// Show create form
function showCreateForm() {
    if (!sideNavCreateEl.classList.contains(greyClassName)) {
        createPostFormEl.classList.remove(hideClassName);
    }
}

// hide create form
function hideCreateForm() {
    createPostFormEl.classList.add(hideClassName);
}

// go to mypost page
function goToMyPost() {
    if (!sideNavMyPostEl.classList.contains(greyClassName)) {
        window.location.href = "/insightify/mypost";
    }
}

// go to like page
function goToLike() {
    if (!sideNavLikeEl.classList.contains(greyClassName)) {
        window.location.href = "/insightify/like";
    }
}

// alert user log in to like
function alertLogIn() {
    alert("Log in to like");
}

// resize the post image
function resizeShowPostImageSize() {
    if (showPostImageEl) {
        const oldWidth = showPostImageEl.width;
        const oldHeight = showPostImageEl.height;
        const ratio = oldHeight/oldWidth;
        // if current width greater than current height
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
            // if current width smaller than height
        } else if (oldWidth < oldHeight) {
            showPostImageEl.height = 730;
            showPostImageEl.width = 730 / ratio;
            // if the current height equals width
        } else {
            showPostImageEl.height = 730;
            showPostImageEl.width = 730 * ratio;
        }
    }
}

// show the delete box
function showDeleteBox() {
    if (tagDeleteBtnEl && deleteBoxEl.classList.contains(hideClassName)) {
        deleteBoxEl.classList.remove(hideClassName)
    }
}

// hide the delete box
function hideDeleteBox() {
    if (noBtnEl && !deleteBoxEl.classList.contains(hideClassName)) {
        deleteBoxEl.classList.add(hideClassName)
    }
}

// show or hide the content change confirm btn
function showUpdateBtnAndEnableEdit() {
    if (editBtnEl && updateContentEl.readOnly) {
        cancellEditBtnEl.classList.remove(hideClassName);
        updateContentBtnEl.classList.remove(hideClassName);
        updateContentEl.readOnly = false;
        updateContentEl.focus();
    } else if (editBtnEl && !updateContentEl.readOnly) {
        cancellEditBtnEl.classList.add(hideClassName);
        updateContentBtnEl.classList.add(hideClassName);
        updateContentEl.readOnly = true;

    }
}

// hide content update confirm btn
function hideContentUpdateConfirmBtn() {
    if (cancellEditBtnEl) {
        cancellEditBtnEl.classList.add(hideClassName);
        updateContentBtnEl.classList.add(hideClassName);
        updateContentEl.readOnly = true;
    }
}

// delete the default input
function clearSearchInput() {
    if (searchInputEl.value === "Search...") {
        searchInputEl.value = "";
    }
}

// init function
function init() {
    resizeShowPostImageSize();
}

init();