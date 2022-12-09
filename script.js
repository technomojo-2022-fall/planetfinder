let number = Math.floor(Math.random() * 20)

document.getElementById("get-planet").addEventListener("click", function() {
	fetch(`https://swapi.py4e.com/api/planets/${number}`)
		.then(response => response.json())
		.then(data => {
			document.getElementById("planet-element").textContent = data.name
			document.getElementById("title").textContent = "Thinking of a vacation? Try ..."
			document.body.classList.add("visit")
		})
})

