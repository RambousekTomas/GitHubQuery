import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const RepositoriesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Repositories page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
