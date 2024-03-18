import { axiosInstance } from './AxiosConfig'
import { SearchResult } from '../types/Types'

type OrganizationRepositoriesFilterOptions = {
  organizationName: string
  sort?: 'stars'
  order?: 'desc'
}

export const fetchOrganizationRepositories = async (
  filterOptions: OrganizationRepositoriesFilterOptions,
) => {
  const params = new URLSearchParams()
  params.append('q', encodeURI(filterOptions.organizationName))
  params.append('sort', filterOptions.sort || 'stars')
  params.append('order', filterOptions.order || 'desc')

  const response = await axiosInstance.get<SearchResult>('/search/repositories', {
    params: Object.fromEntries(params),
  })

  console.log('response', console.log(JSON.stringify(response.data, null, 2)))

  return response.data
}
