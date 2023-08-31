import React, { createContext, useState } from 'react'

type IssueInfoType = {
  number: string
  title: string
  userId: number
  created_at: string
  comments: number
  count: number
  avatar_url: string
}

type IssueContextType = {
  issueInfo?: IssueInfoType
  setIssueInfo: React.Dispatch<React.SetStateAction<IssueInfoType | undefined>>
}

type IssuesProviderProps = {
  children: React.ReactNode
}

export const IssueContext = createContext<IssueContextType | undefined>(
  undefined
)

const IssueProvider: React.FC<IssuesProviderProps> = ({ children }) => {
  const [issueInfo, setIssueInfo] = useState<IssueInfoType>()

  return (
    <IssueContext.Provider value={{ issueInfo, setIssueInfo }}>
      {children}
    </IssueContext.Provider>
  )
}

export default IssueProvider
