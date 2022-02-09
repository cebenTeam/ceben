import react from 'react'
import styled from 'styled-components'

const ContentPreview = () => {
  return (
    <Article>
      <LinkWrapper>
        <Thumbnail>
          <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61b3c456099a1f404a596891_Design_Buddies_and_Discord_Blog_Header.png" alt="" />
        </Thumbnail>
        <Metadata>
          <Title>웹에서의 가변 글꼴에 대한 소개</Title>
          <Excerpt>이 기사에서는 가변 글꼴(variable fonts)이 무엇이고 이를 작업에서 어떻게 사용할 수 있는지와 함께 가변 글꼴의 잠재적 가능성을 살펴볼 것입니다.</Excerpt>
        </Metadata>
      </LinkWrapper>
    </Article>
  )
}

const Article = styled.article`
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
`

const LinkWrapper = styled.a`
  display: block;
`

const Thumbnail = styled.div`
  position: relative;
  height: 0;
  padding-top: 56.25%;

  img {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
  }
`

const Metadata = styled.div`
  padding: 26px 24px;
`

const Title = styled.h3`
  font-size: 28px;
`

const Excerpt = styled.p`
  margin-top: 10px;
`

const Tag = styled.span`
  display: inline-block;
  border-radius: 24px;
  padding: 8px 24px;
  background-color: #FFF449;
  font-style: normal;
`

export default ContentPreview