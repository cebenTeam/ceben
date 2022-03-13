import react from 'react'
import styled from 'styled-components'

const ContentPreview = () => {
  return (
    <Article>
      <LinkWrapper>
        {/* <Thumbnail>
          <img src="https://apex-software.imgix.net/logs/site/light-with-logs.png?auto=format&w=1000&dpr=2" alt="" />
        </Thumbnail> */}
        <Metadata>
          <Title>이미지 최적화를 위한 WebP 포맷 적용 이야기</Title>
          <Excerpt>레진코믹스는 다양한 웹툰을 글로벌 서비스하고 있는 회사입니다. 저희 개발구성원들은 항상 더 빠르고 안정적인 서비스를 하기 위해 각자 맡은 영역에서 최선을 다하고 있습니다. 그 노력의 일환으로 백엔드 관점에서 차세대 포맷인 WebP를 적용하면서 겪었던 경험담을 공유하려 합니다. WebP 란 무엇인가? 2010년 구글이 만든 이미지 포맷으로 홈페이지에서 JPEG(손실)나 PNG(비손실) 포맷대비 30% 정도 더 사이즈가 작다고 설명하고 있습니다.</Excerpt>
          <ReadMore>자세히 보기</ReadMore>
        </Metadata>
      </LinkWrapper>
    </Article>
  )
}

const Article = styled.article`
  overflow: hidden;
  &:not(:first-child) {
    margin-top: 80px;
  }
  border-radius: 8px;
`

const LinkWrapper = styled.a`
  display: block;
`

const Thumbnail = styled.div`
  /* position: relative;
  height: 0;
  padding-top: 56.25%;
  border-radius: 2px;
  overflow: hidden;
  img {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
  } */
`

const Metadata = styled.div``

const Title = styled.h3`
  font-size: 36px;
`

const Excerpt = styled.p`
  margin: 24px 0;
  font-size: 18px;
`

const ReadMore = styled.span`
  color: #0044e4;
  &:after {
    content: "→";
    display: inline-block;
    margin-left: 8px;
    font-weight: 300;
    transition: transform 0.15s ease 0s;
    ${LinkWrapper}:hover & {
      transform: translateX(5px);
    }    
  }
`

export default ContentPreview