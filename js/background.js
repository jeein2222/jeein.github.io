const images=[
    "img_1.jpg",
    "img_2.jpg",
    "img_3.jpg", 
    "img_4.jpg",
    "img_5.jpg",
    "img_6.jpg",
    "img_7.jpg",
    "img_8.jpg"
]
// //js에서 img 태그 만들기
// const bgImage=document.createElement("img")
// bgImage.src=`img/${chosenImage}`

// //html에 태그 추가
// document.body.appendChild(bgImage)

function getBackground(){
    const chosenImage=images[Math.floor(Math.random()*images.length)]
    document.body.background=`img/${chosenImage}`
}

getBackground()
setInterval(getBackground,10000)//1초마다 getClock 호출함