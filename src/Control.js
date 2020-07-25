import PropTypes from 'prop-types';
import React from 'react';
import Hashids from 'hashids';
const hashids = new Hashids('The Saturday Quiz', 0,  '0123456789abcdefghijklmnopqrstuvwxyz_-')

const now = new Date();  
const seconds_since_epoch = Math.round(now.getTime() / 1000)
const hashid = hashids.encode(seconds_since_epoch)

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: hashid,
  }

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
    } = this.props;

    return (
      <input
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value || ''}
        style={{
          color: '#cdcdcd',
        }}
        onChange={e => onChange(e.target.value)}
        disabled
      />
    );
  }
}