import React from 'react'
import { ActivityIndicator, ColorValue, StyleProp, ViewStyle } from 'react-native'

import { colors } from '../../styles'

type SpinnerProps = {
  animating?: boolean
  size?: number | 'small' | 'large'
  style?: StyleProp<ViewStyle>
  color?: ColorValue
}

const Spinner = ({ animating, size, style, color = colors.spinner }: SpinnerProps) => {
  return <ActivityIndicator color={color} size={size} style={style} animating={animating} />
}

export default Spinner
