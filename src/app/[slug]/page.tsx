import React from "react";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Badge } from "lucide-react";
import { format } from "path";
import { title } from "process";
import Image from "next/image";
interface BlogDetailProps {
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  date: Date;
  imageUrl: string;
  tags: string[];
  readingTime: number;
}
async function getData() {
  const res = await fetch("https://admin.raovatlamdong.vn/api/app/product", {
    next: { tags: ["collection"] },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const product = await fetch(
    `https://admin.raovatlamdong.vn/api/app/product/product?slug=${slug}`,
    { next: { revalidate: 10000 } }
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        "https://https://admin.raovatlamdong.vn/uploads/host/my-file-container/" +
          product.image,
        ...previousImages,
      ],
    },
  };
}

const ProductDetailSlug = async (props: Props) => {
  //console.log(props);
  const slug = (await props.params).slug;
  //console(slug);
  //console.log(id);
  const res = await fetch(
    `https://admin.raovatlamdong.vn/api/app/product/product?slug=${slug}`,
    {
      method: "GET",
      next: { revalidate: 10000 },
    }
  );

  const data = await res.json();
  const datap = getData();
  // console.log(data);
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
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
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
              alt={data.name}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="secondary">tag</Badge>
          </div>
        </header>
        <Separator className="my-8" />
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </article>
    </>
  );
};

export default ProductDetailSlug;