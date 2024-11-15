import Image from "next/image";

export default function Home() {
  return (
    <>
      <article className={`
        grid grid-cols-1 grid-rows-1
        place-content-center place-items-center
        gap-2
        border-t-2 border-b-2 border-gray-200
        p-8
     `}>
        <h2 className={`
          text-2xl font-semibold
          antialiased
        `}>
          QR Opiniones
        </h2>
        <p>Este QR envia a las opiniones de fimtrack en google.</p>
        <Image unoptimized
          src='/qr.png'
          alt='Margeting QR Opinion'
          width={1000}
          height={1000}
          className={`
            m-8 w-96 md:w-96 lg:w-192
          `}
        />
        <a 
        href='https://www.google.com/search?q=fimtrack&oq=fimtrack&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyFggBEC4YgwEYrwEYxwEYsQMYgAQYjgUyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgATSAQkzMjI4ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8#lrd=0x85d1f888f2e13173:0xfa82a0e096439d8e,3,,,,'
        className={`
          m-8 p-4 
          rounded-lg text-white bg-sky-600
          shadow-lg
        `}>
        Click aquí, para ir a opiniones.
        </a>
      </article>
    </>
  )
}
