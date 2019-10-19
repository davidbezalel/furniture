import { onLoading } from '../reducers/statesChanging';
import {
  fetchFurnitures as fetchFurnituresApi,
} from '../services/furniture';

export function fetchFurnituresAct () {
  return (dispatch)=> {
    dispatch(onLoading(true));
    fetchFurnituresApi((err, res)=> {
      if (res.furniture_styles != null && res.products != null) {
        localStorage.setItem('furnitures', JSON.stringify(res.products));
        localStorage.setItem('furnituresDisplay', JSON.stringify(res.products));
        localStorage.setItem('furnitureStyles', JSON.stringify(res.furniture_styles));
        setTimeout(()=> {
          dispatch(onLoading(false));
        }, 200);
      }
    })
  }
}

export function searchAct(keyword, furnitureStylesFilter, deliveryTimeFilter) {
  return (dispatch)=> {
    dispatch(onLoading(true));
    var _furnitures = JSON.parse(localStorage.getItem('furnitures'));
    var _furnituresDisplay = [];
    console.log('act keyword: ', keyword);
    console.log('act furnitureStylesFilter: ', furnitureStylesFilter);
    console.log('act deliveryTimeFilter: ', deliveryTimeFilter);
    console.log('act _furnitures: ', _furnitures);

    _furnitures.map((furniture)=> {
      if (furniture.name.includes(keyword))  {
        _furnituresDisplay.push(furniture)
      }
    });

    if (furnitureStylesFilter.length > 0) {
      _furnitures= _furnituresDisplay;
      _furnituresDisplay = [];
      _furnitures.map((furniture)=> {
        if (furnitureStylesFilter.some((val) => furniture.furniture_style.indexOf(val) !== -1))  {
          _furnituresDisplay.push(furniture)
        }
      })
    }

    if (deliveryTimeFilter.length > 0) {
      _furnitures= _furnituresDisplay;
      _furnituresDisplay= [];
      _furnitures.map((furniture)=> {
        if (furniture.delivery_time > 4 && deliveryTimeFilter.includes('0')) {
          _furnituresDisplay.push(furniture);
        } else if (deliveryTimeFilter.includes(furniture.delivery_time)) {
          _furnituresDisplay.push(furniture);
        }
      });
    }

    localStorage.setItem('furnituresDisplay', JSON.stringify(_furnituresDisplay));

    setTimeout(()=> {
      dispatch(onLoading(false));
    }, 200);
  }
}
