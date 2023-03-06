import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  label: {
    fontWeight: '600',
    fontSize: 20,
  },
  filterContainer: {
    width: '100%',
    height: '16%',
    borderStartColor: 'red',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: 'black',
    borderRadius: 30,
    borderWidth: 1,
    marginBottom: 5,
  },
});

export {styles};
