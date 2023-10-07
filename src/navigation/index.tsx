import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Loading } from "../screens/Loading";

export type NavigationProps = {
  Home: any;
  Register: any;
  Login: any;
};

const { Navigator, Screen } = createNativeStackNavigator();

export const Navigation = () => {
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      setUser(user ? true : false);
      setIsLoading(false);
    });

    return subscriber;
  }, []);

  if (isLoading) {
    return (
      <NavigationContainer>
        <Navigator
          initialRouteName="Loading"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="Loading" component={Loading} />
        </Navigator>
      </NavigationContainer>
    );
  }

  if (user) {
    return (
      <NavigationContainer>
        <Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="Home" component={Home} />
          <Screen name="Register" component={Register} />
        </Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Register" component={Register} />
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  );
};
