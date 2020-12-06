import React from "react";
import ApiContext from "../ApiContext";
import AddButton from "../components/ui/AddButton";
import { findHorse, findRider } from "../helper";
import "../styles/HorsePageNav.css";
import "../styles/AddButton.css";

export default class HorsePageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => {},
    },
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  render() {
    const { horses, riders } = this.context;
    const { horseId } = this.props.match.params;
    const horse = findHorse(horses, horseId) || {};
    // console.log(horse, 'what the heck??');
    const rider = findRider(riders, horse.riderId);
    // console.log(rider, 'what the heck rider??');
    return (
      <div className="HorsePageNav">
        <AddButton
          tags="button"
          role="link"
          onClick={() => this.props.history.goBack()}
          className="back-button"
        >
          <br />
          Back
        </AddButton>
        {rider && <h3 className="rider-name">{rider.name}</h3>}
      </div>
    );
  }
}
