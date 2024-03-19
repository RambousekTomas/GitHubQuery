import { FlashList, ListRenderItemInfo } from '@shopify/flash-list'
import { useQuery } from '@tanstack/react-query'
import { isNotEmpty } from 'ramda-adjunct'
import { StyleSheet } from 'react-native'

import { RepositoryListCard } from './RepositoryListCard'
import { fetchOrganizationRepositories } from '../../../api/Requests'
import Spinner from '../../../components/spinner/Spinner'
import { Text } from '../../../components/text/Text'
import { Repository } from '../../../types/Types'

type RepositoriesListProps = {
  organizationName: string
}

export const RepositoriesList = ({ organizationName }: RepositoriesListProps) => {
  const { isFetching, data } = useQuery({
    queryKey: ['repositories', organizationName],
    queryFn: () => fetchOrganizationRepositories({ organizationName }),
    enabled: isNotEmpty(organizationName),
  })

  if (!isNotEmpty(organizationName)) return null

  return (
    <FlashList
      data={data?.items || []}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListFooterComponent={<Spinner animating={isFetching} size={40} />}
      ListEmptyComponent={isFetching ? null : <ListEmptyComponent />}
      estimatedItemSize={100}
    />
  )
}

const renderItem = ({ item: repository }: ListRenderItemInfo<Repository>) => {
  return <RepositoryListCard repository={repository} />
}

const ListEmptyComponent = () => {
  return (
    <Text variant="subtitle" style={styles.listEmptyText}>
      No repositories found
    </Text>
  )
}

const keyExtractor = (item: Repository) => item.id.toString()

const styles = StyleSheet.create({
  listEmptyText: {
    textAlign: 'center',
    paddingVertical: 8,
  },
})
