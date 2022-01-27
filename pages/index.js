import React from 'react'
import styled from 'styled-components'
import SEO from '@/components/SEO/SEO'
import Header from '@/components/Header/Header'
import Inner from '@/components/Inner/Inner'

const Homepage = () => {
  return (
    <>
      <SEO />
      <Header></Header>
      <Main as="main">
      </Main>
    </>
  )
}

const Title = styled.h2`
  font-size: 48px;
  font-weight: 800;
`

const Main = styled(Inner)`
  padding-top: 60px;
  padding-bottom: 60px;
`

export default Homepage