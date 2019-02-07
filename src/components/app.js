import React, { Component } from "react";
import { fetchweather } from "../actions";
import { connect } from "react-redux";
import _ from "lodash";

const List = [
  {
    CityCode: "1248991",
    CityName: "Colombo",
    Temp: "33.0",
    Status: "Clouds"
  },
  {
    CityCode: "1850147",
    CityName: "Tokyo",
    Temp: "8.6",
    Status: "Clear"
  },
  {
    CityCode: "2644210",
    CityName: "Liverpool",
    Temp: "16.5",
    Status: "Rain"
  },
  {
    CityCode: "2988507",
    CityName: "Paris",
    Temp: "22.4",
    Status: "Clear"
  },
  {
    CityCode: "2147714",
    CityName: "Sydney",
    Temp: "27.3",
    Status: "Rain"
  },
  {
    CityCode: "4930956",
    CityName: "Boston",
    Temp: "4.2",
    Status: "Mist"
  },
  {
    CityCode: "1796236",
    CityName: "Shanghai",
    Temp: "10.1",
    Status: "Clouds"
  },
  {
    CityCode: "3143244",
    CityName: "Oslo",
    Temp: "-3.9",
    Status: "Clear"
  }
];
class App extends Component {
  componentDidMount() {
    List.map(data => {
      console.log(data.CityName, "vhv");
      this.props.fetchweather(data.CityName);
    });
  }

  renderData() {
    return _.map(this.props.data, weather => {
      return (
        <li className="list-group-item" key={weather.id}>
          {this.rendercoord(weather.weather)}
          <h1>Humidity : {weather.main.humidity}</h1>
          <h1>Pressure : {weather.main.pressure}</h1>
          <h1>Normal Temp : {weather.main.temp}</h1>
          <h1>Max Temp : {weather.main.temp_max}</h1>
        </li>
      );
    });
  }

  rendercoord(weather) {
    return _.map(weather, weather => {
      return (
        <li className="list-group-item" key={weather.id}>
          <h1>Description : {weather.description}</h1>
        </li>
      );
    });
  }

  // renderother(other) {
  //   return _.map(other, main => {
  //     return (
  //       <li className="list-group-item" key={main.id}>
  //         <h1>{main.temp}</h1>
  //         <h1>{main.pressure}</h1>
  //         <h1>{main.humidity}</h1>
  //       </li>
  //     );
  //   });
  // }

  render() {
    console.log(this.props.data, "kjkjk");
    return (
      <div>
        {this.props.data === null ? (
          <h1> Loading </h1>
        ) : (
          <div>{this.renderData()}</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.weather.data
  };
}

export default connect(
  mapStateToProps,
  { fetchweather }
)(App);
