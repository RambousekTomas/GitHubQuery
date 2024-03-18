import 'react-native-url-polyfill/auto'

import Ionicons from '@expo/vector-icons/Ionicons'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Tabs } from 'expo-router'
import React from 'react'

const queryClient = new QueryClient()

export default function AppLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            paddingTop: 4,
            paddingBottom: 4,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Repositories',
            tabBarIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </QueryClientProvider>
  )
}
