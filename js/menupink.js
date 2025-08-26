let MenuContent = `

<div class='navigationcontainer' style='margin-top:10px;'>

<img src='./images/menus/navigationbarpink.png' width='226px' height='33px'>

<a href='./index.html'>
<div class='buttoncontainer'>
<img src='./images/menus/homebuttonfaded.png' class='buttonfade'>
<img src='./images/menus/homebutton.png' class='button'>
<img src='./images/menus/homebuttonslide.png' class='buttonslide'>
</div>
</a>

<a href='./blogmain.html'>
<div class='buttoncontainer'>
<img src='./images/menus/blogbuttonfaded.png' class='buttonfade'>
<img src='./images/menus/blogbutton.png' class='button'>
<img src='./images/menus/blogbuttonslide.png' class='buttonslide'>
</div>
</a>

<a href='./fanartmain.html'>
<div class='buttoncontainer'>
<img src='./images/menus/fanartbuttonfaded.png' class='buttonfade'>
<img src='./images/menus/fanartbutton.png' class='button'>
<img src='./images/menus/fanartbuttonslide.png' class='buttonslide'>
</div>
</a>

<a href='./guestbook.html'>
<div class='buttoncontainer'>
<img src='./images/menus/guestbookbuttonfaded.png' class='buttonfade'>
<img src='./images/menus/guestbookbutton.png' class='button'>
<img src='./images/menus/guestbookbuttonslide.png' class='buttonslide'>
</div>
</a>

<img src='./images/menus/menuhandlebarpink.png' width='226px' height='13px'>
</div>

<div class='navigationcontainer'>

<img src='./images/menus/partnersbarpink.png' width='226px' height='33px'>

<a href='https://kaiakairos.net/'>
<div class='buttoncontainer'>
<img src='./images/menus/kaiakairosbuttonfaded.png' class='buttonfade'>
<img src='./images/menus/kaiakairosbutton.png' class='button'>
<img src='./images/menus/kaiakairosbuttonslide.png' class='buttonslide'>
</div>
</a>

<a href='https://staggernight.com/'>
<div class='buttoncontainer'>
<img src='./images/menus/staggernightbuttonfaded.png' class='buttonfade'>
<img src='./images/menus/staggernightbutton.png' class='button'>
<img src='./images/menus/staggernightbuttonslide.png' class='buttonslide'>
</div>
</a>

<a href='https://icantseehelp.neocities.org/'>
<div class='buttoncontainer'>
<img src='./images/menus/icantseehelpbuttonfaded.png' class='buttonfade'>
<img src='./images/menus/icantseehelpbutton.png' class='button'>
<img src='./images/menus/icantseehelpbuttonslide.png' class='buttonslide'>
</div>
</a>

<a href='https://sgxp.me/'>
<div class='buttoncontainer'>
<img src='./images/menus/sgxpbuttonfaded.png' class='buttonfade'>
<img src='./images/menus/sgxpbutton.png' class='button'>
<img src='./images/menus/sgxpbuttonslide.png' class='buttonslide'>
</div>
</a>

<img src='./images/menus/menuhandlebarpink.png' width='226px' height='13px'>
</div>

`;
document.querySelector('#menucontainer').insertAdjacentHTML('beforeend', MenuContent);

document.querySelectorAll('.buttoncontainer').forEach(btn => {
  btn.addEventListener('mouseover', () => {
    let sound = new Audio('./sounds/buttonhover.ogg');
    sound.play();
  });
});

document.querySelectorAll('.buttoncontainer').forEach(btn => {
  btn.addEventListener('mousedown', () => {
    let sound = new Audio('./sounds/buttonselect.ogg');
    sound.play();
  });
});
