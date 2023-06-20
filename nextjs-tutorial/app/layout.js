import Link from 'next/link'
import "./layout.css"

export const metadata = {
  title: 'nextjs-tutorial',
  description: 'nextjs tutorial project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <nav>
        <ul>
          <li>
             <Link href="/">홈 페이지 이동</Link>
          </li>
          <li>
             <Link href="/post">포스팅 페이지 이동</Link>
          </li>
          <li>
            <Link href="/login">로그인 페이지 이동</Link>
          </li>
          <li>
            <Link href="/profile">프로필 페이지 이동</Link>
          </li>
        </ul>
      </nav>
        {children}
        </body>
    </html>
  )
}
