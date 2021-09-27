import React, { Component } from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router";

export default class ContactPage extends Component {
  state = {
    value: "",
    isEmpty: true,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      value: "",
      isEmpty: true,
    });
  };

  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: false,
      });
    } else {
      this.setState({
        value: e.target.value,
        isEmpty: true,
      });
    }
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Naisz do nas!</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz wiadomość..."
          ></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt
          when={!this.state.isEmpty}
          message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę?"
        />
      </div>
    );
  }
}
