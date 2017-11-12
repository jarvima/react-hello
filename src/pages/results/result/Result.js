import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Result.css';

class Result extends Component {
  render() {

    var graphStyle = () => {
      var totalPicks = 0;
      this.props.question.options.forEach((option) => {
        totalPicks += option.picks || 0;
      })
      var widthPercent = 0;
      if (totalPicks) {
        widthPercent = Math.ceil(100 * (this.props.option.picks || 0) / totalPicks);
      }
      if (widthPercent) {
        return { width: widthPercent + '%' }
      }
      return { display: 'none' }
    }

    var option = this.props.option;
    var text = option.shortText || option.text;

    return (
      <div className="option-result">
        <div className="graph-wrapper">
          <span className="option-graph" style={graphStyle()}></span>
        </div>
        <div className="option-result-text">
          <div className="option-result-box">{text}</div>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  question: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired,
}

export default Result;
