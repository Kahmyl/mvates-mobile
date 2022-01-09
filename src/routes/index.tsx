import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Vote from "../screens/Vote"; 


const screens = {
  Home: {
    screen: Home
  },
  Vote: {
    screen: Vote
  }
}

const Route = createStackNavigator(screens);

export default createAppContainer(Route);