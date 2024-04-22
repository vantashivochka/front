import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Послуги Вантажівочка – Вивіз сміття 24/7",
  description: "Вивіз сміття по м.Київ та Київській області",
  openGraph: {
    title: "Вантажівочка - грузоперевезення та вивіз сміття",
    images: [
      {
        url: "/og-thumbnail.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Послуги Вантажівочка – Вивіз сміття 24/7",
    description: "Вивіз сміття по м.Київ та Київській області",
    images: ["/og-thumbnail.jpg"],
    creator: "@denvudd",
  },
  creator: "@denvudd",
  applicationName: "Vantazhivochka",
  metadataBase: new URL("https://www.vantazhivochka.com/garbage"),
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
