import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  };

  handleCloseModal = () => {
    this.props.closeModal();
  };

  render() {
    const { image } = this.props;

    return (
      <div className="overlay" onClick={this.handleCloseModal}>
        <div className="modal">
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
