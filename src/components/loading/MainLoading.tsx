import styled from 'styled-components'

const MainLoading = () => {
  return (
    <Box>
      <LoadingText>
        데이터 불러오는중 <br /> 입니다.
      </LoadingText>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
`
const LoadingText = styled.span`
  text-align: center;
  font-size: 3.6rem;
`

export default MainLoading
