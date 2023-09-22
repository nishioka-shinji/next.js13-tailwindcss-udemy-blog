import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ArticleList() {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className='hover:opacity-75'>
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            width={1280}
            height={300} alt="nextjs" /> 
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
          <Link href="#" className='text-blue-700 pb-4 font-bold'>Technology</Link>
          <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>Next.jsの勉強中</Link>
          <p className='text-sm pb-3 text-slate-900'>Published on 2023/07/15</p>
          <Link href="#" className='text-slate-900 pb-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sequi obcaecati molestias odit magnam explicabo molestiae dolorem quia, rem doloremque ex ut exercitationem dolores est ratione itaque, possimus autem sapiente.
          </Link>
          <Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
        </div>
      </article>

      <article className="shadow my-4 flex flex-col">
        <Link href="#" className='hover:opacity-75'>
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
            width={1280}
            height={300} alt="nextjs" /> 
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
          <Link href="#" className='text-blue-700 pb-4 font-bold'>Technology</Link>
          <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>Next.jsの勉強中</Link>
          <p className='text-sm pb-3 text-slate-900'>Published on 2023/07/15</p>
          <Link href="#" className='text-slate-900 pb-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sequi obcaecati molestias odit magnam explicabo molestiae dolorem quia, rem doloremque ex ut exercitationem dolores est ratione itaque, possimus autem sapiente.
          </Link>
          <Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList