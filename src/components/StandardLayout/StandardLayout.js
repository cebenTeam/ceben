import styled from 'styled-components'
import Dock from '@/components/Dock/Dock'

const StandardLayout = ({
  children
}) => {
  return (
    <Wrapper>
      <Header>
        <Dock></Dock>
      </Header>
      <Main>
        {children}
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

const Header = styled.header`

`

const Main = styled.main`
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 80px 32px 92px;
`

export default StandardLayout