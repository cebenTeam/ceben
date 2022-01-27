import React from 'react'
import styled from 'styled-components'
import SEO from '@/components/SEO/SEO'
import Header from '@/components/Header/Header'
import Inner from '@/components/Inner/Inner'

const UI = () => {
  return (
    <>
      <SEO />
      <Header></Header>
      <Main as="main">
        <Title>감성적인 인터페이스가 만들어지는 공간</Title>
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

export default UI