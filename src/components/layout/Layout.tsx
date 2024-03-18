import { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'

export const Layout = ({ children }: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
})
