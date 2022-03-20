import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import WebPButton from 'post-helpers/webp-button'
import SEO from '@/components/SEO/SEO'
import StandardLayout from '@/components/StandardLayout/StandardLayout'
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
    <Wrapper>
      <SEO title={title}></SEO>
      <Header>
        <Heading as="h1">{title}</Heading>
      </Header>
      <Body>
        <MDXRemote {...mdxSource} components={components} />
      </Body>
    </Wrapper>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map(filename => ({
    params: {
      post: filename.replace('.mdx', '').toString()
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { post } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', post + '.mdx'), 'utf-8')

  const { data, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      ...data,
      post,
      mdxSource
    }
  }
}

const Wrapper = styled.article`
  overflow-wrap: break-word;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
  @media (max-width: 640px) {
    text-align: left;
  }  
`

const Body = styled.div`
  max-width: 675px;
  margin: auto;
`

export default PostPage