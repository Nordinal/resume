const module = document.querySelector(".module")
let x = this.window.pageXOffset
let y = this.window.pageYOffset

const removeScroll = function(event){
    this.window.scrollTo(x, y)
}


function visabilityModule(bool){
    x = this.window.pageXOffset
    y = this.window.pageYOffset
    if(bool){
        module.classList.remove("hidden")
        window.addEventListener('scroll', removeScroll)
    }
    else{
        module.classList.add("hidden")
        window.removeEventListener('scroll', removeScroll)
    }
}

function inNewWindow(href){
    window.open(href, '_blank')
    visabilityModule(false)
}

function moduleWindow(event){
    event.stopPropagation()
}
