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
let txtColor2 = '#554C49'

const aboutTxt = document.querySelector('#about-text')
const projectSectionTitle = document.querySelector(".projects-section-title")

const contactHeader = document.querySelector("#contact-header")
const contactName = document.querySelector("#contact-name")
const contactMail = document.querySelector("#contact-mail")
const contactFile = document.querySelector("#contact-file")
const contactSend = document.querySelector("#contact-send")
const contactMessage = document.querySelector("#contact-message")









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
  projectSectionTitle.innerHTML = langPack[lang].projectSectionTitle
  contactHeader.innerHTML = langPack[lang].form.title
  // contactName = document.querySelector("#contact-name")
  // contactMail = document.querySelector("#contact-mail")
  // contactFile = document.querySelector("#contact-file")
  // contactSend = document.querySelector("#contact-send")
  // contactMessage = document.querySelector("#contact-message")
}

langBtns.forEach(btn => btn.addEventListener('click', e => switchLanguage(e.target)))

// "form":{
//   "title": "Write me a message",
//   "name": "name",
//   "mail": "mail",
//   "placeholder": "type here...",
//   "file": "add a file",
//   "send": "send"
// }