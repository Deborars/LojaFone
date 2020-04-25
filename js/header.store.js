const $headerStore = document.querySelector(".header-store");
const $list = $headerStore.querySelector(".list")
const $menu = $headerStore.querySelector(".-menu");

$menu.addEventListener("click", function (){
    $list.classList.toggle("-active");
})