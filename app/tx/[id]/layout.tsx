import type { Metadata, ResolvingMetadata } from 'next'

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id


  // ANG PARAMS ID MAG INDICATE UNSA NA DATA TREE

//   const data = await fetch('https://cuddly-space-robot-rj7759vq963p46x-3000.app.github.dev/data.json').then((res) => res.json())

// console.log(data)
 
  // fetch data
  const product = await fetch(`https://cuddly-space-robot-rj7759vq963p46x-3000.app.github.dev/${id}.json`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.collection,
    description: product.nft,
    icons: {
        icon: "https://opensea.io/static/images/favicon/32x32.png", apple: "https://opensea.io/static/images/favicon/32x32.png" 
    }
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}
 
export async function Page({ params, searchParams }: Props 
    
) {
        // return (
        //     <html lang="en">
        //     <body>{children}</body>
        //   </html>
        // )
}

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    );
  }
  