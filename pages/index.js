import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styled from 'styled-components'
import SEO from '@/components/SEO/SEO'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import ContentPreview from '@/components/ContentPreview/ContentPreview'

const Homepage = ({ posts }) => {
  return (
    <>
      <SEO />
      <Header></Header>
      <Main>
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

export default Homepage