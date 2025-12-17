import { BlogGridProps } from '@/types/blog.types'
import BlogCard from './BlogCard'

export default function BlogGrid({
    posts,
    showFeatured = true,
    title = "Latest Articles",
    subtitle = "Discover stories, insights and expert advice",
}: BlogGridProps) {

    const featuredPosts = showFeatured ? posts.filter(post => post.featured) : []
    const regularPosts = showFeatured ? posts.filter(post => !post.featured) : posts

    return (
        <div className="py-12 md:py-20 container mx-auto px-4">
            <div className="mb-12 text-center">
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    HORIZON JOURNAL
                </span>
                <h2 className="mb-4 font-heading text-4xl font-bold text-gray-900 md:text-5xl">
                    {title}
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                    {subtitle}
                </p>
            </div>

            {featuredPosts.length > 0 && (
                <div className="mb-16 space-y-8">
                    {featuredPosts.length >= 1 && (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {featuredPosts.map((post) => (
                                <BlogCard key={post.id} post={post} featured={false} priority={true} />
                            ))}
                            {regularPosts.map((post, index) => (
                                <BlogCard
                                    key={post.id}
                                    post={post}
                                    featured={false}
                                    priority={index < 3}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
            {posts.length === 0 && (
                <div className="py-20 text-center">
                    <h3 className="mb-4 text-2xl font-semibold text-gray-900">No articles found</h3>
                    <p className="text-gray-600">Check back later for new content</p>
                </div>
            )}
        </div>
    )
}