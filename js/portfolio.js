let introSection = document.querySelector(".intro-section")
let listBtn = document.querySelector(".list")
let aside = document.querySelector("aside")
let closeBtn = document.querySelector(".close-btn")
let loader = document.querySelector(".loader")
let mainSection = document.querySelector(".main-section")
mainSection.style.opacity = "0"
setTimeout(() => {
    loader.style.opacity = "0"
},1000)

setTimeout(() => {
    loader.classList.remove("d-flex")
    loader.classList.add("d-none")
    mainSection.style.opacity = "1"
},1500)



introSection.addEventListener("mousemove" , function (e) {
    let element = document.createElement("div")
    element.setAttribute("class" ,"element")
    element.setAttribute("style" , `left: ${e.clientX - 20}px ; top: ${e.clientY - 20}px`)
    element.onanimationend = () => {
    element.remove()
    }
    introSection.insertAdjacentElement("beforeend" , element)
})

listBtn.addEventListener("click" , () => {
    aside.classList.add("block")
    setTimeout(() => {
        aside.classList.add("active")
        listBtn.style.display = "none"

    },200)
})
closeBtn.addEventListener("click", () => {
    setTimeout(() => {
        aside.classList.remove("block")
        listBtn.style.display = "block"
    },200)
    aside.classList.remove("active")
})



