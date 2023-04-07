import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: '',
      inputEmail: '',
      inputNickname: '',
      submittedData: null
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      inputName: this.state.inputName,
      inputEmail: this.state.inputEmail,
      inputNickname: this.state.inputNickname
    };
    const json = JSON.stringify(data);
    this.setState({ submittedData: json });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input name="inputName" type="text" value={this.state.inputName} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            E-mail:
            <input name="inputEmail" type="text" value={this.state.inputEmail} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Nickname:
            <input name="inputNickname" type="text" value={this.state.inputNickname} onChange={this.handleInputChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {this.state.submittedData && <div>{this.state.submittedData}</div>}
      </div>
    );
  }
}

export default Form;
