"use client"

import Image from "next/image"

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto">
      {/* First Section - Blue Welcome */}
      <section className="">
        <h1 className="">Welcome</h1>
      </section>

      {/* Second Section - Scrollable Content */}
      <section className="">
        <div className="">
          <div className="mb-16 space-y-8">
            <h2 className="text-4xl font-bold text-gray-800">Product Facts</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit similique itaque sapiente corrupti commodi quam aut, quibusdam asperiores voluptatibus necessitatibus nihil dignissimos officiis accusantium doloremque, cumque voluptatem nemo soluta! Sit.</p>

            <div className="grid gap-6">
              <div className="">
                <h3 className="text-xl font-semibold mb-2">Product feature</h3>
                <p>Incorporating the latest technology for optimal performance.</p>
              </div>

              <div className="">
                <h3 className="text-xl font-semibold mb-2">Product feature</h3>
                <p>Incorporating the latest technology for optimal performance.</p>
              </div>

              <div className="">
                <h3 className="text-xl font-semibold mb-2">Product feature</h3>
                <p>Incorporating the latest technology for optimal performance.</p>
              </div>

              <div className="">
                <h3 className="text-xl font-semibold mb-2">Product feature</h3>
                <p>Incorporating the latest technology for optimal performance.</p>
              </div>

              <div className="">
                <h3 className="text-xl font-semibold mb-2">Product feature</h3>
                <p>Incorporating the latest technology for optimal performance.</p>
              </div>

              <div className="">
                <h3 className="text-xl font-semibold mb-2">Product feature</h3>
                <p>Incorporating the latest technology for optimal performance.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl aspect-square">
              <Image src="/product.webp" alt="Product Image" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Red Thank You */}
      <section className="">
        <h1 className="">Thank You</h1>
      </section>
    </main>
  )
}
