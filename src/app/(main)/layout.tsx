import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Послуги Вантажівочка – Вантажні послуги 24/7",
  description: "Вантажні перевезення по м.Київ та Київській області",
  openGraph: {
    title: "Вантажівочка - грузоперевезення по м.Київ та Київській області",
    images: [
      {
        url: "/og-thumbnail.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Послуги Вантажівочка – Вантажні послуги 24/7",
    description: "Вантажні перевезення по м.Київ та Київській області",
    images: ["/og-thumbnail.jpg"],
    creator: "@denvudd",
  },
  creator: "@denvudd",
  applicationName: "Vantazhivochka",
  metadataBase: new URL("https://www.vantazhivochka.com/"),
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">{children}</div>;
}
