import React, {Component} from 'react';

export default (OriginalComponent) => class ToggleOpen extends Component {

  state = {
    isOpen: false
  }

  toggleOpen = (e) => {
    e && e.preventDefault && e.preventDefault();

    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return <OriginalComponent {...this.props} isOpen={this.state.isOpen} toggleOpen={this.toggleOpen} />;
  }
}