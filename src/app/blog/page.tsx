import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAllPosts } from "@/lib/blog";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Blog | Dhanus Kanth Anand",
  description:
    "Technical deep dives on distributed systems, ML in production, and full-stack architecture.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent mb-4">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            Technical deep dives and learnings.
          </p>

          {posts.length === 0 ? (
            <Card className="p-12 text-center" hover={false}>
              <p className="text-muted-foreground text-lg">
                Blog launching soon — check back for technical deep dives.
              </p>
              <Link
                href="/"
                className="inline-block mt-6 text-accent-blue hover:underline font-medium"
              >
                Back to home →
              </Link>
            </Card>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="p-6 h-full flex flex-col">
                    <h2 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                      {post.meta.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                      {post.meta.excerpt}
                    </p>
                    <p className="text-xs text-muted-foreground mt-3">
                      {post.meta.date}
                      {post.meta.readTime && ` · ${post.meta.readTime}`}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
