import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styled from 'styled-components'
import SEO from '@/components/SEO/SEO'
import StandardLayout from '@/components/StandardLayout/StandardLayout'
import ContentPreview from '@/components/ContentPreview/ContentPreview'
import Heading from '@/components/Heading/Heading'

const Homepage = ({ posts }) => {
  return (
    <Wrapper>
      <SEO />
        <MainTitle as="h1">
          특별한 <TextClip>경험</TextClip>을 담기에<br />더 할 나위 없이 좋은 곳
        </MainTitle>
        <SubTitle>
          Ceben은 프론트엔드 개발자를 위한 공간입니다.<br />
          새로운 것을 배우거나 흥미로운 인터페이스를 감상해 보세요!
        </SubTitle>

      {/* {posts.map(({
        title,
        date,
        slug,
        excerpt
      }) => (
        <ContentPreview
          key={slug}
          title={title}
          date={date}
          slug={slug}
          excerpt={excerpt}
        />
      ))} */}
    </Wrapper>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data } = matter(markdownWithMeta)

    return {
      ...data,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

const Wrapper = styled.div`
  
`

const MainTitle = styled(Heading)`
  font-size: 68px;
  line-height: 1.2;
  font-weight: 900;
  text-align: center;
`

const TextClip = styled.span`
  color: transparent;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  -webkit-background-clip: text;
  background-clip: text;
`

const SubTitle = styled.p`
  margin: 32px 0;
  font-size: 24px;
  text-align: center;
  word-break: keep-all;
`

export default Homepage