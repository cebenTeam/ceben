import Link from 'next/link'
import styled from 'styled-components'

const ContentPreview = ({
  title,
  date,
  slug,
  excerpt
}) => {
  return (
    <Article>
      <Link href={'/post/' + slug} passHref>
        <LinkWrapper>
          {/* <Thumbnail>
            <img src="https://apex-software.imgix.net/logs/site/light-with-logs.png?auto=format&w=1000&dpr=2" alt="" />
          </Thumbnail> */}
          <Metadata>
            <Title>{title}</Title>
            <Excerpt>{excerpt}</Excerpt>
            <ReadMore>자세히 보기</ReadMore>
          </Metadata>
        </LinkWrapper>
      </Link>
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
  color: #0f0d1d;
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

const Metadata = styled.div`
`

const Title = styled.h3`
  font-size: 36px;
`

const Excerpt = styled.p`
  margin: 24px 0;
  font-size: 18px;
`

const ReadMore = styled.span`
  color: #6a5fe3;
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