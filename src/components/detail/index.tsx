import { useContext } from 'react'

import { useLocation } from 'react-router-dom'
import { styled } from 'styled-components'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css/github-markdown.css'

import IssueCard from '../main/IssueCard'
import { IssueContext } from '../../context/IssueContext'

const Detail = () => {
  const { state } = useLocation()
  const { issueInfo }: any = useContext(IssueContext)
  const { number, title, userId, created_at, comments, count, avatar_url } =
    issueInfo

  return (
    <Box>
      <ProfileWrapper>
        <AvatarWrapper>
          <Image src={avatar_url} alt="프로필사진" />
        </AvatarWrapper>
        <IssueCard
          number={number}
          title={title}
          userId={userId}
          created_at={created_at}
          comments={comments}
          count={count}
        />
      </ProfileWrapper>

      <ReactMarkdown className="markdown-body">{state.text}</ReactMarkdown>
    </Box>
  )
}

const Box = styled.div`
  height: 65rem;
  overflow-y: scroll;
`
const ProfileWrapper = styled.div`
  display: flex;
`
const AvatarWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 0.5rem;
`
const Image = styled.img`
  width: inherit;
  height: inherit;
`

export default Detail
