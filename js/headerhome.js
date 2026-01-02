let HeaderContent = `

<a href='https://neorootpain.github.io/RootPain.com/'>
<img src="https://github.com/NeoRootPain/Neo-RootPain.com/blob/main/images/logos/homepagelogo.png?raw=true" class="logo" style='left:25px;bottom:0px;top:0px;'></a>

<img src="https://github.com/NeoRootPain/Neo-RootPain.com/blob/main/images/logos/bigwhiskeyhome.gif?raw=true" style="position:absolute;right:0px;">

`;
document.querySelector(".headerinnercontainer").insertAdjacentHTML("beforeend", HeaderContent);

					document.querySelectorAll('.logo').forEach(btn => {
  btn.addEventListener('mouseover', () => {
    let sound = new Audio('sounds/nmh2pianoin.ogg');
    sound.play();
  });
});

document.querySelectorAll('.logo').forEach(btn => {
  btn.addEventListener('mousedown', () => {
    let sound = new Audio('sounds/nmh2pianoout.ogg');
    sound.play();
  });
});
