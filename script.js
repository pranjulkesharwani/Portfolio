console.log("script running...")
document.querySelector('.wrong').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=> {
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.more').style.display = 'inline'
        document.querySelector('.wrong').style.display = 'none'

    }
    else{
        document.querySelector('.more').style.display = 'none'
        document.querySelector('.wrong').style.display = 'inline'
    }
})