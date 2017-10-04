import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends Component{

  handleClick = () => {
    this.props.onClick(this.props.contest.id);
  };

  render(){
    return(
      <div className='contest-preview link' onClick={this.handleClick}>
        <div className='category-name'>
          {this.props.contest.categoryName}
        </div>
        <div className='contest-name'>
          {this.props.contest.contestName}
        </div>
      </div>
    );
  }

}

ContestPreview.propTypes = {
  contest: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ContestPreview;
