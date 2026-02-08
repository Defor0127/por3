import Image from "next/image";

const photographyImages = [
  { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", alt: "Photography 1", size: "default" as const },
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80", alt: "Photography 2", size: "tall" as const },
  { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80", alt: "Photography 3", size: "default" as const },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", alt: "Photography 4", size: "wide" as const },
  { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80", alt: "Photography 5", size: "default" as const },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80", alt: "Photography 6", size: "tall" as const },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", alt: "Photography 7", size: "default" as const },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", alt: "Photography 8", size: "default" as const },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80", alt: "Photography 9", size: "wide" as const },
];

export const metadata = {
  title: "Photography | creative NOVA",
};

export default function PhotographyPage() {
  return (
    <>
      <section className="pageTitle">
        <h1 style={{ fontFamily: "var(--font-serif)" }}>Photography</h1>
      </section>
      <section className="gallery">
        {photographyImages.map((item, i) => (
          <div key={i} className={`galleryItem ${item.size}`}>
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={item.size === "wide" ? 400 : item.size === "tall" ? 500 : 600}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            />
          </div>
        ))}
      </section>
    </>
  );
}
