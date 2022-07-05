import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    const { value, handleState } = this.props;
    let erroText = undefined;
    if (value.length > 80) erroText = 'Texto muito grande';
    return (
      <fieldset>
        <textarea
          name="textarea"
          id="textarea"
          cols="30"
          rows="10"
          value={value}
          onChange={handleState}
        ></textarea>
        <span>{erroText ? erroText : ''}</span>
      </fieldset>
    );
  }
}

export default TextArea;
