import SingleRoom from '@/components/RoomSection/SingleRoom'
import { initialRooms } from '@/data/rooms'
import { notFound } from 'next/navigation'

interface RoomPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { slug } = await params
  const room = initialRooms.find(room => room.slug === slug)
  
  if (!room) {
    notFound()
  }

  return <SingleRoom room={room} />
}

export async function generateStaticParams() {
  return initialRooms.map((room) => ({
    slug: room.slug,
  }))
}

export async function generateMetadata({ params }: RoomPageProps) {
  const { slug } = await params
  const room = initialRooms.find(room => room.slug === slug)
  
  if (!room) {
    return {
      title: 'Room Not Found',
    }
  }

  return {
    title: `${room.name} | Horizon Hotels`,
    description: room.description,
    openGraph: {
      title: room.name,
      description: room.description,
      images: room.images,
      type: 'article',
    },
  }
}