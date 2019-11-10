import React, { Component } from "react";
import L from "leaflet";
import "leaflet-providers";
import usOutline from "../data/gz-2010-us-outline-500k";
import statesOutline from "../data/gz-2010-us-states.json";
import countiesOutline from "../data/gz-2010-us-counties.json";
import congressOutline from "../data/gz-2010-us-congress.json";

class Map extends Component {
  state = {
    map: null
  };

  usOutline = L.featureGroup(
    [
      L.geoJSON(usOutline, {
        style: {
          color: "darkseagreen"
        }
      })
    ],
    { pane: "usOutline" }
  );

  statesOutline = L.featureGroup(
    [
      L.geoJSON(statesOutline, {
        style: {
          color: "cadetblue"
        }
      })
    ],
    { pane: "statesOutline" }
  );
  countiesOutline = L.featureGroup(
    [
      L.geoJSON(countiesOutline, {
        style: {
          color: "tomato"
        }
      })
    ],
    { pane: "countiesOutline" }
  );
  congressOutline = L.featureGroup(
    [
      L.geoJSON(congressOutline, {
        style: {
          color: "limegreen"
        }
      })
    ],
    { pane: "congressOutline" }
  );

  componentDidMount() {
    this.setState({
      map: L.map("map", {
        zoom: 6,
        center: this.props.position,
        maxZoom: 15,
        layers: [L.tileLayer.provider("Stamen.Watercolor")]
      })
    });
  }

  redawLayers = () => {
    if (!this.state.map) return;

    if (this.props.usOutline) {
      this.state.map.addLayer(this.usOutline);
      this.usOutline.bringToBack();
    } else {
      this.state.map.removeLayer(this.usOutline);
    }
    
    if (this.props.statesOutline) {
      this.state.map.addLayer(this.statesOutline);
      this.statesOutline.bringToBack();
    } else {
      this.state.map.removeLayer(this.statesOutline);
    }
    
    if (this.props.countiesOutline) {
      this.state.map.addLayer(this.countiesOutline);
      this.countiesOutline.bringToBack();
    } else {
      this.state.map.removeLayer(this.countiesOutline);
    }
    
    if (this.props.congressOutline) {
      this.state.map.addLayer(this.congressOutline);
      this.congressOutline.bringToBack();
    } else {
      this.state.map.removeLayer(this.congressOutline);
    }
  };

  render() {
    if (this.state.map) {
      const [lat, lng] = this.props.position;
      this.state.map.panTo(new L.LatLng(lat, lng));
      this.redawLayers();
    }

    return (
      <div
        id="map"
        style={{
          width: "100vw",
          height: "100vh"
        }}
      ></div>
    );
  }
}

export default Map;
