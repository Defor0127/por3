import Image from "next/image";

export const metadata = {
  title: "Works | illustory Van A",
};

const worksImages = [
  { id: 1, src: "/images/1.jpg" },
  { id: 2, src: "/images/2.jpg" },
  { id: 3, src: "/images/3.jpg" },
  { id: 4, src: "/images/4.jpg" },
  { id: 5, src: "/images/5.jpg" },
  { id: 6, src: "/images/6.jpg" },
  { id: 7, src: "/images/7.jpg" },
  { id: 8, src: "/images/8.jpg" },
  { id: 9, src: "/images/9.jpg" },
  { id: 10, src: "/images/10.jpg" },
  { id: 11, src: "/images/11.jpg" },
  { id: 12, src: "/images/12.jpg" },
  { id: 13, src: "/images/13.jpg" },
  { id: 14, src: "/images/14.jpg" },
  { id: 15, src: "/images/15.jpg" },
  { id: 16, src: "/images/16.jpg" },
  { id: 17, src: "/images/17.jpg" },
  { id: 18, src: "/images/18.jpg" },
  { id: 19, src: "/images/19.jpg" },
  { id: 20, src: "/images/20.jpg" },
];

export default function WorksPage() {
  return (
    <>
      <section className="pageTitle">
        <h1 style={{ fontFamily: "var(--font-serif)" }}>Works</h1>
      </section>

      {/* 작품 / 포트폴리오 섹션 */}
      <section className="worksSection">
        <div className="worksGrid">
          {worksImages.map((work) => (
            <figure key={work.id} className="worksItem">
              <div className="worksItem-imageWrapper">
                <Image
                  src={work.src}
                  alt={`일러스토리 반아 작업물 ${work.id}`}
                  width={800}
                  height={600}
                />
              </div>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
