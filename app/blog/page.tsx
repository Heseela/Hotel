import BlogGrid from "@/components/BlogSection/BlogGrid";
import BlogHero from "@/components/BlogSection/BlogHero";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <>
    <BlogHero />
    <BlogGrid 
      posts={blogPosts}
      showFeatured={true}
      title="Latest Stories"
      subtitle="Explore our collection of articles, tips, and insights from the world of luxury hospitality"
    />
  </>
  )
}