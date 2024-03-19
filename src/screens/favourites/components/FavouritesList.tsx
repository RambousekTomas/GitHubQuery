import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list'
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'

import { Card } from '../../../components/card/Card'
import { Text } from '../../../components/text/Text'
import { Repository } from '../../../types/Types'
import { SavedContext } from '../../repositories/components/SavedContext'

export const FavouritesList = () => {
  const { repositories } = useContext(SavedContext)
  return <FlashList data={repositories} renderItem={renderItem} estimatedItemSize={10} />
}

const renderItem = ({ item: repository }: ListRenderItemInfo<Repository>) => {
  return (
    <Card style={styles.card}>
      <Text variant="title">{repository.name}</Text>
      <MaterialIcons name="favorite" color="gold" size={20} />
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
