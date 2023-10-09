import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Loading } from "../screens/Loading";
import { auth } from "../services/firebase";

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
      <Navigator
        initialRouteName="Loading"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Loading" component={Loading} />
      </Navigator>
    );
  }

  if (user) {
    return (
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
      </Navigator>
    );
  }

  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
};
