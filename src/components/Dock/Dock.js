import styled from 'styled-components'
import { useMotionValue } from 'framer-motion'
import Launch from './Launch'

const apps = {
  home: {
    name: '홈',
    icon: 'home',
    href: '/'
  },
  post: {
    name: '포스트',
    icon: 'post',
    href: '/'
  },
  tutorial: {
    name: '튜토리얼',
    icon: 'tutorial',
    href: '/'
  },
  project: {
    name: '프로젝트',
    icon: 'project',
    href: '/'
  },
  github: {
    name: '깃허브',
    icon: 'github',
    href: '/'
  },
  theme: {
    name: '다크모드',
    icon: 'sun',
    href: '/'
  },  
}

const Dock = () => {
  const mouseX = useMotionValue(null)

  return (
    <Wrapper
      onMouseMove={(event) => mouseX.set(event.nativeEvent.x)}
      onMouseLeave={() => mouseX.set(null)}
    >
      {Object.keys(apps).map((appID, i) => (
        <Launch
          key={i}
          mouseX={mouseX}
          appID={appID}
          {...apps[appID]}
        ></Launch>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
  left: 50%;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  height: 68px;
  gap: 8px;
  padding: 10px;
  border-radius: 20px;
  transform: translate(-50%, -24px);
  background-color: rgba(176, 179, 188, 0.1);
  backdrop-filter: blur(40px);
`

const HR = styled.hr`
  width: 1px;
  height: 30px;
  margin: 9px 2px;
  border: 0px;
  background-color: #dedede;
`

export default Dock
