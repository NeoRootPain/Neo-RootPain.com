let HeaderContent = `

<a href='https://neorootpain.github.io/Old-JuneSSai.net-Archive/'>
<img src='../../blog/images/postimages/firstsitelogo.png' class='logo' style='right:0;left:0;bottom:0;top:0;'></a>

`;
document.querySelector(".headerinnercontainer").insertAdjacentHTML("beforeend", HeaderContent);

					document.querySelectorAll('.logo').forEach(btn => {
  btn.addEventListener('mouseover', () => {
    let sound = new Audio('../../sounds/nmh2pianoin.ogg');
    sound.play();
  });
});

document.querySelectorAll('.logo').forEach(btn => {
  btn.addEventListener('mousedown', () => {
    let sound = new Audio('../../sounds/nmh2pianoout.ogg');
    sound.play();
  });
});
