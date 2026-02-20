import iconRight from "../assets/images/Home/icon-right.svg";
import sec3Card from "../assets/images/Home/sec3Card.jpg";
import sec4Card from "../assets/images/Home/sec4Card.png";

export default function Sec34() {
  return (
    <section className="sec34-wrapper">
      <div className="sec34-section">
        <img className="sec34-bg" src={sec3Card} alt="About Us" />
        <div className="sec34-title">
          <div className="sec34-text">
            <div className="sec34-text-left">
              <span className="sec34-label">About Us</span>
            </div>
            <div className="sec34-text-right">
              <p className="sec34-name">看不見的地方，依然講究</p>
            </div>
          </div>
          <button className="icon-button-outline" type="button">
            <img src={iconRight} alt="arrow-right" />
          </button>
        </div>
        <div className="sec34-body">
          <p className="sec34-body-name">每一片抵達您杯中的茶葉，</p>
          <p className="sec34-body-name">都經歷了我們最嚴苛的篩選流程。</p>
        </div>
      </div>
      <div className="sec34-section">
        <img className="sec34-bg" src={sec4Card} alt="Products" />
        <div className="sec34-title">
          <div className="sec34-text">
            <div className="sec34-text-left">
              <span className="sec34-label">Products</span>
            </div>
            <div className="sec34-text-right">
              <p className="sec34-name">待客之道，是先款待自己</p>
            </div>
          </div>
          <button className="icon-button-outline" type="button">
            <img src={iconRight} alt="arrow-right" />
          </button>
        </div>
        <div className="sec34-body">
          <p className="sec34-body-name">生活的節奏可以很快，</p>
          <p className="sec34-body-name">但喝茶的當下，</p>
          <p className="sec34-body-name">時間是屬於您的。</p>
        </div>
      </div>
    </section>
  );
}
