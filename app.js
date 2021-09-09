// Definir les bases du convertisseur de Temperature

const scaleNames = {
      c: "Celsius",
      f: "Fahrenheit"
}

/**
 * 
 * 
 * Formule mathematique de conversion des temperature 
 * 
 * T(°C) = (T(°F - 32) x 5/9
 * T(°F) = T(°C) x 9/5 + 32
 *  
 * 
 */

function toCelsius (fahrenheit) {
      return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit (celsius) {
      return (celsius * 9 / 5) + 32
}


// Convertir les données en cas d'entrée invalide + arrondir le resultat
function tryConvert (temperature, convert) {
      const value = parseFloat(temperature)
      if (Number.isNaN(value)) {
            return '';
      }
      const output = Math.round(convert(value) * 100 / 100).toString()
}


// Fonction permettant de savoir si l'eau est en ebulition
function BoilingVerdict({celsius}) {
      if (celsius >= 100) {
            return <div className="alert alert-success">L'eau est en ebulition</div>
      }
      return <div className="alert alert-info">L'eau n'est pas en ebulition</div>
}


// Classe d'entree des valeur par l'utilisateur : dynamisé 
class TemperatureInput extends React.Component {
      constructor(props) {
            super(props) 
            this.handleChange = this.handleChange.bind(this)
      }

      handleChange(e) {
            this.props.onTemperatureChange(e.target.value)
      }

      render () {
            const {temperature} = this.props
            const name = 'scale' + this.props.scale
            const scaleName = scaleNames[this.props.scale]
            return <div className="form-group">
                        <label htmlFor={name}> Temperature (en {scaleName}) </label>
                        <input type="text" id={name} value={temperature} className="form-control" onChange={this.handleChange}/>
                  </div>
      }
}


// Le calculateur pour effectué la conversion 
class Calculator extends React.Component {ggggg
      constructor (props) {
            super(props)
            this.state = {
                  scale: 'c',
                  temperature: ''
            }
            this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
            this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
      }

      handleCelsiusChange (temperature) {
            this.setState({
                  scale: 'c',
                  temperature
            })
      }

      handleFahrenheitChange (temperature) {
            this.setState({
                  scale: 'f',
                  temperature
            })
      }


      render() {
            const {temperature, scale} = this.state
            const celsius = scale === 'c' ? temperature : tryConvert (temperature, toCelsius)
            const fahrenheit = scale === 'f' ? temperature : tryConvert (temperature, toFahrenheit)
            return <div>
                  <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                  <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                  <BoilingVerdict celsius={celsius}/>
            </div>
      }
}

ReactDOM.render(<Calculator/>, document.getElementById('app'))