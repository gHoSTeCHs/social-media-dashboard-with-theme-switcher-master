const checkBox = document.getElementById('checkbox');
const label = document.querySelector('.label')
const ball = document.querySelector('.ball')
const follower = document.querySelectorAll('.follower')
const h1 = document.querySelectorAll('h1')
const h2 = document.querySelectorAll('h2')
const boxes = document.querySelectorAll('.box')
const h5 = document.querySelectorAll('h5')

checkBox.addEventListener('change', () => {
    document.body.classList.toggle('light')
    label.classList.toggle('light')
    ball.classList.toggle('light')
    follower.forEach(follow => {
        follow.classList.toggle('light')
    })
    h1.forEach(h => {
        h.classList.toggle('light')
    })
    h2.forEach(e => {
        e.classList.toggle('light')
    })
    boxes.forEach(box => {
        box.classList.toggle('light')
    })
    h5.forEach(el => {
        el.classList.toggle('light')
    })
    
})


