import latestnews from "../assets/belly.png"
import latestnews2 from "../assets/brown girl.png"
import latestnews3 from "../assets/smilygirl.png"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function LatestNewsSection() {
  const posts = [
    {
      id: 1,
      image: latestnews,
      category: "TREATMENTS & PROCEDURES",
      title: "Liposuction: what it is, surgery, recovery & results",
      link: "#",
    },
    {
      id: 2,
      image: latestnews2,
      category: "INSPIRATION",
      title: "Sculpting beauty: the art of face and body contouring",
      link: "#",
    },
    {
      id: 3,
      image: latestnews3,
      category: "NEWS",
      title: "Best skin treatments for tight and glowing skin",
      link: "#",
    },
  ]

  return (
    <section className=" mt-60 w-full bg-white py-24 px-6 md:px-12 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text text-3xl font- text-black tracking-wide mb-12">
          LATEST NEWS & OFFER
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="border-0 shadow-none text-left rounded-2xl overflow-hidden bg-white"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                {/* Overlay for better contrast */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

                {/* Category Label */}
                <span className="absolute top-4 left-4 bg-[#b29a60] text-white text-[11px] font-semibold tracking-widest px-3 py-1 z-10">
                  {post.category}
                </span>
              </div>

              <CardContent className="pt-6 pb-8 bg-white">
                <h3 className="text-lg font-medium text-gray-900 mb-3 leading-snug">
                  {post.title}
                </h3>
                <a
                  href={post.link}
                  className="text-[13px] font-medium text-gray-600 tracking-wide hover:text-gray-900 transition"
                >
                  READ MORE
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          className=" border-3  outline-[#B49049] bg-white  text-[#B49049] hover:text-white hover:bg-[#B49049] rounded-none px-8 py-5 text-xs tracking-[0.2em] uppercase"
        >
          VIEW MORE POSTS
        </Button>
      </div>
    </section>
  )
}
