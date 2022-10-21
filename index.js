let unselected = document.querySelector('.unselected')
let selected = document.querySelector('.selected')
let allButtons = document.querySelectorAll('.btn').length
for (let i = 0; i < allButtons; i++) {
    document.querySelectorAll('.btn')[i].addEventListener('click', clicar)
}

function rating(){
   unselected.style.display = 'none'
   selected.style.display = 'inherit'
}

function clicar(){
    let button123 = this.innerHTML
    rate (button123)
}

function rate(key) {
    switch (key) {
        case "1":
            document.querySelector('.submit').addEventListener('click', rating)
            document.querySelector('.image-text').innerHTML = 'You Selected 1 out of 5'
            break
        case "2":
            document.querySelector('.submit').addEventListener('click', rating)
            document.querySelector('.image-text').innerHTML = 'You Selected 2 out of 5'
            break
        case "3":
            document.querySelector('.submit').addEventListener('click', rating)
            document.querySelector('.image-text').innerHTML = 'You Selected 3 out of 5'
            break
        case "4":
            document.querySelector('.submit').addEventListener('click', rating)
            document.querySelector('.image-text').innerHTML = 'You Selected 4 out of 5'
            break
        case "5":
            document.querySelector('.submit').addEventListener('click', rating)
            document.querySelector('.image-text').innerHTML = 'You Selected 5 out of 5'
            break
            default:
    }
}