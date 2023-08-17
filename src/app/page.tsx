import { TopicList } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 gap-y-2">
      <TopicList />
    </main>
  )
}
