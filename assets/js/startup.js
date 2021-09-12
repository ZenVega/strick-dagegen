const previewImage = document.querySelector(".preview-img")
const imageWrapper = document.querySelector(".image-wrapper")

const imgAmount = 10
const imgIdArray = [...Array(imgAmount).keys()]

let shuffledImages = imgIdArray
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)


  
const changeStyle = id => {
  sections.forEach(section => section.style.fontFamily = "'Londrina Solid', cursive")
  
  if(imgPack[id].frontPage){
    const styleSheet = document.documentElement.style
    styleSheet.setProperty('--bg-color-1', imgPack[id].bg2);
    styleSheet.setProperty('--bg-color-2', imgPack[id].bg1);
    styleSheet.setProperty('--txt-color-2', imgPack[id].txt1);

    const hoverColor = 
      imgPack[id].bg1 == "#568B5B"? "#1F4323":
      imgPack[id].bg1 == "#E36A4F"? "#1D476B":
      imgPack[id].bg1 == "#568B5B"? "#568B5B":
      imgPack[id].bg1 == "#E35B4F"? "#C42A1C":
      "#FFFDFD"
    styleSheet.setProperty('--txt-color-hover', hoverColor);

    txtColor2 = imgPack[id].txt1


    let imgArray = shuffledImages.map(id => {
      let img = document.createElement('img')
      img.src = `assets/images/img${id}.jpg`
      img.idInPack = id
      img.alt = imgPack[img.idInPack].alt["de"]
      return img
    })
    
    previewImage.src = imgArray[0].src
    previewImage.idInPack = imgArray[0].idInPack
    previewImage.alt = imgArray[0].alt
    
    for(i = 1; i <= 9; i++){
      imageWrapper.appendChild(imgArray[i])
    }

  } else {
    shuffledImages.push(shuffledImages.shift())
    changeStyle(shuffledImages[0])
  }
}
  
changeStyle(shuffledImages[0])



