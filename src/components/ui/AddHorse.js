import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../../ApiContext";
import { Button, Input } from "../../Utilities/Utilities";
import AddButton from "../ui/AddButton";
import config from "../../config";
// import TokenService from "../../services/token-service";
import StableForm from "./StableForm";

export default class AddHorse extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static contextType = ApiContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const newHorse = {
      name: e.target["horse-name"].value,
      showname: e.target["horse-showname"].value,
      age: e.target["horse-age"].value,
      stall: e.target["horse-stall"].value,
      riderId: e.target["horse-rider-id"].value,
    };
    fetch(`${config.API_ENDPOINT}/horses`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newHorse),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((horse) => {
        this.context.addHorse(horse);
        this.props.history.push(`/rider/${horse.riderId}`);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  render() {
    const { riders = [] } = this.context;
    return (
      <section className="AddHorse">
        <h2>Add Horse</h2>
        <StableForm onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="horse-name-input">Name</label>
            <Input type="text" id="AddHorse-name-input" name="horse-name" />
          </div>
          <div className="field">
            <label htmlFor="horse-showname-input">Show Name</label>
            <Input
              type="text"
              id="horse-showname-input"
              name="horse-showname"
            />
          </div>
          <div className="field">
            <label htmlFor="horse-age-input">Age</label>
            <Input type="text" id="horse-age-input" name="horse-age" />
          </div>
          <div className="field">
            <label htmlFor="horse-stall-input">Stall</label>
            <Input type="text" id="horse-stall-input" name="horse-stall" />
          </div>
          <div className="field">
            <label htmlFor="horse-breed-input">Breed</label>
            <Input type="text" id="horse-breed-input" />
          </div>
          <div className="field">
            <label htmlFor="horse-rider-select">Rider</label>
            <select id="horse-rider-select" name="horse-rider-id">
              <option value={null}>...</option>
              {riders.map((rider) => (
                <option key={rider.id} value={rider.id}>
                  {rider.name}
                </option>
              ))}
            </select>
          </div>
          <Button type="submit">Post Horse</Button>
        </StableForm>
      </section>
    );
  }
}
