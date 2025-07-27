import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://ds56rgt372.ufs.sh/f/mZHBdN2dQRYqjwd2vMEv0PVlH9wOyYLi7Ac8qfTeQW6t3nuB",
  "https://ds56rgt372.ufs.sh/f/mZHBdN2dQRYqZJirqEwoYSNGVDUbgMEfmWZ5274nh3TzvyjQ",
  "https://ds56rgt372.ufs.sh/f/mZHBdN2dQRYqMTWup4RQtIPX6DRzkxqAUwWFSmY3B9gpdCJ2"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()
  console.log(posts)

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
