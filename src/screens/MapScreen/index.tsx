import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MapView, {Marker, Cluster} from 'react-native-maps';
import axios from 'axios';
import {styles} from './styles';

const MapScreen = () => {
  const [capitals, setCapitals] = useState([]);
  const [region, setRegion] = useState({
    latitude: 23.6345,
    longitude: -102.5528,
    latitudeDelta: 100,
    longitudeDelta: 100,
  });

  useEffect(() => {
    fetchCapitals();
  }, []);
  // {
  // "CountryName": "Russia",
  // "CapitalName": "Moscow",
  // "CapitalLatitude": "55.75",
  // "CapitalLongitude": "37.600000",
  // "CountryCode": "RU",
  // "ContinentName": "Europe"
  //   },
  const fetchCapitals = async () => {
    try {
      const {data} = await axios.get(
        'http://techslides.com/demos/country-capitals.json',
      );

      // const result = data.split('\n').map((line: string) => line.split('|'));
      // console.log('response data --->>>>', result);

      const capitalsData = data.map(
        ({CountryName, CapitalLatitude, CapitalLongitude, ContinentName}) => ({
          name: CountryName,
          region: ContinentName,
          coordinates: {
            latitude: +CapitalLatitude,
            longitude: +CapitalLongitude,
          },
        }),
      );
      setCapitals(capitalsData);
    } catch (error) {
      console.log('error!!!!!!!!---->>>', error);
    }
  };

  const onMarkerPress = (marker: never) => {
    setRegion({
      ...region,
      latitude: marker?.coordinates.latitude,
      longitude: marker?.coordinates.longitude,
    });
  };

  const applyFilter = (selectedRegion: string) => {
    console.log('selectedRegion--->>', selectedRegion);
    if (selectedRegion === 'Asia') {
      let asiaCapitals = capitals.filter(capital => capital?.region === 'Asia');
      setCapitals(asiaCapitals);
      setRegion({
        ...region,
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 20,
        longitudeDelta: 20,
      });
    } else if (selectedRegion === 'Europe') {
      let europeCapitals = capitals.filter(
        capital => capital?.region === 'Europe',
      );
      setCapitals(europeCapitals);
      setRegion({
        ...region,
        latitude: 51.5074,
        longitude: -0.1278,
        latitudeDelta: 20,
        longitudeDelta: 20,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a Region</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => applyFilter('Asia')}>
          <Text style={[styles.label, {backgroundColor: '#E74C3C'}]}>Asia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => applyFilter('Europe')}>
          <Text style={[styles.label, {backgroundColor: '#2E86C1'}]}>
            Europe
          </Text>
        </TouchableOpacity>
      </View>
      <MapView style={styles.map} region={region}>
        {/* <Cluster radius={50}>
          {capitals.map(capital => (
            <Marker
              key={capital?.name}
              coordinate={capital?.coordinates}
              onPress={() => onMarkerPress(capital)}
            />
          ))}
        </Cluster> */}
      </MapView>
    </View>
  );
};

export default MapScreen;
