import React from 'react';
import AddRider from '../components/ui/AddRider';
import config from '../config';

const BASE_URL = `${config.API_ENDPOINT}/riders/`;

export default class RidersList extends React.Component {
  state = {
    error: null,
    riders: [],
  };
  componentDidMount() {
    fetch(BASE_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('Error');
        }
      })
      .then((riders) => {
        this.setState({ riders });
      })
      .catch((error) => this.setStaet({ error }));
  }
  render() {
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }
    return (
      <div>
        <h3>Riders</h3>
        {this.state.riders.map((rider) => (
          <div>
            <h4>{rider.name}</h4>
          </div>
        ))}
        <AddRider />
      </div>
    );
  }
}
