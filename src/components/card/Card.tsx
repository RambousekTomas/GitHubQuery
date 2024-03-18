import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

import { colors } from '../../styles'

type CardProps = {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export const Card = ({ children, style }: CardProps) => {
  const mergedStyle = [styles.card, style]
  return <View style={mergedStyle}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.main,
    borderRadius: 8,
    elevation: 1,
    padding: 12,
  },
})
