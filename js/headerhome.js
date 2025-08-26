let HeaderContent = `

<a href='https://neorootpain.github.io/RootPain.com/'>
<img src="./images/logos/homepagelogo.png" class="logo" style='left:20px;bottom:15px;'></a>
<img src="./images/logos/bigwhiskeyhome.gif" style="position:absolute;right:0px;">

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
