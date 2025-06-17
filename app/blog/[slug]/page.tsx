import BlogContent from "@/components/blogcontent";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  return <BlogContent slug={params.slug} />;
}
