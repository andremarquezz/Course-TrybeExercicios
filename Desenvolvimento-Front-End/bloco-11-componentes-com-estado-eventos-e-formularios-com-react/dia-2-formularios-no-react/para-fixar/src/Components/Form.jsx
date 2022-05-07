import React, { Component } from 'react';
import './Form.css';
import TextArea from './TextArea';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      tech: '',
      presenca: false,
      textarea: '',
    };
    this.handleState = this.handleState.bind(this);
  }
  handleState = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <section>
        <form className="form">
          <label>
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleState}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="presenca"
              id="checkbox"
              value={this.state.email}
              onChange={this.handleState}
            />{' '}
            Irá Comparecer?
          </label>
          <TextArea value={this.state.textarea} handleState={this.handleState} />
        </form>
      </section>
    );
  }
}

export default Form;
