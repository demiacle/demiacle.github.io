import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default class AddNewProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = { new_inputs: [] };
  }
  addInput = () => {
    const new_inputs = [...this.state.new_inputs];
    new_inputs.push({ name: '', value: '' });
    this.setState({ new_inputs }, () => this.forceUpdate());
  };

  buildInputs = () => {
    let inputs = this.state.new_inputs.map((i, index) => {
      return (
        <>
          <input key={i} type="text" value={i.name} onChange={this.updateInput(index, 'name')} />
          <input key={i} type="text" value={i.value} onChange={this.updateInput(index, 'value')} />
          <br />
        </>
      );
    });
    return inputs;
  };

  updateInput = (index, prop) => e => {
    const new_inputs = [...this.state.new_inputs];
    new_inputs[index] = new_inputs[index] || { name: '', value: '' };
    new_inputs[index][prop] = e.target.value;
    this.setState({ new_inputs });
  };

  // Saves as a file the portfolioData.js file
  saveToFile = () => {};

  render() {
    return (
      <Modal isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose}>
        <button type="button" onClick={this.hideModal}>
          x
        </button>
        <br />
        <label>
          title
          <input
            type="text"
            value={this.state.new_title}
            onChange={e => this.setState({ new_title: e.target.value })}
          />
        </label>
        <br />
        <label>
          url link
          <input
            type="text"
            value={this.state.new_url_link}
            onChange={e => this.setState({ new_url_link: e.target.value })}
          />
        </label>
        <br />
        <label>
          image file
          <input
            type="text"
            value={this.state.new_image}
            onChange={e => this.setState({ new_image: e.target.value })}
          />
        </label>
        <br />
        <label>
          image poster file
          <input
            type="text"
            value={this.state.new_img_poster}
            onChange={e => this.setState({ new_img_poster: e.target.value })}
          />
        </label>
        <br />
        <button type="button" onClick={this.addInput}>
          +
        </button>
        <div>Name | Value</div>
        <form>{this.buildInputs()}</form>
      </Modal>
    );
  }
}
