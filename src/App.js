import React, { Component } from 'react';
import './App.css';
import SimpleMap from './Containers/SimpleMap';
import { API, API_LINK } from './Adapters/API'
import { Form } from 'semantic-ui-react'

class App extends Component {

  state = {
    drivers: [],
    cars: 1,
  }

  getDriver = () => {
    API.GetAPI(API_LINK(this.state.cars)).then( data => this.setState( {drivers: data.drivers} ) )
  }

  componentDidMount() {
    this.getDriver()
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.state.cars !== prevState.cars) {
      this.getDriver()
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { drivers, cars } = this.state
    return (
      <div>
        <div className="Slider">
          <Form.Select
            label='Choose amount of cars to display'
            name='cars to display'
            onChange={this.handleChange}
          />
          <Form.Input
            label={`Cars: ${cars} `}
            min={1}
            max={50}
            name='cars'
            onChange={this.handleChange}
            step={1}
            type='range'
            value={cars}
          />
        </div>

        <div className="App">
          <SimpleMap drivers={drivers} />
        </div>

      </div>
    );
  }
}

export default App;