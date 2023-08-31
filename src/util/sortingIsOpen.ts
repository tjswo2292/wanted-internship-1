import { IssueDataType } from './type'

type SortingIsOpenType = {
  (data: IssueDataType[]): IssueDataType[]
}

export const sortingIsOpen: SortingIsOpenType = (data) => {
  const sortedData: IssueDataType[] = [
    ...data.filter((item) => item.state === 'open'),
  ]

  return sortedData
}
