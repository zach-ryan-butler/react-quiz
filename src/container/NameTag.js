import React, { Component } from 'react';
import ColorSelector from '../components/color/ColorSelector';
import Shape from '../components/shape/Shape';
import TextSelector from '../components/text/TextSelector';

export default class NameTag extends Component {
  state = {
    color: '',
    backgroundColor: '',
    text: ''
  }

  ColorHandler = (event) => {
    event.preventDefault();
    this.setState({ color: event.target[0].value, backgroundColor: event.target[1].value });
  }

  TextHandler = ({ target }) => {
    this.setState({ text: target.value });
  }

  render() {
    const { text, color, backgroundColor } = this.state;
    return (
      <section>
        <TextSelector text={text} textHandler={this.TextHandler} />
        <ColorSelector addColor={this.ColorHandler} />
        <Shape text={text} color={color} backgroundColor={backgroundColor} />
      </section>
    );
  }
}
