import {FC, useEffect, useState} from 'react';
import React from 'react';
import {styles} from './styles';
import {Alert, Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {RootState} from '@redux/stores/store';
import {useSelector} from 'react-redux';

export interface ILocation {
  longitude: number;
  latitude: number;
}

const HelloWorldScreen: FC = () => {
  const text = useSelector((state: RootState) => state.text);
  const [position, setPosition] = useState<ILocation>();
  // const [cafes, setCafes] = useState();

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        const {longitude, latitude} = pos.coords;

        setPosition({longitude, latitude});
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  useEffect(() => {
    getCurrentPosition();

    // const apiKey = 'AIzaSyCNf0QyIqA1zlfZfiqEWmfhpyjQJ52YC9k';
    const radius = 1000; // meters
    fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.latitude},${position.longitude}&radius=${radius}&type=cafe`,
    )
      .then(response => {
        if (response.ok) {
          console.log('response--->>>>', response);
          // setCafes(response.results);
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!', data); // array of nearby cafes
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  console.log('position--->>>', position);

  return (
    <View style={styles.sectionContainer}>
      <Text testID="textID" style={[styles.text]}>
        {text}
      </Text>
    </View>
  );
};

export default HelloWorldScreen;
