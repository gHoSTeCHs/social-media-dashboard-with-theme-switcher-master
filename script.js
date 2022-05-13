const checkBox = document.getElementById('checkbox');
const label = document.querySelector('.label')
const ball = document.querySelector('.ball')

checkBox.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  label.classList.toggle('dark')
  ball.classList.toggle('dark')
})


