import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Vote from "../screens/Vote"; 
import Header from "../shared"

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Mvates' />
      }
    }
  },
  Vote: {
    screen: Vote,
    navigationOptions: {
      title: 'Vote'
    }
  }
}

const Route = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 65 }
    }
});

export default Route;