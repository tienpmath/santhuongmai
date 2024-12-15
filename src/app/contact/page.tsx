import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import React, { FC } from "react";

const info = [
  {
    title: "🗺 Địa chỉ",
    desc: "01 Phù Đổng Thiên Vương, phường 8, thành phố Đà Lạt, Lâm Đồng",
  },
  {
    title: "💌 EMAIL",
    desc: "tiendev88@gmail.com",
  },
  {
    title: "☎ PHONE",
    desc: "0944838788",
  },
];

const PageContact = ({}) => {
  return (
    <div className={`nc-PageContact overflow-hidden`}>
      <div className="">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 SOCIALS - Zalo 0944848788
                </h3>
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>Họ và tên</Label>

                  <Input
                    placeholder="Nguyễn Văn X"
                    type="text"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Email địa chỉ</Label>

                  <Input type="email" placeholder="...." className="mt-1" />
                </label>
                <label className="block">
                  <Label>Nội dung</Label>

                  <Textarea className="mt-1" rows={6} />
                </label>
                <div>
                  <Button type="submit">Gửi</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContact;
