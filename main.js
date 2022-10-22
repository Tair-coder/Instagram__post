let cs = document.querySelector('.ps');
let btn = document.querySelector('button');
let sp = document.querySelector('span')
let btnRun = true
turnColor('red')

cs.addEventListener('input',(e)=> {
    
    if(e.target.value.length < 8){
        turnColor('red')
        message(true)
        final(false)
        btnRun = true
    }
    if(e.target.value.length >= 8){
        turnColor('green')
        message(false)
        final(true)
        btnRun = false
        btn.style.left = 0
    }
})

function turnColor(color){
    cs.style.border = `1px solid ${color}`
}
function message(boolean) {
    if(boolean){
        sp.style.display = 'flex'
    }
    else{
        sp.style.display = 'none'

    }
}
function final(bool){
    if(bool){
        btn.classList.add('active');
    }else{
        btn.classList.remove('active')
    }
}
btn.addEventListener('mouseover',(e)=> {
        if(btnRun){
            e.preventDefault()
            e.target.classList.toggle('right')
        }else{
            
        }
})