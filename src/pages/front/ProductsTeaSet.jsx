import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import cartIcon from "../../assets/images/Navbar&Footer/cart.png";
import { API_BASE, API_PATH } from "../../api/config";

const ProductsTeaCan = () => {
  const [teaSet, setTeaGiftBoxSet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeaCans = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${API_BASE}/api/${API_PATH}/products/all`);
        if (res.data.success) {
          const allProducts = res.data.products || [];

          const filteredCans = allProducts.filter(
            (item) => item.category === "茶具",
          );

          setTeaGiftBoxSet(filteredCans);
        }
      } catch (error) {
        console.error("載入茶葉罐列表失敗", error);
      } finally {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }
    };

    fetchTeaCans();
  }, []);

  const addToCart = async (productId) => {
    try {
      await axios.post(`${API_BASE}/api/${API_PATH}/cart`, {
        data: {
          product_id: productId,
          qty: 1,
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

  // 3. 載入中畫面
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
        <span className="ms-3 text-secondary">茶具系列載入中...</span>
      </div>
    );
  }

  return (
    <div className="products-list-page pt-5">
      {/* 頁面標題區塊 */}
      <section className="container py-5 mt-4 text-center">
        <h1
          className="display-4 fw-bold mb-3"
          style={{ fontFamily: "serif", letterSpacing: "2px" }}
        >
          茶具系列
        </h1>
        <p className="text-secondary" style={{ letterSpacing: "1px" }}>
          Tea Canister Collection
        </p>
        <div
          className="mx-auto mt-4"
          style={{ height: "2px", backgroundColor: "#BC9C59", width: "60px" }}
        ></div>
      </section>

      {/* 商品列表網格 */}
      <section className="container pb-5 mb-5">
        <div className="row g-4">
          {teaSet.length > 0 ? (
            teaSet.map((tea) => (
              <div key={tea.id} className="col-12 col-sm-6 col-lg-3">
                <Link
                  to={`/product/${tea.id}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="product-card h-100">
                    <div
                      className="w-100 mb-3 overflow-hidden bg-light position-relative"
                      style={{ aspectRatio: "3/4" }}
                    >
                      <img
                        src={tea.imageUrl}
                        alt={tea.title}
                        className="w-100 h-100 position-absolute top-0 start-0"
                        style={{
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </div>

                    <div className="d-flex justify-content-between align-items-end px-1">
                      <div>
                        <h6
                          className="fw-bold mb-1"
                          style={{ letterSpacing: "1px" }}
                        >
                          {tea.title}
                        </h6>
                        <p
                          className="mb-0 small"
                          style={{ color: "#BC9C59", fontWeight: "500" }}
                        >
                          NT$ {tea.price}
                        </p>
                      </div>

                      {/* 快捷加入購物車按鈕 */}
                      <button
                        className="btn btn-sm btn-outline-light border rounded-circle d-flex justify-content-center align-items-center bg-white"
                        style={{ width: "35px", height: "35px" }}
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(tea.id);
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
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5 text-secondary">
              目前還沒有上架茶具商品喔！
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsTeaCan;

// 用舊版的 排版
