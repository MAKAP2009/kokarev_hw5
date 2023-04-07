import React from 'react';

class ConvertNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0
    };
    this.handleNumber1Change = this.handleNumber1Change.bind(this);
    this.handleNumber2Change = this.handleNumber2Change.bind(this);
  }

  handleNumber1Change(e) {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      this.setState({ number1: value });
    }
  }

  handleNumber2Change(e) {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      this.setState({ number2: value });
    }
  }

  render() {
    const result1 = this.state.number1 * 0.5;
    const result2 = this.state.number2 * 0.05;

    return (
      <div>
        <div>
          <label htmlFor="number1">Number 1:</label>
          <input type="number" id="number1" value={this.state.number1} onChange={this.handleNumber1Change} />
        </div>
        <div>
          <label htmlFor="number2">Number 2:</label>
          <input type="number" id="number2" value={this.state.number2} onChange={this.handleNumber2Change} />
        </div>
        <div>
          <p>Result 1: {result1}</p>
          <p>Result 2: {result2}</p>
        </div>
      </div>
    );
  }
}

export default ConvertNumbers;
