import React, { Component } from "react";
import { db } from "../../firebase";
import * as routes from "../constants/routes";

class LessonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      name: "",
      lastName: "",
      image: "",
      website: "",
      description: ""
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addData = e => {
    const { history } = this.props;

    e.preventDefault();
    const newLesson = db.onceGetUser.doc();

    newLesson.set({
      // Set Id to Firestore Document Name
      id: newLesson.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      name: this.state.firstName + " " + this.state.lastName,
      image: this.state.image,
      website: this.state.website,
      description: this.state.description
    });
    this.setState({
      id: "",
      firstName: "",
      lastName: "",
      name: "",
      image: "",
      website: "",
      description: ""
    });
    history.push(routes.GUITARIST_LIST);
  };

  render() {
    return (
      <div
        className="ui raised very padded text container segment animated fadeIn"
        style={{ marginTop: "30px" }}
      >
        <header className="App-header">
          <h1 className="App-title">{this.state.name}</h1>
        </header>

        <form onSubmit={this.addData} className="ui form">
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name..."
              onChange={this.updateInput}
              value={this.state.firstName}
            />
          </div>

          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name..."
              onChange={this.updateInput}
              value={this.state.lastName}
            />
          </div>

          <div className="field">
            <label>Image</label>
            <input
              type="text"
              name="image"
              placeholder="Umage URL..."
              onChange={this.updateInput}
              value={this.state.image}
            />
          </div>

          <div className="field">
            <label>Website</label>
            <input
              type="text"
              name="website"
              placeholder="URL"
              onChange={this.updateInput}
              value={this.state.website}
            />
          </div>

          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={this.updateInput}
              value={this.state.description}
            />
          </div>

          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LessonForm;
