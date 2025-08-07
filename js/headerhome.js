let HeaderContent = `

<div class='headerinnercontainer' style='margin-top:75px;outline:solid black 1px;width:1230px'>
<video autoplay muted loop id="headervideo">
	<source src="./images/backgrounds/homeheaderbackground.mp4" type="video/mp4">
</video>

<img src="./images/logos/homepagelogo.png" class="logo">
<img src="./images/logos/bigwhiskeyhome.gif" style="position: absolute; right: 32px; bottom: 0;">
</div>

`;
document.querySelector("#headercontainer").insertAdjacentHTML("beforeend", HeaderContent);
