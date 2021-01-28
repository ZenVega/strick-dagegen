// LANGUAGE SWITCH

const engBtn = document.querySelector('#eng-btn')
const ruBtn = document.querySelector('#ru-btn')
const deBtn = document.querySelector('#de-btn')
const langBtns = [engBtn, ruBtn, deBtn]

const txtColor1 = '#FFFDFD'
const txtColor2 = '#554C49'

const aboutTxt = document.querySelector('#about-text')


var langPack
fetch('..data/texts.json')
.then(response => {
   return response.json();
})
.then(data => langPack = data);
console.log(langPack)

const switchLanguage = (target) => {

  langBtns.forEach(btn => {
    btn.style.color = txtColor2
  })

  const id = target.id
  switch (id) {
    case "eng-btn":
      engBtn.style.color = txtColor1
      break;
    case "de-btn":
      deBtn.style.color = txtColor1
      break;
    case "ru-btn":
      ruBtn.style.color = txtColor1
      break;

  }
}


langBtns.forEach(btn => btn.addEventListener('click', e => switchLanguage(e.target)))