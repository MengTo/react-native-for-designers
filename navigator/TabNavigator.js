import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import CoursesScreen from "../screens/CoursesScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import VideoScreen from "../screens/VideoScreen";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator mode="modal">
      <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown: false }}/>
    </HomeStack.Navigator>
  );
};


const CourseStack = createStackNavigator();

const CoursesStackScreen = () => {
  return (
    <CourseStack.Navigator>
      <CourseStack.Screen name="Courses" component={CoursesScreen} options={{ headerShown: false }}/>
    </CourseStack.Navigator>
  );
};

const ProjectsStack = createStackNavigator();

const ProjectsStackScreen = () => {
  return (
    <ProjectsStack.Navigator>
      <ProjectsStack.Screen name="Projects" component={ProjectsScreen} options={{ headerShown: false }}/>
    </ProjectsStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: activeColor, inactiveTintcolor: inactiveColor}}>
      <Tab.Screen name="Home" component={HomeStackScreen} options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="home"
            size={26}
            color={color}
          />
        )
      }}/>
      <Tab.Screen name="Courses" component={CoursesStackScreen} options={{
        tabBarLabel: "Courses",
        tabBarIcon: ({ color }) => (
          <Ionicons
            name="ios-albums"
            size={26}
            color={color}
          />
        )
      }}/>
      <Tab.Screen name="Projects" component={ProjectsStackScreen} options={{
        tabBarLabel: "Projects",
        tabBarIcon: ({ color }) => (
          <Ionicons
            name="ios-folder"
            size={26}
            color={color}
          />
        )
      }}/>
    </Tab.Navigator>
  );
}

const AppStack = createStackNavigator();

const App = () => {
  return(
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component = {TabNavigator} options={{headerShown: false}}/>
      <AppStack.Screen name="Section" component={SectionScreen} options={{headerShown: false}} />
      <AppStack.Screen name="Video" component={VideoScreen} options={{headerShown: false}}/>
    </AppStack.Navigator>
  )
}


export default App;
