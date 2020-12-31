import React from "react";
import { Link } from "react-router-dom";
import ApiContext from "../../ApiContext";
import config from "../../config";
import "../../styles/Horse.css";
// import { InlineIcon } from "@iconify/react";
// import trashCan from "@iconify-icons/mdi/trash-can";

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
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
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
    const { name, id, age, stall, showname } = this.props;
    return (
      <div className="horse">
        <div className="horse-info-group">
          <h2 className="horse-name">
            <Link to={`/horse/${id}`}>Name: {name}</Link>
          </h2>
          <p className="horse-age">Age: {age}</p>
          <p className="horse-stall">Stall Number: {stall}</p>
          <p className="horse-stall">Showname: {showname}</p>
          {/* <p className="horse-stall">Breed: {breed}</p> */}
        </div>
        <button
          className="delete"
          type="button"
          onClick={this.handleClickDelete}
        >
          Trash {/*<InlineIcon icon={trashCan} /> */}
        </button>
        {/* <p className="horse-age">
          <span className="horse-age">Age: </span> {age}
        </p>
        <span className="horse-stall">Stall Number: {stall}</span> */}
      </div>
    );
  }
}
