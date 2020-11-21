import React from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../../ApiContext';
import config from '../../config';
import '../../styles/Horse.css';

export default class Horse extends React.Component {
  static defaultProps = {
    onDeleteHorse: () => {},
  };
  static contextType = ApiContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const horseId = this.props.id;

    fetch(`${config.API_ENDPOINT}/horses/${horseId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.deleteNote(horseId);
        // allow parent to perform extra behaviour
        this.props.onDeleteNote(horseId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };
  render() {
    const { name, id, age, stall } = this.props;

    return (
      <div className="horse">
        <h2 className="horse-name">
          <Link to={`/horse/${id}`}>{name}</Link>
        </h2>
        <button
          className="delete"
          type="button"
          onClick={this.handleClickDelete}
        >
          Remove
        </button>
        <span className="horse-age">Age: {age}</span>
        <span className="horse-stall">Stall Number: {stall}</span>
      </div>
    );
  }
}
