import React, { Component } from "react";
import Table from "../components/Table";

class App extends Component {
  state = {
    covidData: {},
    isLoading: true,
  };

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => this.setState({ covidData: data, isLoading: false }));
  }

  render() {
    let { covidData, isLoading } = this.state;
    return (
      <div>
        <h1 className="top-heading">Covid-19 Tracker</h1>
        {!isLoading && <Table covidData={covidData} />}
      </div>
    );
  }
}

export default App;
