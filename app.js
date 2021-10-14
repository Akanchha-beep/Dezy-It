let image=document.getElementById('imgb');
let images=['images/iphone6.png','images/iphone61.png','images/iphone62.png','images/iphone63.png']
setInterval(function(){
  let random=Math.floor(Math.random()*4);
  image.src=images[random];
},1000);
let image1=document.getElementById('imgb1');
let images1=['images/iphone66.png','images/iphone68.png','images/iphone70.png','images/iphone71.png','images/iphone69.png']
setInterval(function(){
  let random=Math.floor(Math.random()*5);
  image1.src=images1[random];
},1000);
let image2=document.getElementById('imgb2');
let images2=['images/iphone64.png','images/iphone6.png','images/iphone73.png','images/iphone61.png']
setInterval(function(){
  let random=Math.floor(Math.random()*4);
  image2.src=images2[random];
},1000);
let image3=document.getElementById('imgb3');
let images3=['images/iphone65.png','images/iphone67.png','images/iphone74.png','images/iphone72.png']
setInterval(function(){
  let random=Math.floor(Math.random()*4);
  image3.src=images3[random];
},1000);
