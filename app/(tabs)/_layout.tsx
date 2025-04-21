import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import type { PathConfigMap } from '@react-navigation/native';

// import { HomeScreen } from './home';
// import { PostsScreen } from './posts';
// import { SettingScreen } from './setting';
// import { TaskScreen } from './task';

// export type MaterialTopTabParams = {
//   home: undefined;
//   posts: undefined;
//   setting: undefined;
//   task: undefined;
// };

// const linking: PathConfigMap<MaterialTopTabParams> = {
//   home: 'HomeScreen',
//   posts: 'PostsScreen',
//   setting: 'SettingScreen',
//   task: 'TaskScreen',
// };

// const MaterialTopTabs = createMaterialTopTabNavigator<MaterialTopTabParams>();

// export default function MaterialTopTabsScreen() {
//   return (
//     <MaterialTopTabs.Navigator>
//       <MaterialTopTabs.Screen
//         name="home"
//         component={HomeScreen}
//         options={{ title: 'HomeLet' }}
//       />
//       <MaterialTopTabs.Screen
//         name="posts"
//         component={PostsScreen}
//         options={{ title: 'Posts' }}
//       />
//       <MaterialTopTabs.Screen
//         name="setting"
//         component={SettingScreen}
//         options={{ title: 'Setting' }}
//       />
//       <MaterialTopTabs.Screen
//         name="task"
//         component={TaskScreen}
//         options={{ title: 'Task' }}
//       />
//     </MaterialTopTabs.Navigator>
//   );
// }

// MaterialTopTabsScreen.title = 'Material Top Tabs';
// MaterialTopTabsScreen.linking = linking;
// MaterialTopTabsScreen.options = {
//   headerShown: true,
//   cardStyle: { flex: 1 },
// };

// TODO: Custom tab navigator layout

// import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';

// // Defining the layout of the custom tab navigator
// export default function Layout() {
//   return (
//     <Tabs>
//       <TabSlot />
//       <TabList>
//         <TabTrigger name="home" href="/HomeScreen">
//           <Text>Home</Text>
//         </TabTrigger>
//         <TabTrigger name="posts" href="/posts">
//           <Text>Posts</Text>
//         </TabTrigger>
//         <TabTrigger name="setting" href="/setting">
//           <Text>Setting</Text>
//         </TabTrigger>
//         <TabTrigger name="task" href="/TaskScreen">
//           <Text>Task</Text>
//         </TabTrigger>
//       </TabList>
//     </Tabs>
//   );
// }

// Defining the layout of the custom tab navigator


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="posts"
        options={{
          title: 'Posts',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="file1" color={color} />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="setting" color={color} />,
        }}
      />
      <Tabs.Screen
        name="task"
        options={{
          title: 'Task',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
