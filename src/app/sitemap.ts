import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/content/projects";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dhanush.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.meta.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectUrls = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectUrls,
    ...blogUrls,
  ];
}
