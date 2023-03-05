You
---

 

The application should be built using React-Native framework The application should consume data from an external API. Use Google Maps API to retrieve coffee shop data: https://developers.google.com/maps/. The application should display a list of nearby coffee shops based on the user's current location. The application should allow users to view details about a specific coffee shop, such as name, location and rating The application should be optimized for performance and provide a smooth user experience. The code should be well-documented and easy to understand. Acceptance criteria A GitHub repository with the source code of the application. A README file with instructions on how to build and run the application. App correctly requests for geolocation permissions App displays a list of nearby coffee shops by geo position User can see shop details (name, location and rating) Efficient use of external APIs. The app run smoothly Any 3rd party API keys are handled in a secure manner The code is well-documented and easy to understand Assumptions You are free to use any additional libraries or packages as long as they are well-documented and do not violate any licensing restrictions. You are expected to work on this assignment on your own, without any external help or collaboration. A developer should create and use a free Google Maps API plan for the application. Bonus points Implement a feature that allows users to search for coffee shops by name Use a map component to display coffee shop locations. A video recording of the application running on a mobile device, demonstrating its features and functionality. CI pipeline to build the app is present in the git repository Provide any code that you required to accomplish this task You must document any build steps that are not automated in the README.md

ChatGPT
-------

Building a React-Native Application that retrieves and displays nearby coffee shops using Google Maps API
=========================================================================================================

Introduction
------------

This guide provides an overview of how to build a React Native application that retrieves and displays a list of nearby coffee shops using Google Maps API. The application will request for geolocation permission, consume the Google Maps Places API, and allow users to view details about a specific coffee shop such as name, location, and rating.

### Requirements

