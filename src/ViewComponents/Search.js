// Search Block on Homepage
// CALLED FROM: HomePage
// FUNCTION: Call SearchRender after submit/enter
// RETURN: Search Block

import React from "react";
import { Link } from "react-router-dom";

import "./Search.scss";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
    this.searchHandle = this.searchHandle.bind(this);
  }

  searchHandle = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  render() {
    return (
      <div className="search__container">
        <h3 className="search__header">SEARCH YOUR FAVOURITE RECIPE</h3>
        <form className="search__input--wrapper">
          <input
            className="search__input--bar"
            type="text"
            placeholder="Apple Pie"
            value={this.state.userInput}
            onChange={this.searchHandle}
          />
          <Link name="SearchCards" to={`/search/${this.state.userInput}`}>
            <button className="search__input--button">SUBMIT</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Search;
