import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css'



export const metadata ={
  title: 'Car Hub',
  description: "Discover world's best car showcase application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative' suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
