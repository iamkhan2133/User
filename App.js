
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Login from "./Screens/Login";
import Signup from "./Screens/Signpu";
import Home from "./Screens/Home";
import Savedata from "./Screens/Savedata";
import myinfo from "./Screens/myinfo";
import addcontact from "./Screens/addcontact";
import image from "./Screens/image";
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const App = () => {
  const TabNav = () => {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen 
        name="Login" 
        component={Login} 
        options={{
            tabBarIcon: ({ color, size }) => (
              <Icon 
              name="desktop" 
              size={19} 
              color={'#5675a6'} /> // Render the icon here
            ),
         
        }}/>
        <Tab.Screen name="Signup" component={Signup}
        options={{
            tabBarIcon:({color,size})=>(
              <Icon
              name="user"
              size={19}
              color={'#5675a6'}/>
            )
        }}
        />
        <Tab.Screen name="Savedata" component={Savedata}
                options={{
                  tabBarIcon:({color,size})=>(
                    <Icon
                    name="address-book"
                    size={19}
                    color={'#5675a6'}/>
                  )
              }}
         />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNav} />
        <Stack.Screen name="Contacts_Screen" component={Savedata} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={(Home)} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name ="Savedata" component={Savedata}/>
        <Stack.Screen name="myinfo" component={myinfo}/>
        <Stack.Screen name="addcontact" component={addcontact}/>
        <Stack.Screen name="image" component={image}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;
