const navColor = function () {
  if (window.scrollY > 320) {
    document.querySelector('nav').classList.add('scrolled')
  } else {
    document.querySelector('nav').classList.remove('scrolled')
  }
}

document.addEventListener('scroll', navColor)
