import { useState } from 'react'
import { View } from 'react-native'

import { RepositoriesList } from './components/RepositoriesList'
import SearchBar from './components/SearchBar'
import { Layout } from '../../components/layout/Layout'
import { sharedStyles } from '../../styles'

export const RepositoriesScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState('')
  const [searchFocus, setSearchFocus] = useState(false)

  const onStartShouldSetResponder = () => {
    setSearchFocus(false)
    return false
  }

  return (
    <Layout>
      <SearchBar
        setSearchPhrase={setSearchPhrase}
        searchFocus={searchFocus}
        setSearchFocus={setSearchFocus}
      />
      <View onStartShouldSetResponder={onStartShouldSetResponder} style={sharedStyles.flex}>
        <RepositoriesList organizationName={searchPhrase} />
      </View>
    </Layout>
  )
}
