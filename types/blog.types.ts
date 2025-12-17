export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    category: string;
    author: {
      name: string;
      avatar?: string;
    };
    publishedDate: string;
    readTime: string;
    featured: boolean;
    priority?: boolean;
  }
  
  export interface BlogCardProps {
    post: BlogPost;
    featured: boolean;
    priority?: boolean;
  }
  export interface BlogGridProps {
    posts: BlogPost[];
    showFeatured?: boolean;
    title?: string;
    subtitle?: string;
  }