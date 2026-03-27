import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import cartIcon from "../../assets/images/Navbar&Footer/cart.png";
import { API_BASE, API_PATH } from "../../api/config";

const SingleProduct = () => {
  const { id } = useParams(); // 從 URL 取得商品 ID
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]); // 推薦商品
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // 1. 取得同類別的推薦商品
  const getRelatedProducts = useCallback(async (category, currentId) => {
    try {
      const res = await axios.get(`${API_BASE}/api/${API_PATH}/products/all`);
      const allProducts = res.data.products || [];

      // 篩選：同類別 且 排除當前正在看的商品
      // 這裡不限制只取前 4 筆，讓 Swiper 可以滑動更多商品
      const related = allProducts.filter(
        (item) => item.category === category && item.id !== currentId,
      );
      setRelatedProducts(related);
    } catch (error) {
      console.error("取得推薦商品失敗", error);
    }
  }, []);

  // 2. 負責初始化與切換商品時的資料抓取
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${API_BASE}/api/${API_PATH}/product/${id}`,
        );

        if (res.data.success) {
          const currentProduct = res.data.product;
          setProduct(currentProduct);
          await getRelatedProducts(currentProduct.category, id);
        }
      } catch (error) {
        console.error("資料載入失敗", error);
      } finally {
        setIsLoading(false);
        window.scrollTo(0, 0); // 切換商品時回到頂部
      }
    };

    if (id) {
      fetchData();
      setQuantity(1);
    }
  }, [id, getRelatedProducts]);

  // 3. 加入購物車 API
  const addToCart = async (productId, qty = 1) => {
    try {
      await axios.post(`${API_BASE}/api/${API_PATH}/cart`, {
        data: {
          product_id: productId,
          qty: Number(qty),
        },
      });
      Swal.fire({
        title: "已加入購物車",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire(
        "加入失敗",
        error.response?.data?.message || "請稍後再試",
        "error",
      );
    }
  };

  // 4. 保護機制：載入中畫面
  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div
          className="spinner-border"
          style={{ color: "#BC9C59" }}
          role="status"
        ></div>
        <span className="ms-3 text-secondary">商品資料載入中...</span>
      </div>
    );
  }

  // 5. 保護機制：找不到商品
  if (!product || !product.title) {
    return (
      <div className="text-center py-5 mt-5 h4 text-secondary">
        找不到該商品資訊
      </div>
    );
  }

  return (
    <div
      className="product-detail-page pt-5"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      {/* 上半部：主商品區塊 */}
      <section className="container py-5 my-md-4 p-4 p-md-5">
        <div className="row align-items-center">
          {/* 左側：商品大圖 */}
          <div className="col-12 col-lg-6 mb-5 mb-lg-0 pe-lg-5">
            <div
              className="position-relative w-100 overflow-hidden"
              style={{ aspectRatio: "4/3", backgroundColor: "#F9F8F6" }}
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* 右側：商品資訊 */}
          <div className="col-12 col-lg-6 ps-lg-5 text-start">
            <span
              className="d-inline-block mb-3 px-3 py-1 fw-normal"
              style={{
                backgroundColor: "#C6AB7E",
                color: "#fff",
                letterSpacing: "2px",
                fontSize: "0.8rem",
              }}
            >
              {product.category || "產銷履歷"}
            </span>
            <h1
              className="display-5 text-dark fw-bold mb-2"
              style={{ fontFamily: "serif", letterSpacing: "2px" }}
            >
              {product.title}
            </h1>
            <h4
              className="mb-4 fw-bold"
              style={{ color: "#BC9C59", letterSpacing: "1px" }}
            >
              NT$ {product.price}
            </h4>
            <p
              className="text-secondary small lh-lg mb-4 text-justify"
              style={{ letterSpacing: "1px" }}
            >
              {product.content || product.description}
            </p>

            {/* 沖泡參數 */}
            <div
              className="small text-secondary my-12"
              style={{ letterSpacing: "1px" }}
            >
              <div className="d-flex mb-2">
                <span style={{ width: "100%" }}>{product.description}</span>
              </div>
            </div>

            {/* 購買操作區 */}
            <div className="d-flex align-items-center gap-4 mt-5">
              <div className="d-flex align-items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                  className="btn btn-outline-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  -
                </button>
                <span
                  className="fw-bold fs-5 text-center"
                  style={{ width: "30px", fontFamily: "serif" }}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="btn btn-outline-secondary rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-outline-secondary rounded-pill d-flex align-items-center gap-2 px-4 py-2"
                onClick={() => addToCart(product.id, quantity)}
                style={{ letterSpacing: "1px" }}
              >
                <img src={cartIcon} alt="cart" style={{ width: "18px" }} />
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 下半部：相關推薦區塊 (Swiper 輪播) */}
      <section className="container py-5 mt-5">
        <div className="d-flex align-items-center justify-content-center mb-5">
          <div
            className="flex-grow-1"
            style={{
              height: "1px",
              backgroundColor: "#E0D5C1",
              maxWidth: "250px",
            }}
          ></div>
          <div className="text-center px-4">
            <span
              style={{
                color: "#BC9C59",
                letterSpacing: "2px",
                fontSize: "0.85rem",
              }}
            >
              其他茶品
            </span>
            <h2
              className="display-6 text-dark mb-0 mt-1"
              style={{ fontFamily: "serif" }}
            >
              Other Tea
            </h2>
          </div>
          <div
            className="flex-grow-1"
            style={{
              height: "1px",
              backgroundColor: "#E0D5C1",
              maxWidth: "250px",
            }}
          ></div>
        </div>

        <div className="pb-4">
          {relatedProducts.length > 0 ? (
            <Swiper
              modules={[Navigation, FreeMode]}
              freeMode={true}
              navigation={true}
              spaceBetween={24}
              breakpoints={{
                320: {
                  slidesPerView: 1.5,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              style={{
                "--swiper-navigation-color": "#BC9C59",
                "--swiper-navigation-size": "20px",
                padding: "10px 5px", // 預留卡片 hover 放大的空間
              }}
            >
              {relatedProducts.map((item) => (
                <SwiperSlide key={item.id} style={{ height: "auto" }}>
                  <Link
                    to={`/product/${item.id}`}
                    className="text-decoration-none text-dark h-100 d-block"
                  >
                    <div className="product-card bg-transparent border-0 h-100">
                      <div
                        className="w-100 mb-3 overflow-hidden bg-light"
                        style={{ aspectRatio: "3/4" }}
                      >
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-100 h-100"
                          style={{
                            objectFit: "cover",
                            transition: "transform 0.4s ease",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.transform = "scale(1.05)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                          }
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-end mt-2">
                        <div>
                          <h6
                            className="fw-bold mb-1"
                            style={{
                              letterSpacing: "1px",
                              fontFamily: "serif",
                            }}
                          >
                            {item.title}
                          </h6>
                          <p
                            className="mb-0 small"
                            style={{ color: "#BC9C59", fontFamily: "serif" }}
                          >
                            NT$ {item.price}
                          </p>
                        </div>
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-circle d-flex justify-content-center align-items-center"
                          style={{ width: "35px", height: "35px" }}
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(item.id, 1);
                          }}
                        >
                          <img
                            src={cartIcon}
                            alt="cart"
                            style={{ width: "16px" }}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center text-secondary w-100 py-4">
              目前沒有相關商品喔！
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
