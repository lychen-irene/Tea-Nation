import slideImage1 from "../assets/images/Home/slide1.png";
import slideImage2 from "../assets/images/Home/slide2.png";
import slideImage3 from "../assets/images/Home/slide3.png";
import iconRight from "../assets/images/Home/icon-right.svg";

const slides = [
  {
    title: "找回日常的一杯好茶",
    subtitle:
      "一盞茶\n足以重新整理繁亂心緒。\n各具風格的山林茶選\n讓最自然的回甘\n陪伴您度過每個犒賞自己的時刻。",
    bgImage: slideImage1,
    bnName:"開始選茶",
    fontColor: "#404040",
  },
  {
    title: "一杯好茶，更好的器具",
    subtitle:
      "好的器物\n是釋放茶香的關鍵。\n精選職人手作茶具\n透過溫潤質地細膩\n鎖住每一泡茶湯的層次與靈魂。",
    bgImage: slideImage2,
    bnName:"逛逛茶具",
    fontColor: "#FFFFFF",
  },
  {
    title: "泡一杯，留住生活優雅",
    subtitle:
      "不必等待特別的日子\n今天的你\n值得用最好的茶香加冕。\n讓泡茶的儀式感\n成為生活裡最優雅的留白。",
    bgImage: slideImage3,
    bnName:"探索禮盒",
    fontColor: "#FFFFFF",
  },
];

export default function HeroBanner() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide hero-carousel"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* 輪播圖片區域 */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={slide.bgImage}
              className="carousel-bg d-block w-100"
              alt={slide.title}
            />
            <div className="carousel-caption">
              <div className="caption-container">
                {/* 左側 Indicator */}
                <div className="caption-left">
                  <div className="carousel-indicators">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={i}
                        className={i === index ? "active" : ""}
                        aria-current={i === index ? "true" : undefined}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
                {/* 右側區域 */}
                <div className="caption-right">
                  <div className="caption-content">
                    <div className="caption-top">
                      <div className="caption-body caption-subtitle">
                        <p style={{ color: slide.fontColor }}>{slide.subtitle}</p>
                      </div>
                      <div className="caption-title-box caption-title">
                        <h3 style={{ color: slide.fontColor }}>{slide.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="caption-bottom">
                    <span className="caption-bn-name" style={{ color: slide.fontColor }}>{slide.bnName}</span>
                    <button
                      className="icon-button-outline"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="next"
                      style={{ borderColor: slide.fontColor }}
                    >
                      <img src={iconRight} alt="arrow-right" style={slide.fontColor === "#FFFFFF" ? { filter: "brightness(0) invert(1)" } : undefined} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
} 
