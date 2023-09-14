import styled from 'styled-components'

const InfiniteScrollLoading = () => {
  return (
    <Box>
      <LoadingText>Loading...</LoadingText>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`
const LoadingText = styled.span`
  font-size: 24px;
`

export default InfiniteScrollLoading
