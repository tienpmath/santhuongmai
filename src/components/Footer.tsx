import React from "react";
import Logo from "./Logo";
import SocialsList1 from "./SocialsList1";
import { CustomLink } from "@/type/types";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Chính sách",
    menus: [
      { href: "/", label: "Mua bán Đà Lạt" },
      { href: "/", label: "Mua bán Lâm Đồng" },
      { href: "/", label: "Mua bán Bảo Lộc" },
      { href: "/", label: "Tin tức Đà Lạt" },
    ],
  },
  {
    id: "1",
    title: "Danh mục",
    menus: [
      { href: "/", label: "Mua bán Đà Lạt" },
      { href: "/", label: "Mua bán Lâm Đồng" },
      { href: "/", label: "Mua bán Bảo Lộc" },
      { href: "/", label: "Tin tức Đà Lạt" },
    ],
  },
  {
    id: "2",
    title: "Sản phẩm Vip",
    menus: [
      { href: "/", label: "Mua bán Đà Lạt" },
      { href: "/", label: "Mua bán Lâm Đồng" },
      { href: "/", label: "Mua bán Bảo Lộc" },
      { href: "/", label: "Tin tức Đà Lạt" },
    ],
  },
  {
    id: "4",
    title: "Xu hướng",
    menus: [
      { href: "/", label: "Mua bán Đà Lạt" },
      { href: "/", label: "Mua bán Lâm Đồng" },
      { href: "/", label: "Mua bán Bảo Lộc" },
      { href: "/", label: "Tin tức Đà Lạt" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-20 lg:pt-28 lg:pb-24 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
      <div className="container mt-5">
        <hr />
        <p className=" pt-5">
          @ Bản quyền thuộc raovatlamdong.vn - Liên hệ - Tiến Dev - 0944848788 -
          Đăng tin - Quảng cáo giá rẻ - Thiết kế website Đà Lạt
        </p>
      </div>
    </div>
  );
};

export default Footer;
