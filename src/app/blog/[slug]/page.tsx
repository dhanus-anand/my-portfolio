import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.meta.title} | Dhanus Kanth Anand`,
    description: post.meta.excerpt,
  };
}

const rehypePrettyCodeOptions = {
  theme: "github-dark",
  keepBackground: true,
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <article>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              {post.meta.title}
            </h1>
            <p className="text-muted-foreground text-sm mb-8">
              {post.meta.date}
              {post.meta.readTime && ` · ${post.meta.readTime}`}
            </p>
            <div className="prose prose-invert prose-lg max-w-none [&_pre]:rounded-lg [&_pre]:bg-[#0d1117] [&_pre]:p-4 [&_code]:rounded [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    rehypePlugins: [
                      [rehypePrettyCode, rehypePrettyCodeOptions],
                    ],
                  },
                }}
              />
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
