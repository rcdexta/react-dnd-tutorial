import React, {Component, PropTypes} from 'react';

export default class Square extends Component {

  render() {
    const {black} = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '12.5vw',
        height: '12.5vh'
      }}>
        {this.props.children}
      </div>
    );
  }

}

Square.propTypes = {
  black: PropTypes.bool
};