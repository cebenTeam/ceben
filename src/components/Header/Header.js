import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Inner from '@/components/Inner/Inner'

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Branding>
          <Link href="/" passHref><Logo title="ceben">CEBEN</Logo></Link>
        </Branding>
        <Navigation>
          {/* <Link href="/project" passHref><NavLink>프로젝트</NavLink></Link>
          <Link href="/blog" passHref><NavLink>블로그</NavLink></Link>
          <Link href="/team" passHref><NavLink>팀</NavLink></Link> */}
        </Navigation>
        <Actions>
          {/* <IconButton>
            <img src="/images/search.svg" width="26" alt="" />
          </IconButton> */}
          <IconButton type="button">
            <img src="/images/sun.svg" width="22" alt="" />
          </IconButton>
        </Actions>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.header`
`

const Content = styled(Inner)`
  display: flex;
  align-items: center;
  height: 124px;
`

const Branding = styled.h1`
  font-size: 23px;
  font-weight: 400;
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 112px;
  font-size: 16px;
  letter-spacing: 4px;
`

const Navigation = styled.nav`
  flex: 1 1 auto;
  font-size: 16px;
  text-align: center;
`

const NavLink = styled.a`
  margin: 10px;
  padding: 10px;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 112px;
`

const IconButton = styled.button`
  width: 36px;
  height: 36px;
  margin-left: 12px;
`

export default Header
