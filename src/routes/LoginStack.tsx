import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/Login"; 
import Header from "../shared"


const screens = {
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Login' />
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