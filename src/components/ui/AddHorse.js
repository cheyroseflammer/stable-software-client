import React, { Component } from 'react';

export default class AddHorse extends Component {
  static defaultProps = {
    riders: [],
  };
  render() {
    const { riders } = this.props;
    return (
      <section className="AddHorse">
        <h2>Add Horse</h2>
        <form>
          <div className="field">
            <label htmlFor="horse-name-input">Name</label>
            <input type="text" id="AddHorse-name-input" />
          </div>
          <div className="field">
            <label htmlFor="horse-showname-input">Show Name</label>
            <input type="text" id="horse-showname-input" />
          </div>
          <div className="field">
            <label htmlFor="horse-age-input">Age</label>
            <input type="text" id="horse-age-input" />
          </div>
          <div className="field">
            <label htmlFor="horse-stall-input">Stall</label>
            <input type="text" id="horse-stall-input" />
          </div>
          <div className="field">
            <label htmlFor="horse-breed-input">Breed</label>
            <input type="text" id="horse-breed-input" />
          </div>
          <div className="field">
            <label htmlFor="horse-rider-select">Rider</label>
            <select id="horse-rider-select">
              <option value={null}>...</option>
              {riders.map((rider) => (
                <option key={rider.id} value={rider.id}>
                  {rider.name}
                </option>
              ))}
            </select>
          </div>
          <div className="buttons">
            <button type="submit">Add Horse</button>
          </div>
        </form>
      </section>
    );
  }
}
