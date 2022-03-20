import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styled from 'styled-components'
import SEO from '@/components/SEO/SEO'
import StandardLayout from '@/components/StandardLayout/StandardLayout'
import ContentPreview from '@/components/ContentPreview/ContentPreview'

const Homepage = ({ posts }) => {
  return (
    <Wrapper>
      <SEO />
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

export default Homepage