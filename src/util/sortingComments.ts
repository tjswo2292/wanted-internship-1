import { IssueDataType } from './type'

type SortingCommentsType = {
  (data: IssueDataType[]): IssueDataType[]
}

export const sortingComments: SortingCommentsType = (data) => {
  const sortedData: IssueDataType[] = [
    ...data.sort((a, b) => {
      return b.comments - a.comments
    }),
  ]

  return sortedData
}
