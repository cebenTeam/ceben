import styled from 'styled-components'

const Heading = ({
  as = 'h1',
  children
}) => {
  let Component = null
  switch (as) {
    case 'h1':
      Component = H1
    break
    case 'h2':
      Component = H2
    break
    case 'h3':
      Component = H3
    break
  }

  return <Component children={children} />
}

const H1 = styled.h1`
  font-size: 36px;
`

const H2 = styled.h2`
  font-size: 28px;
  margin-top: 64px;
  margin-bottom: 16px;
`

const H3 = styled.h3`

`

export default Heading