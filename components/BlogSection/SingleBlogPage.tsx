'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/types/blog.types'
import { blogPosts } from '@/data/blog'
import { CalendarDays, Clock, User, ArrowLeft, Heart, MessageCircle } from 'lucide-react'
import BlogCard from './BlogCard'

interface SingleBlogPageProps {
  post: BlogPost
}

export default function SingleBlogPage({ post }: SingleBlogPageProps) {
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  return (
    <>
      <div className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>
        </div>
      </div>

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="mb-6 font-heading text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <div className="flex flex-col gap-4 border-b border-gray-200 pb-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  {post.author.avatar ? (
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-600">Author</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <span>{post.publishedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </div>

            <div className="relative mb-8 h-64 overflow-hidden rounded-xl md:h-[600px]">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <div className="mb-6 rounded-lg bg-gray-50 p-6">
                <p className="text-lg text-gray-700 italic">{post.excerpt}</p>
              </div>

              <p className="mb-6 text-gray-700">
                This comprehensive article explores the intricate details of luxury hospitality. 
                We delve into the philosophy behind exceptional guest experiences, the importance 
                of sustainable practices, and the future of luxury travel.
              </p>

              <h2 className="mb-4 text-2xl font-bold text-gray-900">Key Insights</h2>
              <p className="mb-6 text-gray-700">
                Modern luxury hospitality is evolving beyond traditional standards. Today's 
                discerning travelers seek authentic experiences, personal connection, and 
                meaningful engagement with local culture, all while enjoying world-class 
                amenities and service.
              </p>

              <h2 className="mb-4 text-2xl font-bold text-gray-900">Future Trends</h2>
              <p className="mb-6 text-gray-700">
                The future of luxury hospitality lies in personalization, sustainability, 
                and technology integration. From AI-powered concierge services to 
                carbon-neutral operations, the industry is transforming to meet new 
                expectations while maintaining its core values of excellence and comfort.
              </p>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <div className="border-t border-gray-100 bg-gray-50 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <h2 className="mb-2 font-heading text-2xl font-bold text-gray-900 md:text-3xl">
                Related Articles
              </h2>
              <p className="text-gray-600">More stories on {post.category}</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard 
                  key={relatedPost.slug} 
                  post={relatedPost} 
                  featured={false}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}