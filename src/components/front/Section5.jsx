import sec5Card1 from "../../assets/images/Home/sec5Card1.png";
import sec5Card2 from "../../assets/images/Home/sec5Card2.jpg";
import sec5Card3 from "../../assets/images/Home/sec5Card3.jpg";

const promiseCards = [
  {
    title: "本質的追求",
    img: sec5Card1,
    reviewTitle: "香氣乾淨、尾韻很漂亮",
    reviewText: "第一次喝就覺得選品非常用心，茶湯圓潤順口，是我會回購的品牌。",
    name: "— Lin",
  },
  {
    title: "不將就的款待",
    img: sec5Card2,
    reviewTitle: "包裝質感好，送禮也適合",
    reviewText: "精品級的設計，朋友收到都說很喜歡。",
    name: "— Mei",
  },
  {
    title: "真誠・本心不負",
    img: sec5Card3,
    reviewTitle: "簡單沖泡，就很好喝",
    reviewText: "網站有教沖泡方法，很貼心。茶品質真的感覺得到。",
    name: "— Wei",
  },
];

export default function Sec5() {
  return (
    <section className="sec5">
      <div className="sec5-content">
        <div className="sec5-title">
          <div className="sec5-top">
            <p className="sec5-subtitle">品牌承諾</p>
            <h2 className="sec5-heading">Promise</h2>
          </div>
          <div className="sec5-down">
            <p className="sec5-desc">追求原料本質，款待每一份味蕾</p>
            <p className="sec5-desc">舒展的茶葉，是我們對誠信最直白的告白</p>
          </div>
        </div>
        {/* Desktop: 三欄並排 */}
        <div className="sec5-right">
          {promiseCards.map((card, index) => (
            <div className="promise-card" key={index}>
              <p className="promise-card-title">{card.title}</p>
              <div className="promise-body">
                <img className="promise-img" src={card.img} alt={card.title} />
                <div className="promise-body2">
                  <h4 className="promise-body2-title">{card.reviewTitle}</h4>
                  <p className="promise-body2-subtitle">{card.reviewText}</p>
                  <p className="promise-body2-name">{card.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: 輪播 */}
        <div
          id="sec5Carousel"
          className="carousel slide sec5-carousel"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-inner">
            {promiseCards.map((card, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="promise-card">
                  <p className="promise-card-title">{card.title}</p>
                  <div className="promise-body">
                    <img className="promise-img" src={card.img} alt={card.title} />
                    <div className="promise-body2">
                      <h4 className="promise-body2-title">{card.reviewTitle}</h4>
                      <p className="promise-body2-subtitle">{card.reviewText}</p>
                      <p className="promise-body2-name">{card.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
