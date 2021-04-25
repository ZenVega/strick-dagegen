const previewImage = document.querySelector(".preview-img")
const imageWrapper = document.querySelector(".image-wrapper")

const imgAmount = 13
const imgIdArray = [...Array(imgAmount).keys()]

let shuffledImages = imgIdArray
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)


  
const changeStyle = id => {
  
  if(imgPack[id].frontPage){
    document.documentElement.style.setProperty('--bg-color-1', imgPack[id].bg2);
    document.documentElement.style.setProperty('--bg-color-2', imgPack[id].bg1);
    document.documentElement.style.setProperty('--txt-color-2', imgPack[id].txt1);


    let imgArray = shuffledImages.map(id => {
      let img = document.createElement('img')
      img.src = `assets/images/img${id}.jpg`
      return img
    })
    
    previewImage.src = imgArray[0].src
    
    for(i = 1; i <= 9; i++){
      imageWrapper.appendChild(imgArray[i])
    }

  } else {
    shuffledImages.push(shuffledImages.shift())
    changeStyle(shuffledImages[0])
  }
}
  
changeStyle(shuffledImages[0])



