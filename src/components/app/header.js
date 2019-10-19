import React, { Component } from 'react';
import {
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'

import Nav from './nav';
import BreadcumbComponent from './breadcumb';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class HeaderComponent extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 500, padding: '1em 0em' }}
            vertical
          >
            <Nav fixed={ fixed } />
            <BreadcumbComponent />
          </Segment>
        </Visibility>

      </Responsive>
    )
  }
};

export default HeaderComponent;
