import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Title from "../screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Loading from "../screens/Loading";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import Goals from "../screens/Goals";
import Main from "../screens/Main";
import Play from "../screens/Play";
import Dash from "../screens/Dash";
import Progress from "../screens/Progress";

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return(
       <NavigationContainer >
         <Stack.Navigator initialRouteName='Loading' screenOptions={{ headerShown: false }}>
            <Stack.Screen  name="Login"  component={Login}/>
            <Stack.Screen  name="Signup"  component={Signup}/>
            <Stack.Screen  name="Loading"  component={Loading}/>
            <Stack.Screen  name="Home"  component={Home}/>
            <Stack.Screen  name="Goals"  component={Goals}/>
            <Stack.Screen  name="Main"  component={Main}/>
            <Stack.Screen  name="Play"  component={Play}/>
            <Stack.Screen  name="Dash"  component={Dash}/>
            <Stack.Screen  name="Progress"  component={Progress}/>
        </Stack.Navigator>
       </NavigationContainer>
    )
}
export default StackNavigator