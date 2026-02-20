import slideImage7 from "../assets/images/Home/slide7.png";
import iconRight from "../assets/images/Home/icon-right.svg";

const blogCards = [
  { date: "2026 . 08 . 03", dishName: "淺焙與深焙：哪一款最能安撫你午後的疲憊？" },
  { date: "2026 . 08 . 03", dishName: "不再失眠：適合晚間飲用的低咖啡因茶選" },
  { date: "2026 . 08 . 03", dishName: "淺焙與深焙：哪一款最能安撫你午後的疲憊？" },
  { date: "2026 . 08 . 03", dishName: "不再失眠：適合晚間飲用的低咖啡因茶選" },
];

export default function Sec2() {
  return (
    <section className="sec2">
      <div className="sec2-content">
        <div className="sec2-left">
          <img src={slideImage7} alt="茶園風景" />
          <div className="sec2-title">
            <h3 className="sec2-text">懂茶，是為了更懂生活</h3>
            <button className="sec2-icon-button" type="button">
              <img src={iconRight} alt="arrow-right" />
            </button>
          </div>
        </div>
        <div className="sec2-right">
          <div className="sec2-right-title">
            <div className="sec2-right-top">
              <p className="sec2-right-subtitle">讀茶知識</p>
              <h2 className="sec2-right-heading">Knowledge</h2>
            </div>
            <div className="sec2-right-desc">
              <p>我們為您準備了幾篇風味指南</p>
              <p>讓選茶變得直覺且優雅</p>
            </div>
          </div>
          <div className="sec2-list">
            {blogCards.map((card, index) => (
              <div className="blog-card" key={index}>
                <p className="blog-date">{card.date}</p>
                <p className="blog-dish-name">{card.dishName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
