import Image from "next/image";

const mockUrls = [
"https://ds56rgt372.ufs.sh/f/mZHBdN2dQRYqjwd2vMEv0PVlH9wOyYLi7Ac8qfTeQW6t3nuB",
"https://ds56rgt372.ufs.sh/f/mZHBdN2dQRYqZJirqEwoYSNGVDUbgMEfmWZ5274nh3TzvyjQ",
"https://ds56rgt372.ufs.sh/f/mZHBdN2dQRYqMTWup4RQtIPX6DRzkxqAUwWFSmY3B9gpdCJ2"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
