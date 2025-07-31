import BlogDetailsSidebar from "@/components/BlogDetailsSidebar";
import GlobalHeroSection from "@/components/GlobalHeroSection";
import GetAllBlogPost from "@/lib/GetAllBlogPost";
import { BlogPostData, PageProps } from "@/lib/types";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: PageProps) {
  const blogPostData: BlogPostData = await GetAllBlogPost();

  const blogDetails = blogPostData?.data?.find(
    (blogs) => blogs.slug === params.slug
  );

  if (!blogDetails) {
    return {
      title: "Blog not found",
      description: "No blog post available.",
    };
  }

  let description = parse(blogDetails?.body);
  let descriptionText = "Blog post";

  // Safely extract description text
  if (description && Array.isArray(description) && description.length > 0) {
    const firstElement = description[0];
    if (
      firstElement &&
      typeof firstElement === "object" &&
      "props" in firstElement
    ) {
      const children = firstElement.props?.children;
      if (typeof children === "string") {
        descriptionText = children;
      } else if (
        children &&
        typeof children === "object" &&
        "props" in children
      ) {
        descriptionText = children.props?.children || "Blog post";
      } else if (Array.isArray(children) && children.length > 0) {
        descriptionText = children[0]?.props?.children || "Blog post";
      }
    }
  }

  return {
    title: blogDetails?.title,
    description: descriptionText,
    openGraph: {
      title: blogDetails?.title,
      description: descriptionText,
      images: blogDetails?.featuredImage?.image?.url,
      url: `https://www.teamsabbirnasir.com/blogs/${blogDetails?.slug}`,
      type: "article",
      site_name: "teamsabbirnasir.com",
    },
  };
}

const page = async ({ params }: PageProps) => {
  const blogPostData: BlogPostData = await GetAllBlogPost();

  const blogDetails = blogPostData?.data?.filter(
    (blogs) => blogs.slug === params.slug
  );

  const postDate = (date: string): string => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  if (!blogDetails || blogDetails.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="mb-4">Blog Post Not Found</h1>
          <p className="mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blogs"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      <GlobalHeroSection
        titleH1={`Blogs Details`}
        titleH2={"Blog"}
        slug={"blog"}
        image="/images/about-us/blog.jpg"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {blogDetails?.map((blog, index) => (
              <article key={blog.id} className="space-y-6">
                {/* Header */}
                <header className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="italic">Published</span>
                    <time className="italic">{postDate(blog?.createdAt)}</time>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight">
                    {blog?.title}
                  </h1>
                </header>

                {/* Featured Image */}
                {blog?.featuredImage?.image?.url && (
                  <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-6 mt-4">
                    <Image
                      src={blog.featuredImage.image.url}
                      alt={blog.featuredImage.altText || blog.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}

                {/* Blog Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-6 leading-relaxed">
                    {parse(blog?.body)}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="mb-10">
              <BlogDetailsSidebar />
            </div>
            <div className="bg-white rounded-lg p-6 h-fit sticky top-8">
              <h2 className="text-2xl font-semibold text-[#1F1F1F] mb-6 pb-4 border-b-2 border-primary">
                Latest News
              </h2>

              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {blogPostData?.data
                  ?.filter(
                    (blog) =>
                      blog.published === true && blog.slug !== params.slug
                  )
                  ?.slice(0, 5)
                  ?.map((blog, index) => (
                    <Link
                      key={blog.id}
                      href={`/blogs/${blog.slug}`}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-foreground transition-colors group"
                    >
                      {blog.featuredImage?.image?.url && (
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={blog.featuredImage.image.url}
                            alt={blog.featuredImage.altText || blog.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-[#1F1F1F] line-clamp-2 transition-colors">
                          {blog.title}
                        </h3>
                        <time className="text-xs text-gray-500 mt-1 block">
                          {postDate(blog.createdAt)}
                        </time>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default page;
