type IssueDataType = {
  id: number
  state: string
  comments: number
  number: number
  title: string
  user: { login: string; avatar_url: string }
  created_at: string
  body: string
}

export type { IssueDataType }
