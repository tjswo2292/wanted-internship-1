import { useEffect, useRef, useState } from 'react'

import { styled } from 'styled-components'

import IssueCardWrapper from './IssueCardWrapper'
import { CORE_API } from '../../api/core'
import { OWNER, REPO } from '../../api/constants'
import useScroll from './hook/useScroll'
import { sortingIsOpen } from '../../util/sortingIsOpen'
import { sortingComments } from '../../util/sortingComments'
import { IssueDataType } from '../../util/type'
import InfiniteScrollLoading from '../loading/InfiniteScrollLoading'
import MainLoading from '../loading/MainLoading'

const IssueListSection = () => {
  const [issueCard, setIssueCard] = useState<IssueDataType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isIssueLoading, setIsIssueLoading] = useState(false)
  const [page, setPage] = useState(1)
  const issueListRef = useRef<HTMLDivElement>(null)

  const scrollHeight = useScroll(issueListRef)

  const refCurrent = issueListRef.current

  useEffect(() => {
    const fetchIssueData = async () => {
      try {
        const response = await CORE_API(
          'get',
          `/repos/${OWNER}/${REPO}/issues`,
          { per_page: 10, page }
        )
        const { data } = response

        const sortedIsOpen = sortingIsOpen(data)
        const sortedData = sortingComments([...issueCard, ...sortedIsOpen])

        setIssueCard(sortedData)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchIssueData()
  }, [page])

  useEffect(() => {
    issueCard.length === 0 ? setIsIssueLoading(true) : setIsIssueLoading(false)
  }, [issueCard])

  useEffect(() => {
    if (scrollHeight !== 0 && refCurrent) {
      if (
        refCurrent.scrollTop >=
        refCurrent.scrollHeight - refCurrent.clientHeight
      ) {
        setIsLoading(true)
        setPage((prev) => prev + 1)
      }
    }
  }, [scrollHeight])

  return (
    <Section>
      <Box ref={issueListRef}>
        {isIssueLoading && <MainLoading />}
        {issueCard.map(
          (
            {
              id,
              number,
              title,
              user: { login, avatar_url },
              created_at,
              comments,
              body,
            },
            index
          ) => (
            <IssueCardWrapper
              key={id}
              number={number}
              title={title}
              user_id={login}
              created_at={created_at}
              comments={comments}
              count={index}
              avatar_url={avatar_url}
              body={body}
            />
          )
        )}
        {isLoading && <InfiniteScrollLoading />}
      </Box>
    </Section>
  )
}

const Section = styled.section``
const Box = styled.div`
  height: 65rem;
  overflow-y: scroll;
`

export default IssueListSection
