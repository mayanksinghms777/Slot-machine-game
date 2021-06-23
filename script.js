let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let btn = document.getElementById('btn')
let inpSpeed = document.getElementById('inpSpeed')

let values = [
    '😃', '😇', '😋', '😂', '😎', '😭', '😡'
]

function getRandomValue() {
    return values[Math.floor(Math.random() * 7)]
}

let animationId;

function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)

    value1.style.animationDuration = ' calc(1s / var(--speed))'
    value2.style.animationDuration = ' calc(1s / var(--speed))'
    value3.style.animationDuration = ' calc(1s / var(--speed))'

    animationId = setInterval(() => {

        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    
    }, 1000 / newSpeed)
}

inpSpeed.onclick = function (ev) {
    // document.documentElement => this is ":root" of css
    document.documentElement.style.setProperty('--speed', ev.target.value)

    updateAnimation(ev.target.value)

}

button=btn.onclick = function(){
    clearInterval(animationId)
    value1.style.animationDuration = '0s'
    value2.style.animationDuration = '0s'
    value3.style.animationDuration = '0s'
    
    win()
    
}
function win(){

    if(value1.innerText === value2.innerText && value2.innerText === value3.innerText){
        alert('YOU WIN !!')
        console.log(value1.innerText)
    }
}
