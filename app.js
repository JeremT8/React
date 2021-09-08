let n = 0

function numberFormat(n) {
	n.toString().padStart(2, '0')
}

function render() {
	const title = <h1>
		Bonjour les gens <span>{n}</span>
		</h1>

ReactDOM.render(title, document.querySelector('#app'))
}

render() 

window.setInterval(() => {
	n++
	render()
}, 2000)