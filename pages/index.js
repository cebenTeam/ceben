import React from 'react'
import styled from 'styled-components'
import SEO from '@/components/SEO/SEO'
import Header from '@/components/Header/Header'
import Inner from '@/components/Inner/Inner'
import ContentPreview from '@/components/ContentPreview/ContentPreview'

const Homepage = () => {
  return (
    <>
      <SEO />
      <Header></Header>
      <Main as="main">
        <ContentPreview />
      </Main>
    </>
  )
}

const Title = styled.h2`
  font-size: 48px;
  font-weight: 800;
`

const Main = styled(Inner)`
  min-height: calc(100vh - 124px);
  padding-top: 80px;
  padding-bottom: 60px;
`

export default Homepage