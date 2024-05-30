let arr = [
  {
      image: "https://m.media-amazon.com/images/I/610jdwxEioL._AC_UL480_FMwebp_QL65_.jpg",
      name: "HANDBAGS"
  },
  {
    image:"https://m.media-amazon.com/images/I/71lShYRQCkL._AC_UL480_FMwebp_QL65_.jpg",
    name:  "PUMPS & HEELS"
  },
  {
      image:"https://m.media-amazon.com/images/I/71cflgAolqL._AC_UL480_FMwebp_QL65_.jpg",
      name:  "WOMEN'S SNEAKERS"
    },
    {
      image:"https://m.media-amazon.com/images/I/41qWVXiLSML._AC_UL480_FMwebp_QL65_.jpg",
      name:  "DRESSES"
    },
    {
      image:"https://m.media-amazon.com/images/I/517h8PJyE8L._AC_UL480_FMwebp_QL65_.jpg",
      name:"SUNGLASSES"
    },
    {
      image:"https://m.media-amazon.com/images/I/71uk0gZEOvL._AC_UL480_FMwebp_QL65_.jpg",
      name:"MEN'S SNEAKERS"
    },
    {
      image:"https://m.media-amazon.com/images/I/713n+TxyfCL._AC_UL480_FMwebp_QL65_.jpg",
      name:"MEN'S T-SHIRT"
    },
    {
      image:"https://m.media-amazon.com/images/I/711wwLMAY-L._AC_UL480_FMwebp_QL65_.jpg",
      name:"WOMEN'S TOP"
    },
    {
      image:"https://m.media-amazon.com/images/I/61mubKrki-L._AC_UL480_FMwebp_QL65_.jpg",
      name:"WOMENS'S DENIM"
    },
    {
      image:"https://m.media-amazon.com/images/I/71ii1ft1drL._AC_UL480_FMwebp_QL65_.jpg",
      name:"JEWELRY"
    }
];

arr.forEach((arr) => {
  let newdiv = document.createElement("div");
  let cards = document.getElementById("cardscont");
  let image = document.createElement("img");
  image.src = arr.image;
  let name = document.createElement("h5");
  name.textContent = arr.name;
  newdiv.append(image, name);
  cards.append(newdiv);
});

let slide= 1;
function slideImg(){
  let x= document.getElementsByClassName("slide");
  for(let i=0;i<x.length; i++){
    x[i].style.display="none";
  }
  x[slide-1].style.display="block";
  slide++;
  if(slide>x.length){
    slide=1;
  }
  setTimeout(slideImg,4000);
}
slideImg();

let slide2= 1;
function slideImg2(){
  let x= document.getElementsByClassName("slide2");
  for(let i=0;i<x.length; i++){
    x[i].style.display="none";
  }
  x[slide2-1].style.display="block";
  slide2++;
  if(slide2>x.length){
    slide2=1;
  }
  setTimeout(slideImg2,4000);
}
slideImg2();

