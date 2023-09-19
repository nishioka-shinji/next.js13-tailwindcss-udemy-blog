import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ArticleList() {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            width={1280}
            height={300} alt="nextjs" /> 
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Next.jsの勉強中</Link>
          <p>By shincode, Published on 2023/07/15</p>
          <Link href="#">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sequi obcaecati molestias odit magnam explicabo molestiae dolorem quia, rem doloremque ex ut exercitationem dolores est ratione itaque, possimus autem sapiente.
          </Link>
        </div>
        <Link href="#">続きを読む</Link>
      </article>
    </div>
  )
}

export default ArticleList