import React, { Component } from 'react';
import PropTypes from 'prop-types'

class RenderIf extends Component {

  render() {
    if (this.props.test) {
      return (
        <render-if>
          {this.props.children}
        </render-if>
      )
    }
    return null
  }
}

RenderIf.propTypes = {
  test: PropTypes.bool.isRequired,
}

export default RenderIf;
