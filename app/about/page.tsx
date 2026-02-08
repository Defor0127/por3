export const metadata = {
  title: "About NOVA | creative NOVA",
};

export default function AboutPage() {
  return (
    <>
      <section className="pageTitle">
        <h1 style={{ fontFamily: "var(--font-serif)" }}>About NOVA</h1>
      </section>
      <section className="aboutContent">
        <p>
          creative NOVA는 Generative AI art & design을 기반으로 한 크리에이티브 스튜디오입니다.
        </p>
        <p>
          사진, 픽토리얼, 캠페인 등 다양한 영역에서 감각적인 시각 작업을 선보입니다.
        </p>
      </section>
    </>
  );
}
