//import Login from "@/components/Login";
import { BlogCard } from "@/components/components_blog-card";
import { BlogList } from "@/components/components_blog-list";
import ProductGridPage from "@/components/ProductGridPage";
import Image from "next/image";
export default async function Home() {
  const res = await fetch(
    "https://cloud.raovatlamdong.vn/api/app/product?SkipCount=1&MaxResultCount=100&Sorting=Id",
    {
      method: "GET",
      next: { tags: ["home-list-products"] },
    }
  );
  //const total_items = +(res.headers?.get("X-Total-Count") ?? 0)
  const data = await res.json();
  const res1 = await fetch(
    `https://admin.raovatlamdong.vn/api/cms-kit-public/blog-posts/default?SkipCount=1&MaxResultCount=7&Sorting=Id`,
    {
      method: "GET",
      next: { revalidate: 10000 },
    }
  );
  const dataBlog = await res1.json();
  // var result = data.items[0];
  return (
    <>
      {/* <main className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
        <div className="max-w-md w-full space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Welcome back
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Sign in to your account to continue.
          </p>
          <div>
            <pre>{JSON.stringify(session, null, 2)}</pre>
          </div>
          <Login />
        </div>
      </main> */}

      <div className="min-h-screen bg-gray-100">
        {/* <ModernUI products={products} /> */}
        <ProductGridPage data={data} />
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataBlog.items.map((item: any, index: any) => (
              <BlogCard data={item} key={index} />
            ))}
          </div>{" "}
        </div>
      </div>
    </>
  );
}
