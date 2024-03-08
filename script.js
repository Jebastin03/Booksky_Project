var popupbotton = document.getElementById("add-popup-button")
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")

popupbotton.addEventListener("click", function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

var addbookbutton = document.getElementById("add-book")

addbookbutton.addEventListener("click", function(event){
    event.preventDefault()
})

// Select container, add-bbok-title-input, book-author-input, book-description-input
var container = document.querySelector(".container")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

var addbook = document.getElementById("add-book")

addbook.addEventListener("click", function(event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5> <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)

    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function deletebook(event){
    console.log("djafklsj")
    event.target.parentElement.remove()
}