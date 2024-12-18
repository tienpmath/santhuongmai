import { BlogCard } from "@/components/components_blog-card";
export const metadata = {
  title:
    "Bài viết mới về dịch vụ Mua bán rao vặt Đà Lạt, Đức Trọng, Bảo Lộc, Di Linh, Lâm Hà - Lâm Đồng",
  description:
    "Bài viết mới về Sàn thương mại điện tử, mua bán, rao vặt, đăng tin.☎️ 0944838788 SEO ✔️✔️ Dịch vụ Mua bán rao vặt Đà Lạt, Đức Trọng, Bảo Lộc, Di Linh, Lâm Hà - Lâm Đồng",
  openGraph: {
    title:
      "Bài viết mới về Sàn thương mại điện tử, mua bán, rao vặt, đăng tin.☎️ 0944838788 SEO ✔️✔️ Dịch vụ Mua bán rao vặt Đà Lạt, Đức Trọng, Bảo Lộc, Di Linh, Lâm Hà - Lâm Đồng",
    description:
      "Bài viết mới về Sàn thương mại điện tử, mua bán, rao vặt, đăng tin.☎️ 0944838788 SEO ✔️✔️ Dịch vụ Mua bán rao vặt Đà Lạt, Đức Trọng, Bảo Lộc, Di Linh, Lâm Hà - Lâm Đồng",
    images: "/public/logotiendev.png",
  },
};
export default async function BlogPage() {
  const res1 = await fetch(
    `https://admin.raovatlamdong.vn/api/cms-kit-public/blog-posts/default?SkipCount=1&MaxResultCount=7&Sorting=Id`,
    {
      method: "GET",
      next: { revalidate: 10000 },
    }
  );
  const dataBlog = await res1.json();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataBlog.items.map((item: any, index: any) => (
          <BlogCard data={item} key={index} />
        ))}
      </div>{" "}
    </div>
  );
}
