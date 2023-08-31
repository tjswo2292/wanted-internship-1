import { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'

import IssueCard from './IssueCard'
import useScroll from './hook/useScroll'
import { CORE_API } from '../../api/core'
import { sortingIsOpen } from '../../util/sortingIsOpen'
import { sortingComments } from '../../util/sortingComments'
import { IssueDataType } from '../../util/type'
import { OWNER, REPO } from '../../api/constants'

const IssueListSection = () => {
  const [issueCard, setIssueCard] = useState<IssueDataType[]>([])
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
          { per_page: 10, page: page }
        )
        const { data } = response

        const sortedIsOpen = sortingIsOpen(data)
        const sortedData = sortingComments(sortedIsOpen)

        setIssueCard((prev) => [...prev, ...sortedData])
      } catch (error) {
        console.log(error)
      }
    }

    fetchIssueData()
  }, [page])

  useEffect(() => {
    if (scrollHeight !== 0 && refCurrent) {
      refCurrent.scrollTop >=
        refCurrent.scrollHeight - refCurrent.clientHeight &&
        setPage((prev) => prev + 1)
    }
  }, [scrollHeight])

  return (
    <Section>
      <Box ref={issueListRef}>
        {issueCard.map(
          (
            { id, number, title, user: { login }, created_at, comments },
            index
          ) => (
            <IssueCard
              key={id}
              number={number}
              title={title}
              userId={login}
              created_at={created_at}
              comments={comments}
              count={index}
            />
          )
        )}
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
