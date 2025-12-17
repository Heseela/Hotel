// app/blog/[slug]/page.tsx
import SingleBlogPage from '@/components/BlogSection/SingleBlogPage'
import { blogPosts } from '@/data/blog'
import { notFound } from 'next/navigation'

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params
  
  const post = blogPosts.find(post => post.slug === slug)
  
  if (!post) {
    notFound()
  }

  return <SingleBlogPage post={post} />
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params
  const post = blogPosts.find(post => post.slug === slug)
  
  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${post.title} | Horizon Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author.name],
    },
  }
}