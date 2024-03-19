import React, { createContext, useState } from 'react'

import { Repository } from '../../../types/Types'

export const SavedContext = createContext<{
  repositories: Repository[]
  addRepository: (repository: Repository) => void
}>({
  repositories: [],
  addRepository: () => {},
})

export const SavedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [repositories, setRepositories] = useState<Repository[]>([])

  const addRepository = (repository: Repository) => {
    setRepositories((prevRepositories) => [...prevRepositories, repository])
  }

  console.log('SavedProvider', repositories)

  return (
    <SavedContext.Provider value={{ repositories, addRepository }}>
      {children}
    </SavedContext.Provider>
  )
}
