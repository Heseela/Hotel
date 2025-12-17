import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Clock, User } from 'lucide-react'
import { BlogCardProps } from '@/types/blog.types'

export default function BlogCard({ post, featured = false, priority = false }: BlogCardProps) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative h-64 lg:h-96">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={priority}
              />
              <div className="absolute left-4 top-4 z-10">
                <span className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                  Featured
                </span>
              </div>
              <div className="absolute right-4 top-4 z-10">
                <span className="inline-flex items-center rounded-full bg-secondary/90 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col p-8 lg:p-10">
              <div className="mb-6">
                <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  {post.category}
                </span>
              </div>

              <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 transition-colors group-hover:text-primary lg:text-4xl">
                {post.title}
              </h2>

              <p className="mb-8 text-lg text-gray-600">{post.excerpt}</p>

              <div className="mt-auto space-y-4 border-t border-gray-100 pt-6">
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
                    <p className="font-semibold text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{post.publishedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </article>
    )
  }
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
          
          <div className="absolute left-4 top-4 z-10">
            <span className="inline-flex items-center rounded-full bg-secondary/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              {post.category}
            </span>
          </div>
          
          {post.featured && (
            <div className="absolute right-4 top-4 z-10">
              <span className="inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white">
                Featured
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="mb-4 flex items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />
              <span>{post.publishedDate}</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-gray-300"></span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h3 className="mb-3 font-heading text-xl font-bold text-gray-900 transition-colors group-hover:text-primary">
            {post.title}
          </h3>

          <p className="mb-6 text-gray-600 line-clamp-2">{post.excerpt}</p>

          <div className="flex items-center gap-3">
            {post.author.avatar ? (
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
            )}
            <span className="text-sm font-medium text-gray-900">{post.author.name}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}