import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { Text } from '../../../components/text/Text'
import { colors } from '../../../styles'

const Options = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text variant="title" style={styles.upperCaseText}>
          Support
        </Text>
      </View>
      {settings.map((setting, id) => (
        <View key={id} style={styles.optionItem}>
          <Text variant="body">{setting.label}</Text>
          <Text variant="body">{setting.value}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default Options

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
  },
  upperCaseText: {
    textTransform: 'uppercase',
    color: colors.text.subtle,
  },
  section: {
    paddingVertical: 8,
  },
  optionItem: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.background.main,
    marginBottom: 1,
  },
})

const settings = [
  { id: 'app-version', label: 'App Version', value: '1.0.0' },
  { id: 'notifications', label: 'Notifications', value: 'Enabled' },
  { id: 'language', label: 'Language', value: 'English' },
  { id: 'theme', label: 'Theme', value: 'Dark' },
]
