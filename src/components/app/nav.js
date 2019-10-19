import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Button,
  Checkbox,
  Container,
  Dropdown,
  Input,
  Menu,
} from 'semantic-ui-react'

import { searchAct } from '../../actions/app';


const deliveryTimeData= [{
  value: '1',
  label: '1 week'
}, {
  value: '2',
  label: '2 weeks'
}, {
  value: '4',
  label: '1 month'
}, {
  value: '0',
  label: 'more'
}]

const handleFurnitureStyleOnClick= (e, me)=> {
  console.log('click')
  console.log(e.getRelatedTarget);
}

const handleOnSearch= (e, me)=> {
  let _promise = new Promise(function(resolve, reject) {
    me.setState({
      keyword: e.target.value
    })
    setTimeout(() => resolve(me.props.search(me.state.keyword, me.state.furnitureStylesFilter, me.state.deliveryTimeFilter)));
  });
}

const renderFurnitureStylesFilter= (furnitureStyles, me)=> {
  var _options = [];
  if (furnitureStyles != null) {
    furnitureStyles.forEach((furnitureStyle, index)=> {
      _options.push(
        { key:index, text: furnitureStyle , value: furnitureStyle },
      )
    });
  }
  return (
    <Dropdown
      className='link item'
      closeOnChange={false}
      onChange={me.handleOnFurnitureStylesFilterChanged}
      multiple
      text='Furniture Style'
      options={_options}
    />
  );
}

const renderDeliveryTimeFilter= (me)=> {
  var _options = [];
  deliveryTimeData.forEach((deliveryTime, index)=> {
    _options.push(
      { key:index, text:deliveryTime.label , value:deliveryTime.value },
    );
  })
  return (
    <Dropdown
      className='link item'
      closeOnChange={false}
      onChange={me.handleOnDeliveryTimeFilterChanged}
      multiple
      text='Delivery Time'
      options={_options}
    />
  )
};

const renderSearchForm = (me) => {
  return (
    <Input placeholder="Search ..." onChange={ (e)=> handleOnSearch(e, me) } />
  );
}

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      furnitureStylesFilter: [],
      deliveryTimeFilter: [],
    };
  }

  handleOnFurnitureStylesFilterChanged= (e, { value }) => {
    const _this = this;
    let _promise = new Promise(function(resolve, reject) {
      _this.setState({
        furnitureStylesFilter: value
      });
      setTimeout(() => resolve(_this.props.search(_this.state.keyword, _this.state.furnitureStylesFilter, _this.state.deliveryTimeFilter)));
    });
  }

  handleOnDeliveryTimeFilterChanged= (e, { value }) => {
    const _this = this;
    let _promise = new Promise(function(resolve, reject) {
      _this.setState({
        deliveryTimeFilter: value
      });
      setTimeout(() => resolve(_this.props.search(_this.state.keyword, _this.state.furnitureStylesFilter, _this.state.deliveryTimeFilter)));
    });
  }

  render() {
    return (
      <Menu
        fixed={this.props.fixed ? 'top' : null}
        inverted={!this.props.fixed}
        pointing={!this.props.fixed}
        secondary={!this.props.fixed}
        size='large'
      >
        <Container>
          <Menu.Item><h1>Furniture Example</h1></Menu.Item>
          { renderFurnitureStylesFilter(this.props.furnitureStyles, this) }
          { renderDeliveryTimeFilter(this) }
          <Menu.Item position='right'>
            { renderSearchForm(this) }
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
};

const mapStateToProps = (state)=> {
  return {
    onLoading: state.apiProcess.onLoading,
    furnitureStyles: state.furnitureStyles,
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    search: (keyword, furnitureStylesFilter, deliveryTimeFilter)=> dispatch(searchAct(keyword, furnitureStylesFilter, deliveryTimeFilter))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
