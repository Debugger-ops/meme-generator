export const metadata = {
  title: 'Next.js Meme Generator',
  description: 'Create and share your own memes with this easy-to-use tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
