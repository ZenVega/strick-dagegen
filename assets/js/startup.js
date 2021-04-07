const previewImage = document.querySelector(".preview-img")
const imageWrapper = document.querySelector(".image-wrapper")

const imgAmount = 13
const imgIdArray = [...Array(imgAmount).keys()]

const shuffledImages = imgIdArray
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)


const imgArray = shuffledImages.map(id => {
  let img = document.createElement('img')
  img.src = `assets/images/img${id}.jpg`
  return img
})

previewImage.src = imgArray[0].src

for(i = 1; i <= 9; i++){
  console.log(imgArray[i])
  imageWrapper.appendChild(imgArray[i])
}
console.log(imgArray[0].src)
