import React, {useState, useEffect, useCallback} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import axios from 'axios';
import {styles} from './styles';
import { View } from 'react-native';

const MapScreen = () => {
  const [capitals, setCapitals] = useState([]);
  const [region, setRegion] = useState({
    latitude: 51.5074,
    longitude: -0.1278,
    latitudeDelta: 30,
    longitudeDelta: 30,
  });

  const [filteredRegion, setFilteredRegion] = useState('Asia');

  const clusterizeCapitals = useCallback(() => {
    let clusteredRegions = {};

    capitals.forEach(x => {
      if (!clusteredRegions[x.Continent]) {
        clusteredRegions[x.Continent] = [];
      }

      clusteredRegions[x.Continent].push({
        CountryName: x.CountryName,
        CapitalName: x.CapitalName,
        CapitalLatitude: parseFloat(x.CapitalLatitude),
        CapitalLongitude: parseFloat(x.CapitalLongitude),
      });
    });

    return clusteredRegions;
  }, [capitals]);

  useEffect(() => {
    axios
      .get('http://techslides.com/demos/country-capitals.json')
      .then(response => {
        setCapitals(response.data);
      })
      .catch(error => {
        console.error(error.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={region}>
        {filteredRegion != 'Filter' &&
          capitals[filteredRegion].map((capital, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: capital.CapitalLatitude,
                longitude: capital.CapitalLongitude,
              }}
              title={`${capital.CountryName} - ${capital.CapitalName}`}
            />
          ))}
      </MapView>

      <View style={styles.filterContainer}>
        <select
          style={styles.pickerStyle}
          onChange={value => setFilteredRegion(value.target.value)}>
          <option value="Filter" selected>
            Filter
          </option>
          {Object.keys(capitals).map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>
      </View>
    </View>
  );
};

export default MapScreen;
