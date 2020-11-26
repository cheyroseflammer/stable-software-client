import React from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import { getHorsesForRider } from "../helper";
import AddButton from "../components/ui/AddButton";
import Horse from "../components/layout/Horse";
import "../styles/HorseListMain.css";
import "../styles/AddButton.css";

export default class HorseListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  render() {
    const { riderId } = this.props.match.params;
    const { horses = [] } = this.context;
    const horsesForRider = getHorsesForRider(horses, riderId);

    return (
      <section className="HorseListMain">
        <ul>
          {horsesForRider.map((horse) => (
            <li key={horse.id}>
              <Horse
                id={horse.id}
                name={horse.name}
                showname={horse.showname}
                age={horse.age}
                stall={horse.stall}
                breed={horse.breed}
              />
            </li>
          ))}
        </ul>
        <div className="button-container">
          <div className="add-horse-button">
            <AddButton
              tag={Link}
              to="/add-horse"
              type="button"
              className="button"
            >
              <br />
              Horse
            </AddButton>
          </div>
        </div>
      </section>
    );
  }
}
