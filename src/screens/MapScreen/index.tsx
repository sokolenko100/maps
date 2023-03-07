import React, {useState, useEffect, useCallback, FC} from 'react';
import {View, Text, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
import {Picker} from '@react-native-picker/picker';
import Geolocation from '@react-native-community/geolocation';
import {styles} from './styles';
import {RootState} from '@redux/stores/store';
import {getCountriesData} from './redux/actionCreators';

const InitialRegionCoordinate = {
  latitude: 23.6345,
  longitude: -102.5528,
  latitudeDelta: 100,
  longitudeDelta: 100,
};
const asiaCoordinate = {
  latitude: 35.6762,
  longitude: 139.6503,
};
const europeCoordinate = {
  latitude: 51.5074,
  longitude: -0.1278,
};

/**
 * MapScreen screen
 * Render europe and asia map
 */
const MapScreen: FC = () => {
  const dispatch = useDispatch();
  const [selectedRegion, setSelectedRegion] = useState('Europe');
  const countries = useSelector((state: RootState) => state.countries);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [regionCoordinates, setRegionCoordinates] = useState(
    InitialRegionCoordinate,
  );

  const getCurrentPosition = useCallback(() => {
      Geolocation.getCurrentPosition(
        pos => {
          const {longitude, latitude} = pos.coords;
          setRegionCoordinates({
            longitude, 
            latitude,
            latitudeDelta: 10,
            longitudeDelta: 10,
          });
        },
        error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
        {enableHighAccuracy: true},
      );
    },[]);

  useEffect(() => {
    dispatch(getCountriesData());
    getCurrentPosition();
  }, [dispatch]);

  const onMarkerPress = useCallback((marker: any) => {
    setRegionCoordinates({
      latitude: marker?.coordinates.latitude,
      longitude: marker?.coordinates.longitude,
      latitudeDelta: 5,
      longitudeDelta: 5,
    });
  }, []);

  const handleChange = useCallback(
    (itemValue: string) => {
      const coordinate =
        itemValue === 'Europe' ? europeCoordinate : asiaCoordinate;
      setRegionCoordinates({
        ...coordinate,
        latitudeDelta: 40,
        longitudeDelta: 40,
      });

      let filtersCountries = countries.filter(
        country => country?.ContinentName === itemValue,
      );
      setSelectedCountries(filtersCountries);
      setSelectedRegion(itemValue);
    },
    [countries],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a Region</Text>
      <View style={styles.filterContainer}>
        <View>
          <Picker selectedValue={selectedRegion} onValueChange={handleChange}>
            <Picker.Item label="Asia" value="Asia" />
            <Picker.Item label="Europe" value="Europe" />
          </Picker>
        </View>
      </View>
      <MapView style={styles.map} region={regionCoordinates}>
        {selectedCountries.map(country => (
          <Marker
            key={`marker-${country.name}`}
            coordinate={country.coordinates}
            onPress={() => onMarkerPress(country)}
          />
        ))}
      </MapView>
    </View>
  );
};

export default MapScreen;
