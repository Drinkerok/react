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
  isChildOpened = (id) => {
    return id === this.state.openChildId
  }

  render() {
    return <OriginalComponent
              {...this.props}
              toggleChild={this.toggleChild}
              isChildOpened={this.isChildOpened}
           />
  }
}