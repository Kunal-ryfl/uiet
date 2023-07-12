'use client'
 
import { usePathname } from 'next/navigation'
 
export default function ActiveLink() {
  const pathname = usePathname()
  return <div className=" w-full bg-red-500 mb-2 text-white uppercase  font-bold px-3 py-1 ">{pathname}</div>
}
