import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface BlogCardProps {
  title: string
  excerpt: string
  author: {
    name: string
    avatar: string
  }
  date: Date
  imageUrl: string
  slug: string
}

export function BlogCard({ title, excerpt, author, date, imageUrl, slug }: BlogCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Link href={`/blog/${slug}`} className="no-underline">
          <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">{title}</h2>
        </Link>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{author.name}</span>
        </div>
        <time className="text-sm text-muted-foreground">
          {format(date, 'MMM d, yyyy')}
        </time>
      </CardFooter>
    </Card>
  )
}

