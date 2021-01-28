// LANGUAGE SWITCH

const engBtn = document.querySelector('#eng-btn')
const ruBtn = document.querySelector('#ru-btn')
const deBtn = document.querySelector('#de-btn')
const langBtns = [engBtn, ruBtn, deBtn]


const aboutBtn = document.querySelector('#about-btn')
const galeryBtn = document.querySelector('#galery-btn')
const contactBtn = document.querySelector('#contact-btn')
const impressumBtn = document.querySelector('#impressum-btn')


const txtColor1 = '#FFFDFD'
const txtColor2 = '#554C49'

const aboutTxt = document.querySelector('#about-text')



const switchLanguage = (target) => {

  langBtns.forEach(btn => {
    btn.style.color = txtColor2
  })

  const id = target.id
  switch (id) {
    case "eng-btn":
      engBtn.style.color = txtColor1
      replaceHtml("eng")
      break;
    case "de-btn":
      deBtn.style.color = txtColor1
      replaceHtml("de")
      break;
    case "ru-btn":
      ruBtn.style.color = txtColor1
      replaceHtml("ru")
      break;

  }
}

const replaceHtml = (lang) => {
  aboutTxt.innerHTML = langPack[lang].about
  aboutBtn.innerHTML = langPack[lang].buttons.about
  galeryBtn.innerHTML = langPack[lang].buttons.galery
  contactBtn.innerHTML = langPack[lang].buttons.contact
  impressumBtn.innerHTML = langPack[lang].buttons.impressum
}

langBtns.forEach(btn => btn.addEventListener('click', e => switchLanguage(e.target)))