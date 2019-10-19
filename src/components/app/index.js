import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import HeaderComponent from './header';
import PlaceHolderFunitures from './placeholderFunitures';
import Furnitures from './furnitures';

import { fetchFurnituresAct } from '../../actions/app';

const renderFurnitures = (me) => {
  if (me.props.furnituresDisplay != null && !me.props.onLoading.status) {
    return (
      <Furnitures />
    );
  }
  return (
    <PlaceHolderFunitures />
  );
}

class App extends Component {

  componentDidMount() {
      this.props.fetchFurnitures();
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <Segment style={{ padding: '4em 0em' }} vertical>
          { renderFurnitures(this) }
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    onLoading: state.apiProcess.onLoading,
    furnituresDisplay: state.furnituresDisplay,
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    fetchFurnitures: ()=> dispatch(fetchFurnituresAct()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
