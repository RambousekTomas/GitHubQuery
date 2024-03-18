import React from 'react'
import { StyleSheet } from 'react-native'

import { Logo } from './components/Logo'
import Options from './components/Options'
import { Layout } from '../../components/layout/Layout'
import { colors } from '../../styles'

export const SettingsScreen = () => {
  return (
    <Layout style={styles.layout}>
      <Logo />
      <Options />
    </Layout>
  )
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.background.main,
  },
})
