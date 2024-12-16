import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mua Bán Rao Vặt Đà Lạt Lâm Đồng",
    short_name:
      "Sàn thương mại điện tử, mua bán, rao vặt, đăng tin.☎️ 0944838788 SEO ✔️✔️ Dịch vụ Mua bán rao vặt Đà Lạt, Đức Trọng, Bảo Lộc, Di Linh, Lâm Hà - Lâm Đồng",
    description:
      "Sàn thương mại điện tử, mua bán, rao vặt, đăng tin.☎️ 0944838788 SEO ✔️✔️ Dịch vụ Mua bán rao vặt Đà Lạt, Đức Trọng, Bảo Lộc, Di Linh, Lâm Hà - Lâm Đồng",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/public/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
