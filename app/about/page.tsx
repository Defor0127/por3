export const metadata = {
  title: "About | illustory Van A",
};

export default function AboutPage() {
  return (
    <>
      <section className="pageTitle">
        <h1 style={{ fontFamily: "var(--font-serif)" }}>About</h1>
      </section>
      <section className="aboutContent">
        <p className="profileName">일러스토리 반아 (illustory Van A)</p>
        <p className="profileTagline">마음과 마음을 잇는 이야기 일러스토리레이터</p>
        <p className="profileDesc">
          단어와 문장들에서 느껴지는 감정들을 그림으로 옮기며,
          일상 속의 작은 순간을 조용한 이야기로 기록합니다.
        </p>
      </section>
    </>
  );
}
