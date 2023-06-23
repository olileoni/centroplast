// change city
const changeLocation = document.querySelector('.change-city-header')
changeLocation.addEventListener('click', (e) => {
    const self = e.currentTarget
    const control = self.querySelector('.change-city-header-control')
    const content = self.querySelector('.change-city-header-content')
    self.classList.toggle('open')
})

const changeLocationFooter = document.querySelector('.change-city-footer')
changeLocationFooter.addEventListener('click', (e) => {
    const self = e.currentTarget
    const controlFooter = self.querySelector('.change-city-header-footer')
    const contentFooter = self.querySelector('.change-city-header-footer')
    self.classList.toggle('open')
})

// burger menu

const menu = document.querySelector('.burger-menu') 
const header = document.querySelector('.header') 
const logo = document.querySelector('.header-top-logo')

    menu.addEventListener('click', () => {
        header.classList.toggle('active')
    })

    menu.addEventListener('click', () => {
        document.getElementById('logo').classList.toggle('animate')
    })



// form

const form = document.querySelector('.header-form')
const btn = document.querySelector('.header-button')
const btnClose = document.querySelector('.header-form-content-close')
const body = document.body

btn.addEventListener('click', () => {
    form.classList.add('open')
})


btnClose.addEventListener('click', () => {
    form.classList.remove('open')
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        form.classList.remove('open')
        body.classList.remove('lock')
    }
})

document.querySelector('.header-form .header-form-content').addEventListener('click', event => {
    event._isClickWithInModal = true;
    body.classList.remove('lock')
});



form.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');
        body.classList.remove('lock')
});


// slider

const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

    

