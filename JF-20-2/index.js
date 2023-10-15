import './index.css';

const consent = document.querySelector('.cookie-consent')
const button = document.querySelector('.cookie-consent__button')
const storage = localStorage.getItem('cookie')
const visibly = storage ? storage : false

if (visibly) {
  consent.remove()
} else {
  button.addEventListener('click', (event) => {
    consent.remove()
    localStorage.setItem('cookie', true)
  })
}

