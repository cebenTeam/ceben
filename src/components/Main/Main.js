import styled from 'styled-components'
import Inner from '@/components/Inner/Inner'

const Main = ({
  children
}) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  padding-top: 80px;
  padding-bottom: 60px;
`

const Content = styled(Inner)`

`

export default Main
