import { useAssets } from 'expo-asset'
import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Text } from '../../../components/text/Text'
import { colors } from '../../../styles'

export const Logo = () => {
  const [assets] = useAssets([require('../../../../assets/vacasa-logo.png')])

  return (
    <View style={styles.container}>
      {assets && (
        <Image style={styles.image} source={assets[0].uri} contentFit="cover" transition={1000} />
      )}
      <View style={styles.rowContainer}>
        <Text variant="subtitle">Vacasa Interview</Text>
        <Text variant="body" style={{ color: colors.text.subtle }}>
          vacasa_interview@vacasa.com
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 16,
    backgroundColor: colors.background.main,
  },
  rowContainer: {
    marginVertical: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: 60,
    height: 60,
  },
})
