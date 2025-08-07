let MenuContent = `

<div class='navigationcontainer'>

<img src='./images/menus/homenavigationbar.png' width='226px' height='33px''>

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

<img src='./images/menus/homemenuhandlebar.png' width='226px' height='13px''>
</div>
`;
document.querySelector('#menucontainer').insertAdjacentHTML('beforeend', MenuContent);
