const buttons = document.querySelectorAll(".click");
const body = document.querySelector("body");

buttons.forEach(function(click){
	click.addEventListener('click',() => {
		
		if(click.id === "grey")
			body.style.backgroundColor = click.id;
		if(click.id === "white")
			body.style.backgroundColor = click.id;
		if(click.id === "blue")
			body.style.backgroundColor = click.id;
		if(click.id === "yellow")
			body.style.backgroundColor = click.id;
	})
})