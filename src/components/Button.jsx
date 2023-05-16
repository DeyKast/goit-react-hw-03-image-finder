import React from 'react';

class LoadMoreButton extends React.Component {
  render() {
    return (
      <button
        className="button"
        type="button"
        onClick={this.props.handleButton}
      >
        Load more
      </button>
    );
  }
}

export default LoadMoreButton;
