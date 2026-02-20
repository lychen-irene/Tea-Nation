import slideImage4 from "../assets/images/Home/slide4.png";
import slideImage5 from "../assets/images/Home/slide5.png";
import slideImage6 from "../assets/images/Home/slide6.png";
import iconRight from "../assets/images/Home/icon-right.svg";

const cards = [
  {
    title: "品茶",
    text: "探尋山林的呼吸，品味最純粹的風土。讓每一口茶湯的回甘，撫平日常的焦慮與繁忙。",
    image: slideImage4,
  },
  {
    title: "禮盒",
    text: "將生活的美好妥善包裝。簡約不張揚的設計，讓您的祝福隨茶香溫暖傳遞。",
    image: slideImage5,
  },
  {
    title: "茶具",
    text: "觸摸職人手心的溫度。好的器物不僅是工具，更是讓茶湯釋放深層靈魂的關鍵。",
    image: slideImage6,
  },
];

export default function Sec1() {
  return (
    <section className="sec1">
      <div className="sec1-title">
        <div className="sec1-top">
          <p className="sec1-subtitle">探索茶香</p>
          <h2 className="sec1-heading">Explore</h2>
        </div>
        <div className="sec1-desc">
          <p>以精品級工藝，重新定義台灣茶的新高度</p>
          <p>探索茶香的風味旅程</p>
        </div>
      </div>

      <div className="sec1-content">
        {cards.map((card, index) => (
          <div className="sec1-card" key={index}>
            <div className="sec1-card-left">
              <h3 className="sec1-card-title">{card.title}</h3>
            </div>
            <div className="sec1-card-right">
              <div className="sec1-card-img">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="sec1-card-footer">
                <p className="sec1-card-text">{card.text}</p>
                <button className="sec1-icon-button" type="button">
                  <img src={iconRight} alt="arrow-right" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
