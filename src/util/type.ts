type IssueDataType = {
  id: number
  state: string
  comments: number
  number: number
  title: string
  user: { login: string }
  created_at: string
}

export type { IssueDataType }
