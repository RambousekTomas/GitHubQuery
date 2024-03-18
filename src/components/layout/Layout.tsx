import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

type LayoutProps = {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export const Layout = ({ children, style }: LayoutProps) => {
  const mergedStyle = [styles.container, style]

  return <View style={mergedStyle}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
})
