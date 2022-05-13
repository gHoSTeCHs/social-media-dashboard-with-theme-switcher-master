const checkBox = document.getElementById('checkbox');
const label = document.querySelector('.label')
const ball = document.querySelector('.ball')
const follower = document.querySelectorAll('.follower')
const h1 = document.querySelectorAll('h1')
const h2 = document.querySelector('h2')

checkBox.addEventListener('change', () => {
    document.body.classList.toggle('light')
    label.classList.toggle('light')
    ball.classList.toggle('light')
    h2.classList.toggle('light')
    follower.forEach(follow => {
        follow.classList.toggle('light')
    })
    h1.forEach(h => {
        h.classList.toggle('light')
    })
    
})


