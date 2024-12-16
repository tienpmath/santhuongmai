import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const slugify = require("slugify");

export default function DetailComponent(prop: any) {
  const data = prop.datap.items;
  const link = (url: string) => {
    return slugify(url);
  };
  const Img = (img: any) => {
    let array4 = [""];
    if (img) {
      array4 = img.split(",", 5);
    }

    return (
      <>
        <Image
          src={"https://file.raovatlamdong.vn/images/" + array4[0]}
          alt="rao vặt"
          width={600}
          height={900}
          className="aspect-[2/3] object-cover border w-full rounded-lg overflow-hidden"
        />{" "}
        *
      </>
    );
  };
  const ImgThumb = (img: any) => {
    let array4 = [""];
    if (img) {
      array4 = img.split(",", 5);
    }

    return (
      <>
        <Image
          src={"https://file.raovatlamdong.vn/images/" + array4[0]}
          alt="rao vặt đà lạt"
          width={500}
          height={400}
          className="object-cover w-full h-64"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        *
      </>
    );
  };
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
          <div className="grid gap-4">
            {Img(prop.data.image ? prop.data.image : "unnamed.png")}
            {/* <Image
              src={
                "https://cloud.raovatlamdong.vn/uploads/host/my-file-container/" +
                prop.data.image
              }
              alt={prop.data.name}
              width={600}
              height={900}
              className="aspect-[2/3] object-cover border w-full rounded-lg overflow-hidden"
            /> */}
          </div>
          <div className="grid gap-4 md:gap-10">
            <div className="grid gap-2">
              <h1 className="text-3xl font-bold">{prop.data.name}</h1>
              <p className="text-muted-foreground">
                60% combed ringspun cotton/40% polyester jersey tee.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <div className="text-4xl font-bold">{prop.data.price} VNĐ</div>
            </div>
            <form className="grid gap-4">
              <Button size="lg">Liên hệ: {prop.data.phone}</Button>
            </form>
          </div>
        </section>
        <section className="grid gap-6 max-w-6xl px-4 mx-auto py-6">
          <div className="grid gap-4 text-sm leading-loose">
            <p>
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: prop.data.description }}
              />
            </p>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Sản phẩm mới</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.map((item: any, index: any) => (
                <div
                  key={index}
                  className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2"
                >
                  <Link
                    href={"/" + link(item.name) + "-" + item.id}
                    className="absolute inset-0 z-10"
                    prefetch={false}
                  >
                    <span className="sr-only">View</span>
                  </Link>
                  {ImgThumb(item.image ? item.image : "unnamed.png")}
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.name}</p>
                    <h4 className="text-lg font-semibold md:text-xl">
                      {item.price} VNĐ
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
