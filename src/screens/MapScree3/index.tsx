// import {FC, useEffect, useState} from 'react';
// import React from 'react';
// import {styles} from './styles';
// import {Alert, Text, View} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
// import {RootState} from '@redux/stores/store';
// import {useSelector} from 'react-redux';

// export interface ILocation {
//   longitude: number;
//   latitude: number;
// }

// const HelloWorldScreen: FC = () => {
//   const text = useSelector((state: RootState) => state.text);
//   const [position, setPosition] = useState<ILocation>();
//   // const [cafes, setCafes] = useState();

//   const getCurrentPosition = () => {
//     Geolocation.getCurrentPosition(
//       pos => {
//         const {longitude, latitude} = pos.coords;

//         setPosition({longitude, latitude});
//       },
//       error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
//       {enableHighAccuracy: true},
//     );
//   };

//   useEffect(() => {
//     getCurrentPosition();

//     // const apiKey = 'AIzaSyCNf0QyIqA1zlfZfiqEWmfhpyjQJ52YC9k';
//     const radius = 1000; // meters
//     fetch(
//       `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.latitude},${position.longitude}&radius=${radius}&type=cafe`,
//     )
//       .then(response => {
//         if (response.ok) {
//           console.log('response--->>>>', response);
//           // setCafes(response.results);
//           return response.json();
//         }
//         throw new Error('Network response was not ok.');
//       })
//       .then(data => {
//         console.log('!!!!!!!!!!!!!!!!!!!!!!!!!', data); // array of nearby cafes
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   }, []);

//   console.log('position--->>>', position);

//   return (
//     <View style={styles.sectionContainer}>
//       <Text testID="textID" style={[styles.text]}>
//         {text}
//       </Text>
//     </View>
//   );
// };

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

  const fetchCapitals = async () => {
    try {
      const response = await axios.get(
        'http://techslides.com/demos/country-capitals.json',
      );
      console.log(
        '------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!',
      );
      console.log('response--->>>>', response.data);

      const data = response.data
        .split('\n')
        .map((line: string) => line.split('|'));
      const capitalsData = data.map((item: string[]) => ({
        name: item[1].trim(),
        region: getRegionFromCapital(item[1].trim()),
        coordinates: {
          latitude: parseFloat(item[2]),
          longitude: parseFloat(item[3]),
        },
      }));
      setCapitals(capitalsData);
    } catch (error) {
      console.log('error---->>>', error);
    }
  };

  const getRegionFromCapital = (capital: string) => {
    if (capital === 'Tokyo') {
      return 'Asia';
    } else if (
      capital === 'Moscow' ||
      capital === 'London' ||
      capital === 'Paris' ||
      capital === 'Madrid'
    ) {
      return 'Europe';
    } else {
      return null;
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
        <TouchableOpacity onPress={() => applyFilter('Asia')}>
          <Text style={[styles.label, {backgroundColor: '#E74C3C'}]}>Asia</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => applyFilter('Europe')}>
          <Text style={[styles.label, {backgroundColor: '#2E86C1'}]}>
            Europe
          </Text>
        </TouchableOpacity>
      </View>
      <MapView style={styles.map} region={region}>
        <Cluster radius={50}>
          {capitals.map(capital => (
            <Marker
              key={capital?.name}
              coordinate={capital?.coordinates}
              onPress={() => onMarkerPress(capital)}
            />
          ))}
        </Cluster>
      </MapView>
    </View>
  );
};

export default MapScreen;

// export default HelloWorldScreen;
