let nameField = document.querySelector("#nameField");
let ul = document.querySelector("#nameList");

nameField.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        let name = event.target.value
        createLi(ul, name)
        event.target.value = ""
    }
})
function createLi(ul, name) {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex"
    li.innerHTML = name

    let span = document.createElement('span')
    span.innerHTML = '<i class="fas fa-trash"></i>  Delete'
    span.className = 'ml-auto'
    span.style.color = 'black'
    span.style.cursor = 'pointer'
    span.style.marginLeft = '100px'

    span.addEventListener('click', function () {
        ul.removeChild(li)
    }
    )
    li.appendChild(span)


    ul.appendChild(li)
}