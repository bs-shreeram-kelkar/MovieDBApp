/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import WelcomeScreen from "./WelcomeScreen"; // Replace with your screen

Navigation.registerComponent('com.myApp.WelcomeScreen', () => WelcomeScreen);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'com.myApp.WelcomeScreen',
             },
           },
         ],
       },
     },
   });
});
