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
        <Image 
          src='/qr.png'
          alt='Margeting QR Opinion'
          width={1000}
          height={1000}
          className={`
            w-96 md:w-96 lg:w-192
            shadow-xl
          `}
        />
      </article>
    </>
  )
}
