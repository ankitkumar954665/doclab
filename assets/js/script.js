'use strict'

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback)
  }
}

/**
 * PRELOADER
 *
 * preloader will be visible until document load
 */

const preloader = document.querySelector('[data-preloader]')

window.addEventListener('load', function () {
  preloader.classList.add('loaded')
  document.body.classList.add('loaded')
})

/**
 * MOBILE NAVBAR
 *
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector('[data-navbar]')
const navTogglers = document.querySelectorAll('[data-nav-toggler]')
const overlay = document.querySelector('[data-overlay]')

const toggleNav = function () {
  navbar.classList.toggle('active')
  overlay.classList.toggle('active')
  document.body.classList.toggle('nav-active')
}

addEventOnElements(navTogglers, 'click', toggleNav)

/**
 * HEADER & BACK TOP BTN
 *
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector('[data-header]')
const backTopBtn = document.querySelector('[data-back-top-btn]')

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add('active')
    backTopBtn.classList.add('active')
  } else {
    header.classList.remove('active')
    backTopBtn.classList.remove('active')
  }
}

window.addEventListener('scroll', activeElementOnScroll)

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll('[data-reveal]')

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.15
    ) {
      revealElements[i].classList.add('revealed')
    } else {
      revealElements[i].classList.remove('revealed')
    }
  }
}

window.addEventListener('scroll', revealElementOnScroll)

window.addEventListener('load', revealElementOnScroll)

/**
 * GALLERY IMAGE ANIMATION
 *
 * Add parallax and zoom effects to gallery images on hover and scroll
 */

const galleryItems = document.querySelectorAll('.gallery-item')

// Parallax effect on mouse move
document.addEventListener('mousemove', function (event) {
  galleryItems.forEach(function (item) {
    const image = item.querySelector('.gallery-image')
    const x = (event.clientX / window.innerWidth) * 10
    const y = (event.clientY / window.innerHeight) * 10
    image.style.transform = `scale(1.05) translate(${x * 0.5}px, ${y * 0.5}px)`
  })
})

// Reset parallax on mouse leave
document.addEventListener('mouseleave', function () {
  galleryItems.forEach(function (item) {
    const image = item.querySelector('.gallery-image')
    image.style.transform = 'scale(1) translate(0, 0)'
  })
})

// Individual gallery item hover effect
galleryItems.forEach(function (item) {
  item.addEventListener('mouseenter', function () {
    this.style.animation = 'none'
  })

  item.addEventListener('mouseleave', function () {
    const image = this.querySelector('.gallery-image')
    image.style.transform = 'scale(1) translate(0, 0)'
  })
})
