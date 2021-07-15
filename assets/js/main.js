// LANGUAGE SWITCH

const sections = document.querySelectorAll('.section')
const engBtn = document.querySelector('#eng-btn')
const ruBtn = document.querySelector('#ru-btn')
const deBtn = document.querySelector('#de-btn')
const langBtns = [engBtn, ruBtn, deBtn]


const aboutBtn = document.querySelector('#about-btn')
const galleryBtn = document.querySelector('#gallery-btn')
const contactBtn = document.querySelector('#contact-btn')


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
      sections.forEach(section => section.style.fontFamily = "'Londrina Solid', cursive")
      sections.forEach(section => section.style.fontWeight = 400)
      break;
    case "de-btn":
      deBtn.style.color = txtColor1
      replaceHtml("de")
      sections.forEach(section => section.style.fontFamily = "'Londrina Solid', cursive")
      sections.forEach(section => section.style.fontWeight = 400)
      break;
    case "ru-btn":
      ruBtn.style.color = txtColor1
      replaceHtml("ru")
      sections.forEach(section => section.style.fontFamily = "'Cabin Condensed', sans-serif")
      sections.forEach(section => section.style.fontWeight = 700)
      break;
  }
}

const replaceHtml = (lang) => {
  aboutTxt.innerHTML = langPack[lang].about
  aboutBtn.innerHTML = langPack[lang].buttons.about
  galleryBtn.innerHTML = langPack[lang].buttons.galery
  contactBtn.innerHTML = langPack[lang].buttons.contact
  projectSectionTitle.innerHTML = langPack[lang].projectSectionTitle
  contactHeader.innerHTML = langPack[lang].form.title
  contactName.innerHTML = langPack[lang].form.name + '<input type="text" name="name">'
  contactMail.innerHTML = langPack[lang].form.mail + '<input required type="email" name="email">'
  contactFile.innerHTML = langPack[lang].form.file + '<input  type="file" name="myfile">'
  contactSend.innerHTML = langPack[lang].form.send
  contactMessage.placeholder = langPack[lang].form.placeholder
}
langBtns.forEach(btn => btn.addEventListener('click', e => switchLanguage(e.target)))
