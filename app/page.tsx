import Hero from '@/components/Hero'
import Image from 'next/image'
import SearchBar from '@/components/SearchBar'
export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-2 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </main>
  )
}
