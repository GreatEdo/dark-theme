const themeToggle = document.querySelector(".dark-light"),
    body = document.querySelector("body");

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark-mode"){
    body.classList.add("dark");
    themeToggle.classList.toggle("active");
}



themeToggle.addEventListener("click", () =>{
    themeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode", "light-mode");
    }else{
        localStorage.setItem("mode", "dark-mode");
    }
});