import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@radix-ui/react-select";

const BlogSingleSlug = async (props: any) => {
  //console.log(props);
  const slug = props.params.slug;
  //console(slug);
  //console.log(id);
  const res = await fetch(
    `https://admin.raovatlamdong.vn/api/cms-kit-public/blog-posts/default/${slug}`,
    {
      method: "GET",
      next: { revalidate: 10000 },
    }
  );

  const data = await res.json();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    image: data.image,
    description: data.description,
  };
  return (
    <>
      <article className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              {/* <Avatar>
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar> */}
              <div>
                <p className="font-semibold">admin</p>
                <p className="text-sm text-muted-foreground"></p>
              </div>
            </div>
            {/* <div className="text-sm text-muted-foreground">
            <time dateTime={date.toISOString()}>{format(date, 'MMMM d, yyyy')}</time>
            <span className="mx-2">•</span>
            <span>{readingTime} min read</span>
          </div> */}
          </div>
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src={
                "https://admin.raovatlamdong.vn/uploads/host/my-file-container/" +
                data.image
              }
              alt={data.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="secondary">{data.title}</Badge>
          </div>
        </header>
        <Separator className="my-8" />
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </article>
    </>
  );
};

export default BlogSingleSlug;
