import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Card,
  Grid,
  Label
} from 'semantic-ui-react';

const renderCard = (furnitures)=> {
  var _furnituresCard= [];
  var _descLimit= '';
  var _furnitureStyles = [];
  furnitures.forEach((furniture, furnitureIndex)=> {
    _descLimit= furniture.description.length > 114 ? '.......' : '';
    _furnitureStyles = [];
    furniture.furniture_style.forEach((style, styleIndex)=> {
      _furnitureStyles.push(
        <Label key={ styleIndex } tag color='teal'>{ style }</Label>
      )
    })
    _furnituresCard.push(
      <Grid.Column key={ furnitureIndex }>
        <Card key={ furnitureIndex } container="true" fluid key={ furnitureIndex }>
          <Card.Content>
            <Label attached='top right'>Rp. { furniture.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }</Label>
            <Card.Header>{ furniture.name }</Card.Header>
            <Card.Description>{ furniture.description.substr(0,114) }{ _descLimit }</Card.Description>
          </Card.Content>
          <Card.Content>
            <div>{ _furnitureStyles }</div>
          </Card.Content>
          <Label attached="bottom right">{ furniture.delivery_time } weeks</Label>
        </Card>
      </Grid.Column>
    )
  });
  return _furnituresCard;
}

class Furnitures extends Component {
  render() {
    return (
      <Grid container columns={3} verticalAlign="middle">
        { renderCard(this.props.furnituresDisplay) }
      </Grid>
    )
  }
};

const mapStateToProps = (state)=> {
  return {
    furnituresDisplay: state.furnituresDisplay,
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Furnitures));
