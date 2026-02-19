const heroImages = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  src: `/images/${index + 1}.jpg`,
}));

export default function HomePage() {
  return (
    <>
      {/* 메인 히어로 영역 (작업물이 뒤에 희미하게 보이는 영역) */}
      <section className="hero">
        <div className="heroBackground">
          {heroImages.map((img) => (
            <div key={img.id} className="heroBgItem">
              <img src={img.src} alt="" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="heroContent">
          <p className="heroTagline" style={{ fontFamily: "var(--font-serif)" }}>
            illustory Van A
          </p>
          <p className="heroSub">우리가 함께 그려가는 여러 날의 문장들</p>
        </div>
      </section>
    </>
  );
}
