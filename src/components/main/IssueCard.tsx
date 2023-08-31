import { styled } from 'styled-components'

import { dateSlice } from '../../util/dateSlice'
import { Link } from 'react-router-dom'
import AdBanner from './AdBanner'
import { ROUTES } from '../../router/routes'

interface IssueCardProps {
  number: number
  title: string
  userId: string
  created_at: string
  comments: number
  count: number
}

const IssueCard = ({
  number,
  title,
  userId,
  created_at,
  comments,
  count,
}: IssueCardProps) => {
  const { year, month, day } = dateSlice(created_at)

  return (
    <Link to={ROUTES.DETAIL}>
      <Box>
        <DescWrapper>
          <IssueHeader>
            <IssueNumber>#{number}</IssueNumber>
            <IssueTitle>{title}</IssueTitle>
          </IssueHeader>
          <IssueInfo>
            <IssueAuthor>작성자: {userId}</IssueAuthor>
            <IssueCreatedAt>
              작성일: {year}년{month}월{day}일
            </IssueCreatedAt>
          </IssueInfo>
        </DescWrapper>
        <CommentWrapper>
          <CommentNumber>코멘트: {comments}</CommentNumber>
        </CommentWrapper>
      </Box>
      {(count + 1) % 5 === 0 && <AdBanner />}
    </Link>
  )
}

const Box = styled.div`
  display: flex;
  height: 5rem;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid #e1e2e3;
`
const DescWrapper = styled.div`
  width: 80%;
`
const IssueHeader = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`
const IssueNumber = styled.span`
  margin-right: 0.5rem;
`
const IssueTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const IssueInfo = styled.div`
  font-size: 1.3rem;
`
const IssueAuthor = styled.span`
  margin-right: 0.5rem;
`
const IssueCreatedAt = styled.span``
const CommentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`
const CommentNumber = styled.span`
  font-size: 1.3rem;
`

export default IssueCard
