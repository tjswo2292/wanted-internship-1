import { styled } from 'styled-components'
import IssueCard from './IssueCard'
import { ROUTES } from '../../router/routes'
import { useNavigate } from 'react-router-dom'
import AdBanner from './AdBanner'

interface IssueCardWrapperProp {
  number: number
  title: string
  created_at: string
  comments: number
  user_id: string
  avatar_url?: string
  body?: string
  count: number
}

const IssueCardWrapper = ({
  number,
  title,
  created_at,
  comments,
  user_id,
  avatar_url,
  body,
  count,
}: IssueCardWrapperProp) => {
  const navigate = useNavigate()

  const handleMove = () => {
    navigate(`${ROUTES.DETAIL}?number=${number}&comments=${comments}`, {
      state: { text: body, title, user_id, avatar_url, created_at },
    })
  }

  return (
    <>
      <MoveBtn onClick={handleMove}>
        <IssueCard
          number={number}
          title={title}
          created_at={created_at}
          comments={comments}
          user_id={user_id}
        />
      </MoveBtn>
      {(count + 1) % 4 === 0 && <AdBanner />}
    </>
  )
}

const MoveBtn = styled.button`
  width: 100%;
  overflow-x: hidden;
  border-bottom: 0.1rem solid #e1e2e3;
`

export default IssueCardWrapper
