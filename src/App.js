//Basic mandatory imports
import React from 'react';

//Components
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

//Redux
import { connect } from 'react-redux';
//Redux Action
import { addFeature, removeFeature } from "./actions"


const App = props => {

  const removeFeature = item => {
    props.removeFeature(item)
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store}  addFeature={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
};

export default connect(
  mapStateToProps,
  {addFeature, removeFeature}
  )(App);
