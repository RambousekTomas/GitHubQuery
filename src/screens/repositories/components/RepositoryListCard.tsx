import React, { useContext } from 'react'
import { Button, StyleSheet } from 'react-native'

import { SavedContext } from './SavedContext'
import { Card } from '../../../components/card/Card'
import { Text } from '../../../components/text/Text'
import { Repository } from '../../../types/Types'

export const RepositoryListCard = ({ repository }: { repository: Repository }) => {
  const { addRepository } = useContext(SavedContext)

  const handleCardPress = () => {
    addRepository(repository)
  }

  return (
    <Card style={styles.card}>
      <Text variant="title">{repository.name}</Text>
      <Text variant="body" numberOfLines={3} ellipsizeMode="tail">
        {repository.description}
      </Text>
      <Button title="Add" onPress={handleCardPress} />
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
  },
})
