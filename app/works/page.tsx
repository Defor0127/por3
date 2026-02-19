import Image from "next/image";

export const metadata = {
  title: "Works | illustory Van A",
};

const worksImages = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  src: `/images/${index + 1}.jpg`,
}));

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
