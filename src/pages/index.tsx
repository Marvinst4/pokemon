import Link from "next/link";

export default function Home() {
  return (
      <div>
          <h1 className='text-center mb-4'>Attrappez-les tous</h1>
          <Link href="/bulbasaur" className="link-light">Bulbasaur</Link>
      </div>
  )
}
