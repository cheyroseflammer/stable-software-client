import React, { Component } from 'react';
import config from '../../config';
import { Button, Input } from '../../Utilities/Utilities';
import TokenService from '../../services/token-service';
import ApiContext from '../../ApiContext';
// import { render } from 'react-dom';

export default class AddRider extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static contextType = ApiContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const rider = {
      name: e.target['rider-name'].value,
    };
    fetch(`${config.API_ENDPOINT}/riders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(rider),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((rider) => {
        this.context.addRider(rider);
        this.props.history.push(`/rider/${rider.id}`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    return (
      <form className="AddRider" onSubmit={this.handleSubmit}>
        <div className="text">
          <Input
            required
            aria-label="Add a rider..."
            name="rider-name"
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