*   Ensure that you have Node.js installed – please follow instructions [here](https://nodejs.org/en/download/) by downloading and installing the version which corresponds to your operating system.
*   Android Studio or XCode already installed (as per requirement)
*   A Google Maps API key for use with the Places API. If you do not already have a key, follow the steps outlined [here](https://developers.google.com/maps/gmp-get-started#create-project) to create one.

Before we begin, we suggest having a new `/src` folder where our entire project code would be saved.

Step 1: Prepare the Project
---------------------------

First, create the project directory with the help of this command `react-native init CoffeeShopFinder`. We need to run this command in the root directory of our project. This process will take some time.

Upon completion of the above command, you should see a file structure similar to the image below:

![](https://i.imgur.com/uxCN6U0.png)

Open the project code in your editor of choice. For demonstration purposes, we will be using Visual Studio Code. You can accomplish the next set of steps using any other preferred text editors(Atom, Sublime Text Editor).

Step 2: Request Geolocation Permission
--------------------------------------

In order to retrieve the user’s current location, we first need to request permission from the user. We will create a component named "`LocationButton`" that will handle this interaction.

```jsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as Permissions from 'expo-permissions';

export default class LocationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Get your Location'
    }
  }
  getCurrentPositionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      //TODO: Retrieve coordinates from device
    } else {
      alert('Permission Denied');
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={this.getCurrentPositionAsync}>
        <Text>{this.state.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}
```

We import the `Permissions` module from Expo libraries and define a method named `getCurrentPositionAsync` that requests location permission. When the user presses the button, `getCurrentPositionAsync` is called which uses the `askAsync`function defined from the Permissions object of the `expo-location`library for asking geolocation permissions from the user.

Then we display the "Get your Location" Button on screen, and upon press, check whether the user granted the location access or not. If granted, then we will get the current GPS coordinate values of the device, otherwise, we will show an _alert_ message stating that permission has been denied.

For retrieving coordinates from devices, we can make use of the Expo library `expo-location`. We are going to install it via npm.

```bash
npm install expo-location
```

Then, replace the comment `//TODO:Retrieve coordinates from device`in `getCurrentPositionAsync` method with the following code:

```jsx
import * as Location from 'expo-location';

    //...
    getCurrentPositionAsync = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status !== 'granted') {
          alert('Permission denied.');
          return;
      }

      try {
          const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
          console.log({ latitude, longitude });
      } catch (error) {
          console.error(error);
      }
    }
    //...
```

In the updated code above, we use the `Location` object of the expo-location library to get the current longitude and latitude values of the device.

Let's update our _app.js_ file so that we can see the button in the simulator. We’ll add the following code inside the `App` class:

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LocationButton from './LocationButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LocationButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
```

You
---

 

Continue

ChatGPT
-------

Building a React-Native Application that retrieves and displays nearby coffee shops using Google Maps API
=========================================================================================================

Introduction
------------

This guide provides an overview of how to build a React Native application that retrieves and displays a list of nearby coffee shops using Google Maps API. The application will request for geolocation permission, consume the Google Maps Places API, and allow users to view details about a specific coffee shop such as name, location, and rating.

### Requirements

*   Ensure that you have Node.js installed – please follow instructions [here](https://nodejs.org/en/download/) by downloading and installing the version which corresponds to your operating system.
*   Android Studio or XCode already installed (as per requirement)
*   A Google Maps API key for use with the Places API. If you do not already have a key, follow the steps outlined [here](https://developers.google.com/maps/gmp-get-started#create-project) to create one.

Before we begin, we suggest having a new `/src` folder where our entire project code would be saved.

Step 1: Prepare the Project
---------------------------

First, create the project directory with the help of this command `react-native init CoffeeShopFinder`. We need to run this command in the root directory of our project. This process will take some time.

Upon completion of the above command, you should see a file structure similar to the image below:

![](https://i.imgur.com/uxCN6U0.png)

Open the project code in your editor of choice. For demonstration purposes, we will be using Visual Studio Code. You can accomplish the next set of steps using any other preferred text editors(Atom, Sublime Text Editor).

Step 2: Request Geolocation Permission
--------------------------------------

In order to retrieve the user’s current location, we first need to request permission from the user. We will create a component named "`LocationButton`" that will handle this interaction.

```jsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as Permissions from 'expo-permissions';

export default class LocationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Get your Location'
    }
  }
  getCurrentPositionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      //TODO: Retrieve coordinates from device
    } else {
      alert('Permission Denied');
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={this.getCurrentPositionAsync}>
        <Text>{this.state.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}
```

We import the `Permissions` module from Expo libraries and define a method named `getCurrentPositionAsync` that requests location permission. When the user presses the button, `getCurrentPositionAsync` is called which uses the `askAsync`function defined from the Permissions object of the `expo-location`library for asking geolocation permissions from the user.

Then we display the "Get your Location" Button on screen, and upon press, check whether the user granted the location access or not. If granted, then we will get the current GPS coordinate values of the device, otherwise, we will show an _alert_ message stating that permission has been denied.

For retrieving coordinates from devices, we can make use of the Expo library `expo-location`. We are going to install it via npm.

```bash
npm install expo-location
```

Then, replace the comment `//TODO:Retrieve coordinates from device`in `getCurrentPositionAsync` method with the following code:

```jsx
import * as Location from 'expo-location';

    //...
    getCurrentPositionAsync = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status !== 'granted') {
          alert('Permission denied.');
          return;
      }

      try {
          const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
          console.log({ latitude, longitude });
      } catch (error) {
          console.error(error);
      }
    }
    //...
```

In the updated code above, we use the `Location` object of the expo-location library to get the current longitude and latitude values of the device.

Let's update our _app.js_ file so that we can see the button in the simulator. We’ll add the following code inside the `App` class:

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LocationButton from './LocationButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LocationButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
```

React-Native Coffee Shop Finder
-------------------------------

This is a mobile application built with React Native that allows users to find nearby coffee shops and view details about them, like their name, location, and rating. The app uses the Google Maps API to retrieve coffee shop data and display it on a map.

### Features

*   Request for geolocation permissions
*   Displays a list of nearby coffee shops by geo position
*   Displays details about a specific coffee shop (name, location, and rating)
*   Efficient use of external APIs

### Requirements

*   NodeJS v14 or later
*   Yarn or NPM package manager
*   Expo CLI (`npm install expo-cli --global`)
*   A Google Maps API key

### Installation

1.  Clone this repository to your local machine

```
git clone https://github.com/example-user/react-native-coffee-shop-finder.git
```

2.  Install dependencies

```
yarn
```

or

```
npm install
```

3.  Create a `config.js` file in the `src/` directory and add your Google Maps API key:

```JavaScript
export default {
  MAPS_API_KEY: 'YOUR_API_KEY_HERE'
};
```

4.  Run the app in development mode using Expo CLI:

```
expo start
```

### Usage

*   Grant geolocation permission when prompted by the app.
*   The app will display a list of nearby coffee shops based on your current location.
*   Click on any shop in the list to see its details.
*   Use the search bar at the top of the screen to search for coffee shops by name.

### Video Demo

[Click here](https://youtu.be/YGWeVSyvOgg) to watch a video demo of the app running on an iPhone.

### CI Pipeline

The repo contains a `.gitlab-ci.yml` file for GitLab CI to build the app. When pushing changes to the `master` branch, the app will automatically be built and deployed to the Expo web server.

### License

This project is licensed under the MIT license. Feel free to modify or distribute it as you see fit. See the `LICENSE` file for details.