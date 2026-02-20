import React from "react";

import aboutUsBackground from "../../assets/images/About/aboutUsBackground.png";
import ChengShanJi from "../../assets/images/About/Cheng-Shan-Ji.png";
import YuChingYeh from "../../assets/images/About/Yu-Ching-Yeh.png";
import YunShiSu from "../../assets/images/About/Yun-Shi-Su.png";
import HengXuLin from "../../assets/images/About/Heng-Xu-Lin.png";
import awards from "../../assets/images/About/Awards.png";
import michelin from "../../assets/images/About/michelin.png";
import flavor from "../../assets/images/About/flavor.png";

const About = () => {
  const aboutPerson = [
    {
      name: "紀承山",
      englishName: "Cheng-Shan Ji ",
      title: "CEO 主理人",
      desc: "靈魂只能由「好的茶葉」來滋養。",
      imgUrl: ChengShanJi,
    },
    {
      name: "葉予詩",
      englishName: "Yu-Ching Yeh ",
      title: "Tea Arts Director 茶藝總監",
      desc: "品嘗每一口茶的醇厚與餘韻。",
      imgUrl: YuChingYeh,
    },
    {
      name: "蘇雲時",
      englishName: "Yun-Shi Su",
      title: "LR Rep 在地關係代表",
      desc: "將最純潔的氣息奉獻給大地。",
      imgUrl: YunShiSu,
    },
    {
      name: "林衡序",
      englishName: "Heng-Xu Lin",
      title: "Brand Designer 品牌設計",
      desc: "用設計將溫柔的精神傳遞出去。",
      imgUrl: HengXuLin,
    },
  ];

  const features = [
    {
      id: 1,
      title: "在地手作，台灣溫度",
      eng: "Handmade",
      // 詳細內文 (需垂直排列)
      details: [
        "賦予茶葉獨一無二的生命力。",
        "以世代傳承每一道工序",
        "採摘、萎凋、揉捻、烘焙",
        "堅持台灣傳統製茶工藝",
      ],
    },
    {
      id: 2,
      title: "風土之味，在地精神",
      eng: "Local Spirit",
      details: [
        "感受土地最純粹的饋贈。",
        "順應節氣與自然共生",
        "雨水、土壤、陽光、雲霧",
        "詮釋特定產區的獨特韻味",
      ],
    },
    {
      id: 3,
      title: "頂級選材，精品淬鍊",
      eng: "Quality",
      details: [
        "追求極致完美的味蕾體驗。",
        "嚴格篩選每一片芽葉",
        "外觀、香氣、滋味、葉底",
        "通過國際最高標準檢驗",
      ],
    },
  ];

  return (
    <div className="about-page">
      {/* About Us */}
      {/* 頂部白底標題區 */}
      <section className="container py-5 mt-5 my-20">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6">
            {/* 大標題 */}
            <div className="mb-4 text-md-start">
              <span
                className="fw-bold"
                style={{
                  color: "#BC9C59",
                  letterSpacing: "2px",
                  fontSize: "0.85rem",
                }}
              >
                關於品牌
              </span>
              <h1
                className="display-4 text-dark mt-2 text-md-start"
                style={{ fontFamily: "serif", letterSpacing: "1px" }}
              >
                About Us
              </h1>
            </div>
            {/* 副標題區塊 */}
            <div className="d-flex justify-content-end mt-4">
              {/* 內部文字 */}
              <div className="text-start">
                <h5 className="fw-bold mb-3" style={{ letterSpacing: "2px" }}>
                  一心一葉，慢工細活的茶哲學
                </h5>
                <p
                  className="text-secondary small lh-lg mb-0"
                  style={{ letterSpacing: "1px" }}
                >
                  Tea Nation 不僅是茶葉店
                  <br />
                  我們也是台灣精品茶的文化傳承者。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 深綠色網格背景區塊 */}
      <section
        className="position-relative text-white overflow-hidden brand-section-hover-effect"
        style={{ backgroundColor: "#1E362D" }}
      >
        {/* 背景裝飾圖 */}
        <div
          className="about-hero-bg position-absolute w-100 h-100"
          style={{
            backgroundImage: `url(${aboutUsBackground})`,
            opacity: "0.2",
          }}
        ></div>

        <div
          className="container position-relative z-1 pt-5"
          style={{ border: "1px solid rgba(188, 156, 89, 0.3)" }}
        >
          {/* 上半部：Brand Tagline */}
          <div
            className="row align-items-end mb-0 py-15"
            style={{ borderBottom: "1px solid rgba(188, 156, 89, 0.3)" }}
          >
            <div className="col-md-6 text-md-start px-20">
              <h2
                className="display-5 mb-0"
                style={{ fontFamily: "serif", letterSpacing: "2px" }}
              >
                <p
                  style={{
                    color: "#BC9C59",
                    letterSpacing: "2px",
                    fontSize: "0.85rem",
                  }}
                >
                  品牌宣言
                </p>
                Brand Tagline
              </h2>
            </div>
            <div className="col-md-6 text-md-end mt-4 mt-md-0 align-self-center">
              <p
                className="small mb-0 lh-lg opacity-75 px-10"
                style={{ letterSpacing: "1px" }}
              >
                以精品級工藝，重新定義台灣茶的新高度
                <br />
                探索茶香的風味旅程
              </p>
            </div>
          </div>

          {/* 下半部 */}
          <div className="row g-0">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="col-md-4 py-5 brand-feature-col position-relative"
                style={{
                  borderRight:
                    index !== features.length - 1
                      ? "1px solid rgba(188, 156, 89, 0.3)"
                      : "none",
                  minHeight: "450px",
                }}
              >
                <div className="d-flex h-100 w-100 align-items-center justify-content-center position-relative">
                  {/* 詳細內文 */}
                  <div
                    className="details-group position-absolute d-flex align-items-center h-100"
                    style={{ right: "12%" }}
                  >
                    <div className="vertical-text text-start">
                      <p
                        className="small lh-lg mb-0 opacity-75"
                        style={{ letterSpacing: "2px", color: "#E0E0E0" }}
                      >
                        {feature.details.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i !== feature.details.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>

                  {/* 標題與英文 */}
                  <div className="title-group d-flex align-items-start">
                    {/* 右側：中文標題 */}
                    <h5
                      className="vertical-text fw-bold"
                      style={{ letterSpacing: "4px" }}
                    >
                      {feature.title}
                      {/* 左側：英文標題 */}
                      <p
                        className="vertical-text me-3"
                        style={{
                          color: "#BC9C59",
                          letterSpacing: "2px",
                          fontSize: "0.85rem",
                          marginTop: "-90%",
                        }}
                      >
                        {feature.eng}
                      </p>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成員介紹 */}
      <section className="container py-5 mt-lg-5">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 my-20">
            {/* 頂部白底標題區 */}
            {/* 大標題 */}
            <div className="mb-4 text-md-start">
              <span
                className="fw-bold"
                style={{
                  color: "#BC9C59",
                  letterSpacing: "2px",
                  fontSize: "0.85rem",
                }}
              >
                職人精神
              </span>
              <h1
                className="display-4 text-dark mt-2 text-md-start"
                style={{ fontFamily: "serif", letterSpacing: "1px" }}
              >
                Our Member
              </h1>
            </div>
            {/* 副標題區塊 */}
            <div className="d-flex justify-content-end mt-4">
              {/* 內部文字 */}
              <div className="text-start">
                <p
                  className="text-secondary small lh-lg mb-0"
                  style={{ letterSpacing: "1px" }}
                >
                  一群熱愛茶文化、擁有深厚製茶背景的職人
                  <br />
                  他們是 Tea Nation 的堅實後盾。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 g-lg-5">
          {aboutPerson.map((person, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="member-card d-flex align-items-start">
                {/* 左側：垂直中文名字 */}
                <div className="vertical-text me-3 mt-3">
                  <h4
                    className="fw-normal mb-0"
                    style={{ fontFamily: "serif", letterSpacing: "8px" }}
                  >
                    {person.name}
                  </h4>
                </div>

                {/* 右側：圖片 + 底部文字資訊 */}
                <div className="flex-grow-1">
                  {/* 圖片區塊 (保持你的比例設定) */}
                  <div
                    className="aspect-ratio-box mb-3"
                    style={{
                      paddingTop: "130%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={person.imgUrl}
                      alt={person.name}
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* 底部文字資訊 */}
                  <div className="text-start">
                    {/* 職稱 */}
                    <p
                      className="mb-1"
                      style={{
                        color: "#2C493D",
                        fontSize: "0.9rem",
                        letterSpacing: "1px",
                      }}
                    >
                      {person.title}
                    </p>
                    {/* 英文名 */}
                    <p
                      className="text-secondary mb-2"
                      style={{ fontSize: "0.85rem", letterSpacing: "1px" }}
                    >
                      {person.englishName}
                    </p>
                    {/* 描述文案 */}
                    <p
                      className="text-dark small mb-0"
                      style={{ letterSpacing: "1px" }}
                    >
                      {person.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 獎項 */}
      <section className="container py-5 my-md-5 my-lg-20">
        <div className="row ">
          {/* 左側 */}
          <div className="col-md-6 mb-5 mb-md-0 ">
            <div
              className="position-relative w-100 overflow-hidden shadow-sm"
              style={{ aspectRatio: "16/11", borderRadius: "4px" }}
            >
              {/* 底圖 */}
              <img
                src={awards}
                alt="Awards"
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
              <div className="position-absolute top-50 start-50 translate-middle">
                <p
                  className="vertical-text text-white fw-normal mb-0"
                  style={{
                    letterSpacing: "6px",
                    textShadow: "0 2px 4px rgba(0,0,0,0.4)",
                  }}
                >
                  國際榮耀，精品茶的最高認證
                </p>
              </div>
            </div>
          </div>

          {/* 右側 */}
          <div className="col-md-6 ps-lg-5">
            <div className="ms-lg-4">
              {/* 標題區 */}
              <div className="row mb-15">
                <div className="col-12 col-md-8 col-lg-6">
                  {/* 大標題 */}
                  <div className="mb-4 text-md-start">
                    <span
                      className="fw-bold"
                      style={{
                        color: "#BC9C59",
                        letterSpacing: "2px",
                        fontSize: "0.85rem",
                      }}
                    >
                      獲獎榮譽
                    </span>
                    <h1
                      className="display-4 text-dark mt-2 text-md-start"
                      style={{ fontFamily: "serif", letterSpacing: "1px" }}
                    >
                      Awards
                    </h1>
                  </div>
                  {/* 副標題區塊 */}
                  <div className="d-flex justify-content-end mt-4">
                    {/* 內部文字 */}
                    <div className="text-start">
                      <p
                        className="text-secondary small lh-lg mb-0"
                        style={{ letterSpacing: "1px" }}
                      >
                        我們對品質的堅持
                        <br />
                        獲得國際精品茶的最高認證
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 獎項 1：米其林 */}
              <div className="award-item d-flex align-items-start justify-content-end mb-4">
                <div
                  className="award-badge flex-shrink-0 me-3"
                  style={{ width: "70px", height: "70px" }}
                >
                  <img
                    src={michelin}
                    alt="米其林"
                    className="w-100 h-100 object-fit-contain"
                  />
                </div>
                <div className="text-start">
                  <h6
                    className="fw-bold mb-1 fs-6"
                    style={{ color: "#BC9C59", letterSpacing: "1px" }}
                  >
                    · 2025 米其林三星茶葉大賞
                  </h6>
                  <p
                    className="text-muted mb-0 lh-base small"
                    style={{ maxWidth: "420px" }}
                  >
                    獲評為最高等級的三星榮耀，是對我們手作、精品茶葉工藝的最高肯定。
                  </p>
                </div>
              </div>
              {/* 獎項 2：卓越風味 */}
              <div className="award-item d-flex align-items-start justify-content-end">
                <div
                  className="award-badge flex-shrink-0 me-3"
                  style={{ width: "70px", height: "70px" }}
                >
                  <img
                    src={flavor}
                    alt="卓越風味"
                    className="w-100 h-100 object-fit-contain"
                  />
                </div>
                <div className="text-start">
                  <h6
                    className="fw-bold mb-1 fs-6"
                    style={{ color: "#BC9C59", letterSpacing: "1px" }}
                  >
                    · 2025 國際茶賽 卓越風味獎
                  </h6>
                  {/* 寬度設為一致，這樣換行的位置就會跟 Figma 一樣整齊 */}
                  <p
                    className="text-muted mb-0 lh-base small"
                    style={{ maxWidth: "420px" }}
                  >
                    我們的茶品風味卓越，在國際盲測中脫穎而出，證明了 Tea Nation
                    的世界級水準。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
