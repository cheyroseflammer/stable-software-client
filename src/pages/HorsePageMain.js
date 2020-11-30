import React from 'react';
import ApiContext from '../ApiContext';
import Horse from '../components/layout/Horse';
import { findHorse } from '../helper';
import '../styles/HorsePageMain.css';

export default class HorsePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  handleDeleteHorse = (horseId) => {
    this.props.history.push(`/`);
  };
  render() {
    // const { age, stall } = this.props;
    const { horses = [] } = this.context;
    const { horseId } = this.props.match.params;
    const horse = findHorse(horses, horseId) || { age: '', stall: '' };
    console.log(horse, 'from horse page main');
<<<<<<< HEAD
    //console.log(this.context, 'from horse page main');
=======
    console.log(this.context, 'from horse page main');
>>>>>>> parent of 6dbc49e... button changes
    return (
      <section className="HorsePageMain">
        <Horse
          id={horse.id}
          name={horse.name}
          age={horse.age}
          stall={horse.stall}
          showname={horse.showname}
          onDeleteHorse={this.handleDeleteHorse}
        />
<<<<<<< HEAD
        {/* <div className="age-content">Age: {horse.age}</div>
        <div className="stall-content">Stall: {horse.stall}</div> */}
=======
        <div className="horse-content">
          Age: {horse.age} Stall: {horse.stall}
        </div>
>>>>>>> 846e3d503fbed297d58baaea29844ca8553199d9
      </section>
    );
  }
}
