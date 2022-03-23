import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Launch = ({
  appID,
  mouseX,
  name,
  href,
  icon
}) => {
  return (
    <Link href={href} passHref>
      <Wrapper>
        <img src={`/assets/icons/${icon}.svg`} alt="" />
        <Tooltip>{name}</Tooltip>
        <Dot></Dot>
      </Wrapper>
    </Link>
  )
}

const Tooltip = styled.span`
  position: absolute;
  left: 50%;
  top: 0;
  padding: 4px 8px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transform: translate(-50%, calc(-100%));
  transition: all .24s .4s cubic-bezier(0,0,.2,1);  
  border: 1px soild #dedede;
  border-radius: 4px;
  background-color: rgba(176, 179, 188, 0.1);
  backdrop-filter: blur(40px);
`

const Wrapper = styled(motion.a)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: var(--text-color);
  background-color: #f0f0f2;
  border-radius: 12px;
  &:hover ${Tooltip} {
    opacity: 1;
    transition: all .24s .6s cubic-bezier(0,0,.2,1);  
    transform: translate(-50%, calc(-120%));
  }
  img {
    width: 50%;
    height: 50%;
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

export default Launch