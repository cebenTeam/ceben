import Link from 'next/link'
import styled from 'styled-components'

const Dock = () => {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <Launch>
          <img src="/assets/icons/home.svg" alt="" />
          <Tooltip>홈</Tooltip>
          <Dot></Dot>
        </Launch>
      </Link>
      <HR />
      <Link href="/" passHref>
        <Launch>
          <img src="/assets/icons/docs.svg" alt="" />
          <Tooltip>포스트</Tooltip>
        </Launch>
      </Link>
      <Link href="/" passHref>
        <Launch>
          <img src="/assets/icons/project.svg" alt="" />
          <Tooltip>프로젝트</Tooltip>
        </Launch>
      </Link>
      {/* <Link href="/" passHref>
        <Launch>
          <img src="/assets/icons/tutorial.svg" alt="" />
        </Launch>
      </Link> */}
      <Link href="/" passHref>
        <Launch>
          <img src="/assets/icons/github.svg" alt="" />
          <Tooltip>깃허브</Tooltip>          
        </Launch>
      </Link>
      <HR />
      <Link href="/" passHref>
        <Launch type="button" as="button">
          <img src="/assets/icons/sun.svg" alt="" />
          <Tooltip>다크모드</Tooltip>
        </Launch>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
  left: 50%;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px;
  border-radius: 20px;
  transform: translate(-50%, -24px);
  background-color: rgba(176, 179, 188, 0.1);
  backdrop-filter: blur(40px);
`

const Tooltip = styled.span`
  position: absolute;
  left: 50%;
  top: -100%;
  padding: 4px 8px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transform: translate(-50%, 10px);
  transition: all .24s cubic-bezier(0,0,.2,1);  
  border: 1px soild #dedede;
  border-radius: 4px;
  background-color: rgba(176, 179, 188, 0.1);
  backdrop-filter: blur(40px);
`

const Launch = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: var(--text-color);
  &:hover ${Tooltip} {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`

const Dot = styled.span`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 4px;  
  height: 4px;
  transform: translate(-50%, 0);
  background-color: #dedede;
  border-radius: 50%;
`

const HR = styled.hr`
  width: 1px;
  height: 30px;
  margin: 0px 4px;
  border: 0px;
  background-color: #dedede;
`

export default Dock
