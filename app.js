function WelcomeFunc ({name, children}) {

	return <div>
		<h1> Bonjour {name} </h1>
		<p>
			{children}
		</p>
	</div>
}

class Welcome extends React.Component {

	render () {
		return <div>
			<h1>Bonjour {this.props.name}</h1>
			<p>
				{this.props.children}
			</p>
			</div>
	}
}

class Clock extends React.Component {

	constructor (props) {
		super(props)
		this.state = {date: new Date()}
		this.timer = null
	}

	componentDidMount () {
		this.timer = window.setInterval (this.tick.bind(this), 1000)
	}

	componentWillUnmount () {
		window.clearInterval(this.timer)
	}

	tick () {
		this.setState({date: new Date()})
	}

	render () {
		const date = new Date()
		return <div>
			Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
		</div>
	}
}

class Incrementer extends React.Component {

	constructor (props) {
		super(props)
		this.state = {n: props.start, timer: null}
		this.timer = null
	}

	componentDidMount () {
		this.play()
	}

	componentWillUnmount () {
            window.clearInterval(this.state.timer)
	}

	increment () {
		this.setState(function (state, props) {
		return {n: state.n + 1}	
		})
	}

      pause () {
            window.clearInterval(this.state.timer)
            this.setState({
                  timer: null
            })
      }

      play () {
            window.clearInterval(this.state.timer)
            this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
      })
      }

	render () {
		return <div> valeur : {this.state.n}
            {this.state.timer ?
            <button onClick={this.pause.bind(this)}>Pause</button> :
            <button onClick={this.play.bind(this)}>Lecture</button>
            }
            </div>
	}
}


Incrementer.defaultProps = {
      start: 0,
      step: 1
}

function Home () {
	return <div>
		<Welcome name =  "Dorothée" />
		<Welcome name =  "Jean" />
		<Incrementer/>
	</div>
}




ReactDOM.render(<Home/>, document.querySelector('#app'))