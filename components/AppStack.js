import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home'
import {  ParentHome } from '../screens/parentZone/parentHome'
import { KidsHome } from '../screens/kidZone/kidsHome'
import { Connected } from '../screens/kidZone/Connected'
import {Addpostt} from '../screens/kidZone/Addpost';
import {  Kidschat} from '../screens/kidZone/Kidschat';
import { ParentZone } from '../screens/parentZone/ParentZone';
import { ParentChat } from '../screens/parentZone/ParentChat';
import { Chatscreen } from '../screens/parentZone/Chatscreen';
import { Videoparent } from '../screens/parentZone/Videoparent';
import { Voiceparent } from '../screens/parentZone/Voiceparent';
import { Addchild } from '../screens/parentZone/Addchild';

const Stack = createStackNavigator();

export default function AuthStack() {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ParentHome" component={ParentHome} />
      <Stack.Screen name="Connected" component={Connected} />
      <Stack.Screen name="Addpost" component={Addpostt} />
      <Stack.Screen name="Kids Home" component={KidsHome} />
      <Stack.Screen name="ParentChat" component={ParentChat} />
      <Stack.Screen name="ParentZone" component={ParentZone} />
      <Stack.Screen name="Chatscreen" component={Chatscreen} />
      <Stack.Screen name="Kidschat" component={Kidschat} />
      <Stack.Screen name="Videoparent" component={Videoparent} />
      <Stack.Screen name="Voiceparent" component={Voiceparent} />
      {/* <Stack.Screen name="Keepcall" component={Call} /> */}
      <Stack.Screen name="Addchild" component={Addchild} />
    </Stack.Navigator>
  );
}