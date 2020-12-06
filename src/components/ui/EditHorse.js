import React, { Component } from "react";
import ApiContext from "../../ApiContext";
import config from "../../config";
import { Button, Input } from "../../Utilities/Utilities";
import StableForm from "./StableForm";
import PropTypes from "prop-types";

export default class EditHorse extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };
  // CONTEXT //
  static contextType = ApiContext;

  // SETTING STATE //
  state = {
    error: null,
    id: "",
    name: "",
    showname: "",
    age: "",
    stall: "",
    riderId: "",
  };
  componentDidMount() {
    const { horseId } = this.props.match.params;
    fetch(config.API_ENDPOINT + `/${horseId}`, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) return res.json().then((error) => Promise.reject(error));

        return res.json();
      })
      .then((responseData) => {
        this.setState({
          id: responseData.id,
          name: responseData.name,
          showname: responseData.showname,
          age: responseData.age,
          stall: responseData.stall,
          riderId: responseData.riderId,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
    // HANDLER FUNCTIONS //
  }
  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleChangeShowname = (e) => {
    this.setState({ showname: e.target.value });
  };
  handleChangeAge = (e) => {
    this.setState({ age: e.target.value });
  };
  handleChangeStall = (e) => {
    this.setState({ stall: e.target.value });
  };
  handleChangeRiderId = (e) => {
    this.setState({ riderId: e.target.value });
  };
  // HANDLE SUBMIT FUNCTION //
  handleSubmit = (e) => {
    e.preventDeafult();
    const { horseId } = this.props.match.params;
    const { id, name, showname, age, stall, riderId } = this.state;
    const updatedHorse = { id, name, showname, age, stall, riderId };

    fetch(`${config.API_ENDPOINT}/horse/${horseId}`, {
      method: "PATCH",
      body: JSON.stringify(updatedHorse),
      headers: {
        "content-type": "applicarion/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((error) => Promise.reject(error));
      })
      .then(() => {
        this.resetFields(updatedHorse);
        this.context.updateHorse(updatedHorse);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };
  resetFields = (newFields) => {
    this.setState({
      id: newFields.id || "",
      name: newFields.name || "",
      showname: newFields.showname || "",
      age: newFields.age || "",
      stall: newFields.stall || "",
      riderId: newFields.riderId || "",
    });
  };
  render() {
    const { name, showname, age, stall, riderId } = this.state;
    const { riders = [] } = this.context;
    return (
      <section className="AddHorse">
        <h2>Edit Horse</h2>
        <StableForm onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="horse-name-input">Name</label>
            <Input
              type="text"
              id="AddHorse-name-input"
              name="horse-name"
              value={name}
              onChange={this.handleChangeName}
            />
          </div>
          <div className="field">
            <label htmlFor="horse-showname-input">Show Name</label>
            <Input
              type="text"
              id="horse-showname-input"
              name="horse-showname"
              value={showname}
              onChange={this.handleChangeShowname}
            />
          </div>
          <div className="field">
            <label htmlFor="horse-age-input">Age</label>
            <Input
              type="text"
              id="horse-age-input"
              name="horse-age"
              value={age}
              onChange={this.handleChangeAge}
            />
          </div>
          <div className="field">
            <label htmlFor="horse-stall-input">Stall</label>
            <Input
              type="text"
              id="horse-stall-input"
              name="horse-stall"
              value={stall}
              onChange={this.handleChangeStall}
            />
          </div>
          {/* <div className="field">
            <label htmlFor="horse-breed-input">Breed</label>
            <Input type="text" id="horse-breed-input" />
          </div> */}
          <div className="field">
            <label htmlFor="horse-rider-select">Rider</label>
            <select
              id="horse-rider-select"
              name="horse-rider-id"
              value={riderId}
              onChange={this.handleChangeRiderId}
            >
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
