import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BlogCardProps {
  blogId: string;
  title: string;
  shortDescription: string;
  content: string;
  image: string;
  slug: string;
}

export function BlogCard(data: any, key: any) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Link href={`/blog/${data.data.slug}`}>
            <Image
              src={
                "https://admin.raovatlamdong.vn/uploads/host/my-file-container/" +
                data.data.coverImageMediaId
              }
              alt={data.data.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Link href={`/blog/${data.data.slug}`} className="no-underline">
          <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">
            {data.data.title}
          </h2>
        </Link>
        <p className="text-muted-foreground mb-4">
          {data.data.shortDescription}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* <Avatar>
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar> */}
          {/* <span className="text-sm font-medium">{author.name}</span> */}
        </div>
        <time className="text-sm text-muted-foreground">
          {/* {format(date, 'MMM d, yyyy')} */}
        </time>
      </CardFooter>
    </Card>
  );
}
