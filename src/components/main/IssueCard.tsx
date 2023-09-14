import { styled } from 'styled-components'
import { dateSlice } from '../../util/dateSlice'

interface IssueCardProps {
  number: number | string | null
  title: string
  created_at: string
  comments: number | string | null
  user_id: string
  avatar_url?: string
  body?: string
}

const IssueCard = ({
  number,
  title,
  created_at,
  comments,
  user_id,
}: IssueCardProps) => {
  const { year, month, day } = dateSlice(created_at)

  return (
    <>
      <Box>
        <DescWrapper>
          <IssueHeader>
            <IssueNumber>#{number}</IssueNumber>
            <IssueTitle>{title}</IssueTitle>
          </IssueHeader>
          <IssueInfo>
            <IssueAuthor>작성자: {user_id}</IssueAuthor>
            <IssueCreatedAt>
              작성일: {year}년{month}월{day}일
            </IssueCreatedAt>
          </IssueInfo>
        </DescWrapper>
        <CommentWrapper>
          <CommentNumber>코멘트: {comments}</CommentNumber>
        </CommentWrapper>
      </Box>
    </>
  )
}

const Box = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
  height: 5rem;
  margin: 1.5rem 0;
`
const DescWrapper = styled.div`
  width: 80%;
`
const IssueHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`
const IssueNumber = styled.span`
  margin-right: 0.5rem;
  font-size: 1.7rem;
  color: gray;
  font-weight: bold;
`
const IssueTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.7rem;
  font-weight: bold;
`
const IssueInfo = styled.div`
  text-align: left;
  font-size: 1.3rem;
  color: gray;

  span {
    margin-right: 0.5rem;
  }
`
const IssueAuthor = styled.span`
  margin-right: 0.5rem;
`
const IssueCreatedAt = styled.span``
const CommentWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 20%;
  margin-right: 10px;
`
const CommentNumber = styled.span`
  font-size: 1.5rem;
`

export default IssueCard
