import './globals.css'
import Tab from '@/components/tab'

export default function Home() {
  return (
    <div className="figure-m-14 grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 bg-white bg-yellow-50 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      Hello Zoo Client
      <Tab />
    </div>
  )
}
