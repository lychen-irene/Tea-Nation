import { useState } from "react";

import cart from "../../assets/images/Navbar&Footer/cart.png";

const ProductsTeaCan = () => {
  // 購買數量狀態
  const [quantity, setQuantity] = useState(1);

  // 減少數量
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // 增加數量
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // 商品規格資料
  const productSpecs = [
    { label: "最佳水溫", value: "95 度 C" },
    { label: "沖泡時間", value: "3 - 5 分鐘" },
    { label: "建議茶量", value: "3 - 5 g" },
  ];

  // 產地資料
  const origins = ["南投", "桃園", "新竹", "苗栗"];

  // 其他茶品資料
  const otherTeas = [
    {
      id: 1,
      name: "茉莉綠茶",
      price: "450",
      imgUrl:
        "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=400&auto=format&fit=crop", 
    },
    {
      id: 2,
      name: "四季春",
      price: "450",
      imgUrl:
        "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=400&auto=format&fit=crop", 
    },
    {
      id: 3,
      name: "東方美人茶",
      price: "600",
      imgUrl:
        "https://images.unsplash.com/photo-1576092762791-dd9e2220cad1?q=80&w=400&auto=format&fit=crop", 
    },
    {
      id: 4,
      name: "南非國寶茶",
      price: "600",
      imgUrl:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop", 
    },
  ];

  return (
    <div className="product-detail-page pt-5">
      {/* 主商品區塊 */}
      <section className="container py-5 my-md-4">
        <div className="row">
          {/* 左側：商品大圖 */}
          <div className="col-12 col-lg-7 mb-5 mb-lg-0">
            <div
              className="position-relative w-100 overflow-hidden shadow-sm"
              style={{ aspectRatio: "4/3", backgroundColor: "#F9F8F6" }}
            >
              <img
                src="https://images.unsplash.com/photo-1594631252845-29fc4cc8c0a1?q=80&w=800&auto=format&fit=crop"
                alt="蜜香紅茶"
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* 右側：商品資訊 */}
          <div className="col-12 col-lg-5 ps-lg-5">
            <div className="text-start">
              {/* 標籤 */}
              <span
                className="badge mb-3 px-3 py-2 fw-normal"
                style={{
                  backgroundColor: "#C6AB7E",
                  color: "#fff",
                  letterSpacing: "2px",
                  fontSize: "0.8rem",
                  borderRadius: "2px",
                }}
              >
                重度發酵
              </span>

              {/* 商品標題與價格 */}
              <h1
                className="display-5 text-dark fw-bold mb-2"
                style={{ fontFamily: "serif", letterSpacing: "2px" }}
              >
                蜜香紅茶
              </h1>
              <h4
                className="mb-4"
                style={{ color: "#BC9C59", letterSpacing: "1px" }}
              >
                NT$ 450
              </h4>

              {/* 商品描述 */}
              <p
                className="text-secondary small lh-lg mb-4 text-justify"
                style={{ letterSpacing: "1px" }}
              >
                「蟲咬出來的蜜味」。茶葉在生長過程中必須經過「小綠葉蟬（Jacobiasca
                formosana）」吸吮（俗稱「著涎」），茶樹為了自我防禦會產生特殊的化學變化，進而轉化成天然的蜜香。
              </p>

              {/* 規格列表 */}
              <div className="mb-5">
                {productSpecs.map((spec, index) => (
                  <div key={index} className="d-flex mb-2 align-items-center">
                    <span
                      className="text-secondary small"
                      style={{ width: "80px", letterSpacing: "2px" }}
                    >
                      {spec.label}
                    </span>
                    <span
                      className="text-dark small"
                      style={{ letterSpacing: "1px" }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}

                {/* 產地標籤 */}
                <div className="d-flex align-items-center mt-3">
                  <span
                    className="text-secondary small"
                    style={{ width: "80px", letterSpacing: "2px" }}
                  >
                    種植產地
                  </span>
                  <div className="d-flex gap-2 flex-wrap">
                    {origins.map((origin, index) => (
                      <span
                        key={index}
                        className="px-2 py-1"
                        style={{
                          backgroundColor: "#EEF3F0",
                          color: "#4A6B58",
                          fontSize: "0.75rem",
                          letterSpacing: "1px",
                          borderRadius: "2px",
                        }}
                      >
                        {origin}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 購買操作區 */}
              <div className="d-flex align-items-center gap-4">
                {/* 數量選擇器 */}
                <div className="d-flex align-items-center gap-3">
                  <button
                    onClick={decreaseQuantity}
                    className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                    style={{
                      width: "35px",
                      height: "35px",
                      border: "1px solid #D9D9D9",
                      color: "#666",
                    }}
                  >
                    -
                  </button>
                  <span
                    className="fw-bold fs-5 text-center"
                    style={{ width: "100px" }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                    style={{
                      width: "35px",
                      height: "35px",
                      border: "1px solid #D9D9D9",
                      color: "#666",
                    }}
                  >
                    +
                  </button>
                </div>

                {/* 加入購物車按鈕 */}
                <button
                  className="btn text-secondary"
                  style={{
                    border: "1px solid #D9D9D9",
                    borderRadius: "30px",
                    padding: "8px 50px",
                    letterSpacing: "2px",
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "#BC9C59";
                    e.target.style.color = "#BC9C59";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "#D9D9D9";
                    e.target.style.color = "#6c757d";
                  }}
                >
                  <span className="me-2">
                    <img src={cart} alt="購物車" />
                  </span>
                  
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 其他茶品區塊 */}
      <section className="container-fluid py-5 mt-5" style={{ backgroundColor: "#FCFCFC" }}>
        {/* 帶有水平線的置中標題 */}
        <div className="d-flex align-items-center justify-content-center mt-20 mb-20">
          <div className="flex-grow-1" style={{ height: "1px", backgroundColor: "#BC9C59", maxWidth: "400px" }}></div>
          <div className="text-center px-20">
            <span
              className="fw-bold d-block"
              style={{
                color: "#BC9C59",
                letterSpacing: "2px",
                fontSize: "0.85rem",
                marginBottom: "4px",
              }}
            >
              其他茶品
            </span>
            <h2
              className="display-6 text-dark mb-0"
              style={{ fontFamily: "serif", letterSpacing: "1px" }}
            >
              Other Tea
            </h2>
          </div>
            <div className="flex-grow-1" style={{ height: "1px", backgroundColor: "#BC9C59", maxWidth: "400px" }}></div>
        </div>

        {/* 網格卡片區 */}
        <div className="row g-4 g-lg-5">
          {otherTeas.map((tea) => (
            <div key={tea.id} className="col-6 col-md-3">
              <div className="product-card">
                {/* 卡片圖片 */}
                <div
                  className="w-100 mb-3 overflow-hidden bg-light"
                  style={{ aspectRatio: "3/4" }}
                >
                  <img
                    src={tea.imgUrl}
                    alt={tea.name}
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </div>

                {/* 卡片文字與按鈕 */}
                <div className="d-flex justify-content-between align-items-end text-start">
                  <div>
                    <h6
                      className="fw-bold mb-1"
                      style={{ letterSpacing: "1px", fontSize: "0.95rem" }}
                    >
                      {tea.name}
                    </h6>
                    <p
                      className="mb-0 small"
                      style={{ color: "#BC9C59", letterSpacing: "1px" }}
                    >
                      NT$ {tea.price}
                    </p>
                  </div>

                  {/* 小購物袋按鈕 */}
                  <button
                    className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                    style={{
                      width: "35px",
                      height: "35px",
                      border: "1px solid #D9D9D9",
                      color: "#999",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#BC9C59";
                      e.currentTarget.style.color = "#BC9C59";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#D9D9D9";
                      e.currentTarget.style.color = "#999";
                    }}
                  >
                    <span style={{ fontSize: "1.1rem", marginBottom: "2px" }}>
                      <img src={cart} alt="購物車" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsTeaCan;
