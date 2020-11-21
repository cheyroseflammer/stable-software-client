import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import { countHorsesForRider } from '../helper';
import AddButton from '../components/ui/AddButton';
import '../styles/HorseListNav.css';
export default class HorseListNav extends React.Component {
  static contextType = ApiContext;

  render() {
    const { riders = [], horses = [] } = this.context;
    return (
      <div className="HorseListNav">
        <ul>
          {riders.map((rider) => (
            <li key={rider.id}>
              <NavLink className="rider-link" to={`/rider/${rider.id}`}>
                <span className="num-horses">
                  {countHorsesForRider(horses, rider.id)}
                </span>
                {rider.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="button-wrapper">
          <AddButton
            tag={Link}
            to="/add-rider"
            type="button"
            className="add-rider-button"
          >
            Add Rider
          </AddButton>
        </div>
      </div>
    );
  }
}
