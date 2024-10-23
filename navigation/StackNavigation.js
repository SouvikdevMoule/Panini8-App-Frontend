// StackNavigation.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Loading from "../screens/Loading";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import Goals from "../screens/Goals";
import Main from "../screens/Main";
import Play from "../screens/Play";
import Dash from "../screens/Dash";
import Progress from "../screens/Progress";
import Lesson from "../screens/Lesson";
import { Test } from "../screens/Test";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Goals" component={Goals} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Play" component={Play} />
      <Stack.Screen name="Dash" component={Dash} />
      <Stack.Screen name="Progress" component={Progress} />
      <Stack.Screen name="Lesson" component={Lesson} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
