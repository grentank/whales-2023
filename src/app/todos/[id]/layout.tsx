import Link from "next/link";

export default function layout({children}:{children: React.ReactNode}) {
  return (
    <>
    <div><Link href="/todos">Back</Link></div>
    <div>{children}</div>
    </>
  )
}
