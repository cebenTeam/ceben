import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import WebPButton from 'post-helpers/webp-button'
import SEO from '@/components/SEO/SEO'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Heading from '@/components/Heading/Heading'
import Paragraph from '@/components/Paragraph/Paragraph'

const components = {
  Heading,
  Paragraph,
  SyntaxHighlighter
}

const PostPage = ({
  title,
  date,
  mdxSource
}) => {
  return (
    <>
      <SEO title={title}></SEO>
      {/* <Header></Header> */}
      <Main>
        <PostWrapper>
          <PostHeader>
            <Heading as="h1">{title}</Heading>
          </PostHeader>
          <PostBody>
            <MDXRemote {...mdxSource} components={components} />
          </PostBody>
        </PostWrapper>
      </Main>
    </>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')

  const { data, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      ...data,
      slug,
      mdxSource
    }
  }
}

const PostWrapper = styled.div`
  overflow-wrap: break-word;
`

const PostHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
  @media (max-width: 640px) {
    text-align: left;
  }  
`

const PostBody = styled.div`
  max-width: 675px;
  margin: auto;
`

export default PostPage