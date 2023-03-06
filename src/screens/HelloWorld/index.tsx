import {FC} from 'react';
import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';
import {RootState} from '@redux/stores/store';
import {useSelector} from 'react-redux';
import MapScreen from '../MapScreen/index';

export interface ILocation {
  longitude: number;
  latitude: number;
}

const HelloWorldScreen: FC = () => {
  const text = useSelector((state: RootState) => state.text);
  return (
    <View style={styles.sectionContainer}>
      {/* <Text testID="textID" style={[styles.text]}>
        {text}
      </Text> */}
      <MapScreen />
    </View>
  );
};

export default HelloWorldScreen;
