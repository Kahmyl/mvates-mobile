import { createStackNavigator } from "react-navigation-stack";
import Register from "../screens/Register"; 
import Header from "../shared"


const screens = {
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation}  title='Register'/>
      }
    }
  }
}

const Route = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default Route;