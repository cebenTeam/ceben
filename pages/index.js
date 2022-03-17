import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styled from 'styled-components'
import SEO from '@/components/SEO/SEO'
import Header from '@/components/Header/Header'
import Inner from '@/components/Inner/Inner'
import ContentPreview from '@/components/ContentPreview/ContentPreview'

const Homepage = ({ posts }) => {
  return (
    <>
      <SEO />
      <Header></Header>
      <Main as="main">
        {posts.map(({
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
        ))}
      </Main>
    </>
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