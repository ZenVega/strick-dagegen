// LANGUAGE SWITCH

const sections = document.querySelectorAll('.section')
const engBtn = document.querySelector('#eng-btn')
const ruBtn = document.querySelector('#ru-btn')
const deBtn = document.querySelector('#de-btn')
const langBtns = document.querySelectorAll('.lg-btn')


const aboutBtn = document.querySelector('#about-btn')
const galleryBtn = document.querySelector('#gallery-btn')
const contactBtn = document.querySelector('#contact-btn')
const impressumBtn = document.querySelector('#impressum-btn')
const scrollTopBtn = document.querySelector('.scroll-up-btn')


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
    btn.classList.remove("button-active")
  })
  
  const id = target.id
  switch (id) {
    case "eng-btn":
      engBtn.classList.add("button-active")
      impressumBtn.style.display = "block"
      replaceHtml("eng")
      sections.forEach(section => section.style.fontFamily = "'Londrina Solid', cursive")
      sections.forEach(section => section.style.fontWeight = 400)
      break;
    case "de-btn":
      deBtn.classList.add("button-active")
      impressumBtn.style.display = "block"
      replaceHtml("de")
      sections.forEach(section => section.style.fontFamily = "'Londrina Solid', cursive")
      sections.forEach(section => section.style.fontWeight = 400)
      break;
    case "ru-btn":
      ruBtn.classList.add("button-active")
      impressumBtn.style.display = "none"
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
  impressumBtn.innerHTML = langPack[lang].buttons.impressum
  projectSectionTitle.innerHTML = langPack[lang].projectSectionTitle
  contactHeader.innerHTML = langPack[lang].form.title
  contactName.innerHTML = langPack[lang].form.name + '<input type="text" name="name">'
  contactMail.innerHTML = langPack[lang].form.mail + '<input required type="email" name="email">'
  contactFile.innerHTML = langPack[lang].form.file + '<input  type="file" name="myfile">'
  contactSend.innerHTML = langPack[lang].form.send
  contactMessage.placeholder = langPack[lang].form.placeholder
  const images = [...imageWrapper.childNodes]
  images.shift()
  images.forEach(img => {
    img.alt = imgPack[img.idInPack].alt[lang]
  })
  previewImage.alt = imgPack[previewImage.idInPack].alt[lang]

}

langBtns.forEach(btn => btn.addEventListener('click', e => switchLanguage(e.target)))

//DISPLAY SCROLL BTN

window.addEventListener("scroll", () => {
  const aboutPos = aboutTxt.offsetTop
  const scrollPos = document.documentElement.scrollTop
  if (scrollPos > aboutPos) {
    scrollTopBtn.style.opacity = 1
  } else {
    scrollTopBtn.style.opacity = 0

  }
});
