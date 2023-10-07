import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

export type NavigationProps = {
  Home: any;
  Login: any;
};

const { Navigator, Screen } = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Register" component={Register} />
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  );
};
