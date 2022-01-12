import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Register from "./RegisterStack";
import Login from "./LoginStack";
import Home from "./HomeStack";


const Drawer = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Register: {
    screen: Register,
  },
  Login: {
    screen: Login,
  },
})



export default createAppContainer(Drawer);