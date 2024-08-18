let save = document.querySelector("#save")
let create = document.querySelector("#create")
let created = document.querySelector("#created")
let hh = document.querySelector("#hh")
let saved = document.querySelector("#saved")
let img = document.querySelector("#img")


 save.addEventListener("click",function(e){
     saved.classList.remove("hidden")
     hh.classList.remove("hidden")
     img.classList.remove("hidden")
     created.classList.add("hidden")
     
    })
create.addEventListener("click",function(e){
    saved.classList.add("hidden")
     hh.classList.add("hidden")
     img.classList.add("hidden")
     created.classList.remove("hidden")
     
    })