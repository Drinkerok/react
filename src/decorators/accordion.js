import React, {Component} from 'react';

export default (OriginalComponent) => class Accordion extends Component {
  state = {
    openChildId: null
  }

  toggleChild = (id) => e => {
    this.setState({
      openChildId: this.state.openChildId == id ? null : id
    })
  }

  render() {
    return <OriginalComponent
              {...this.props}
              openChildId={this.state.openChildId}
              toggleChild={this.toggleChild}
           />
  }
}