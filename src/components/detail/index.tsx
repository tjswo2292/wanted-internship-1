import { useLocation, useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css/github-markdown.css'

import IssueCard from '../main/IssueCard'

const Detail = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const { text, title, user_id, avatar_url, created_at } = location.state

  return (
    <Box>
      <ProfileWrapper>
        <AvatarWrapper>
          <Image src={avatar_url} alt="프로필사진" />
        </AvatarWrapper>
        <IssueCard
          number={searchParams.get('number')}
          title={title}
          user_id={user_id}
          created_at={created_at}
          comments={searchParams.get('comments')}
        />
      </ProfileWrapper>

      <ReactMarkdown className="markdown-body">{text}</ReactMarkdown>
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
