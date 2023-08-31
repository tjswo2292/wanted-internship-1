import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

import AdBanner from './AdBanner'
import { IssueContext } from '../../context/IssueContext'
import { dateSlice } from '../../util/dateSlice'
import { ROUTES } from '../../router/routes'

interface IssueCardProps {
  number: number
  title: string
  userId: string
  created_at: string
  comments: number
  count: number
  avatar_url?: string
  body?: string
}

const IssueCard = ({
  number,
  title,
  userId,
  created_at,
  comments,
  count,
  avatar_url,
  body,
}: IssueCardProps) => {
  const navigate = useNavigate()
  const { year, month, day } = dateSlice(created_at)

  const { setIssueInfo }: any = useContext(IssueContext)

  const saveUserInfo = () => {
    setIssueInfo({
      number,
      title,
      userId,
      created_at,
      comments,
      avatar_url,
      count,
    })
  }

  const handleMove = () => {
    saveUserInfo()
    navigate(ROUTES.DETAIL, {
      state: { text: body },
    })
  }

  return (
    <>
      <MoveBtn onClick={handleMove}>
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
      </MoveBtn>
      {(count + 1) % 5 === 0 && <AdBanner />}
    </>
  )
}

const Box = styled.div`
  display: flex;
  height: 5rem;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid #e1e2e3;
`
const MoveBtn = styled.button`
  width: 100%;
  overflow-x: hidden;
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
  text-align: left;
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
