import React, { Component, useEffect } from "react";
import { Marker, Polyline } from "react-native-maps";
import { MapView } from "expo";
import { Button, StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingLocation: {
        latitude: "37.025",
        longitude: "-122.023",
      },
      finishLocation: {
        latitude: "37.78825",
        longitude: "-122.4324",
      },
      region: {
        latitude: parseFloat("37.025"),
        longitude: parseFloat("-122.023"),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      isLoading: true,
    };
  }

  _getRoute = () => {
    let from_lat = parseFloat(this.state.startingLocation.latitude);
    let from_long = parseFloat(this.state.startingLocation.longitude);
    let to_lat = parseFloat(this.state.finishLocation.latitude);
    let to_long = parseFloat(this.state.finishLocation.longitude);
    let route_coordinates = [];
    axios
      .get(
        `https://route.api.here.com/routing/7.2/calculateroute.json?app_id=N37D10nRHM5YX0SEkqMa&app_code=zjNv7eoGS1i-ABa-tIok6Q&waypoint0=geo!${from_lat},${from_long}&waypoint1=geo!${to_lat},${to_long}&mode=fastest;car;traffic:disabled&legAttributes=shape`
      )
      .then((res) => {
        // here we are getting all route coordinates from API responsed
        res.data.response.route[0].leg[0].shape.map((m) => {
          // here we are getting latitude and longitude in seperate variables because HERE sends it together, but we
          // need it seperate for <Polyline/>
          let latlong = m.split(",");
          let latitude = parseFloat(latlong[0]);
          console.log(latitude);

          let longitude = parseFloat(latlong[1]);
          console.log(longitude);

          routeCoordinates.push({ latitude: latitude, longitude: longitude });
        });
        this.setState({
          routeForMap: routeCoordinates,
          // here we can access route summary which will show us how long does it take to pass the route, distance etc.
          summary: res.data.response.route[0].summary,
          // NOTE just add this 'isLoading' field now, I'll explain it later
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    // when this function is finished, we will set isLoading state to false to let program know that API request has finished and now we can render the map
    this._getRoute();
  }

  render() {
    if (this.state.isLoading) {
      return <Text style={styles.margin}>Loading...</Text>;
    } else {
      return (
        <MapView>
          <Polyline
            coordinates={this.state.routeForMap}
            strokeWidth={7}
            strokeColor="red"
            geodesic={true}
          />
          <Marker
            coordinate={{
              latitude: this.state.startingLocation.latitude,
              longitude: this.state.startingLocation.longitude,
            }}
            title="Starting location"
          />
          <Marker
            coordinate={{
              latitude: this.state.finishLocation.latitude,
              longitude: this.state.finishLocation.longitude,
            }}
            title="Finishlocation"
          />
        </MapView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  margin: {
    marginTop: 50,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
