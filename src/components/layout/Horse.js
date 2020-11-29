import React from "react";
import { Link } from "react-router-dom";
import ApiContext from "../../ApiContext";
import config from "../../config";
import "../../styles/Horse.css";
import { InlineIcon } from "@iconify/react";
import trashCan from "@iconify-icons/mdi/trash-can";

export default class Horse extends React.Component {
  static defaultProps = {
    onDeleteHorse: () => {},
  };
  static contextType = ApiContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const horseId = this.props.id;

    fetch(`${config.API_ENDPOINT}/horses/${horseId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.deleteHorse(horseId);
        // allow parent to perform extra behaviour
        this.props.onDeleteHorse(horseId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };
  render() {
    const { name, id, age, stall } = this.props;
    // console.log({ name }, 'this is an name? maybe');
    // console.log({ id }, 'this is an id? maybe');
    // console.log({ age }, 'this is an age? maybe');
    // console.log({ stall }, 'this is an stall? maybe');
    // console.log(this.context.horses, 'this is an props? maybe');
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
          Trash <InlineIcon icon={trashCan} />
        </button>
        <p className="horse-age">
          <span className="horse-age">Age: </span> {age}
        </p>
        <span className="horse-stall">Stall Number: {stall}</span>
      </div>
    );
  }
}
