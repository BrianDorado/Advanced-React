import React, { PureComponent } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default class Root extends PureComponent {
  render() {
    return (
      <div>
        <p>Hello!</p>
      </div>
    );
  }
}

Root.propTypes = {};
