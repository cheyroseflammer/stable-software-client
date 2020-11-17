import React, { Component } from 'react';
import config from '../../config';
import { Button, Input } from '../../Utilities/Utilities';
// import { render } from 'react-dom';

export default class AddRider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const rider = {
      id: this.state.id,
      name: this.state.name,
    };

    fetch(`${config.API_ENDPOINT}/riders`, {
      method: 'POST',
      body: JSON.stringify(rider),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((rider) => {
        this.props.onAddRider(rider);
        window.location = '/riders';
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  render() {
    return (
      <form className="AddRider" onSubmit={this.handleSubmit}>
        <div className="text">
          <Input
            required
            aria-label="Add a rider..."
            name="addRider"
            id="rider"
            cols="30"
            rows="1"
            placeholder="Add a rider"
          ></Input>
        </div>
        <Button type="submit">Post Rider</Button>
      </form>
    );
  }
}
