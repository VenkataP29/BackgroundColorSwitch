const buttons = document.querySelectorAll(".click");
const body = document.querySelector("body");

buttons.forEach(function(click){
	click.addEventListener('click',function(e){
		console.log(e.target);
		if(e.target.id === "grey")
			body.style.backgroundColor = e.target.id;
		if(e.target.id === "white")
			body.style.backgroundColor = e.target.id;
		if(e.target.id === "blue")
			body.style.backgroundColor = e.target.id;
		if(e.target.id === "yellow")
			body.style.backgroundColor = e.target.id;
	})
})