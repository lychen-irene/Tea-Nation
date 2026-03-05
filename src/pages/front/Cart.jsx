import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { currency } from "../../utils/currency";

import minusIcon from "../../assets/images/Cart/minus.svg";
import plusIcon from "../../assets/images/Cart/plus.svg";
import trashcanIcon from "../../assets/images/Cart/trashcan.svg";
import iconLeft from "../../assets/images/Cart/icon-left.svg";
import cartIconWhite from "../../assets/images/Cart/cart-w.svg";

import { API_BASE, API_PATH } from "../../api/config";

const Cart = () => {
  const [cart, setCart] = useState([]);
  // currentStep state
  const steps = [
    { num: 1, labelEN: "Cart List", labelZH: "購物清單" },
    { num: 2, labelEN: "Checkout", labelZH: "付款資訊" },
    { num: 3, labelEN: "Confirmation", labelZH: "完成結帳" },
  ];
  const [currentStep, setCurrentStep] = useState(1);

  // 取得購物車列表
  const getCart = async () => {
    try {
      const url = `${API_BASE}/api/${API_PATH}/cart`;
      const response = await axios.get(url);
      setCart(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // 更新商品數量
  const updateCart = async (cartId, productId, qty = 1) => {
    try {
      const url = `${API_BASE}/api/${API_PATH}/cart/${cartId}`;
      const data = {
        product_id: productId,
        qty,
      };
      const response = await axios.put(url, { data });
      getCart();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // 清除單一筆購物車
  const deleteCart = async (cartId) => {
    try {
      const url = `${API_BASE}/api/${API_PATH}/cart/${cartId}`;
      const response = await axios.delete(url);
      getCart();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // 清空購物車
  const deleteCartAll = async () => {
    try {
      const url = `${API_BASE}/api/${API_PATH}/carts`;
      await axios.delete(url);
      getCart();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // 預設第一次進入購物車畫面時會渲染購物車資料
  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          {/* <h2>購物車</h2> */}
          <div className="stepper">
            {steps.map((step) => (
              <div key={step.num} className="step-item">
                <div
                  className={`step-num ${currentStep >= step.num ? "step-num--active" : ""}`}
                >
                  {step.num}
                </div>
                <span className="step-label-EN">{step.labelEN}</span>
                <span className="step-label-ZH">{step.labelZH}</span>
              </div>
            ))}
          </div>

          <div className="cart-list__body">
            <div className="cart-list__top">
              <span>商品名稱</span>
              <span className="cart-list__col--hidden"></span>
              <span>商品小計</span>
              <span className="text-start">數量</span>
            </div>
            <div className="cart-list__list">
              {cart?.carts?.map((cartItem) => (
                <div className="cart-card" key={cartItem.id}>
                  <div className="cart-card__img">
                    <img
                      src={cartItem.product.imageUrl}
                      alt={cartItem.product.title}
                    />
                    {cartItem.product.coupon_enabled === 1 ? (
                      <span className="cart-card__tag">
                        已符合單品項 9 折優惠
                      </span>
                    ) : (
                      <span></span>
                    )}
                  </div>
                  <div className="cart-card__info">
                    <p className="cart-card__name">{cartItem.product.title}</p>
                    <div className="cart-card__price-row">
                      <span className="cart-card__price--current">
                        NT${currency(cartItem.product.price)}
                      </span>
                      {cartItem.product.origin_price >
                        cartItem.product.price && (
                        <span className="cart-card__price--origin">
                          {currency(cartItem.product.origin_price)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="cart-card__subtotal">
                    NT${currency(cartItem.final_total)}
                  </div>
                  <div className="cart-card__tail">
                    <div className="counter">
                      <button
                        type="button"
                        className="counter__btn"
                        disabled={cartItem.qty <= 1}
                        onClick={() =>
                          updateCart(
                            cartItem.id,
                            cartItem.product_id,
                            cartItem.qty - 1,
                          )
                        }
                      >
                        <img src={minusIcon} alt="minus" />
                      </button>
                      <span className="counter__qty">{cartItem.qty}</span>
                      <button
                        type="button"
                        className="counter__btn"
                        onClick={() =>
                          updateCart(
                            cartItem.id,
                            cartItem.product_id,
                            cartItem.qty + 1,
                          )
                        }
                      >
                        <img src={plusIcon} alt="plus" />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="cart-card__delete"
                      onClick={() => deleteCart(cartItem.id)}
                    >
                      <img src={trashcanIcon} alt="delete" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* sec order:3 - 折扣碼 & 金額明細 */}
          <div className="cart-summary">
            {/* 折扣碼區 */}
            <div className="cart-summary__coupon">
              <Link to="/productsTeaCan" className="cart-summary__link">
                <span className="cart-summary__back-icon">
                  <img src={iconLeft} alt="" />
                </span>
                <span>繼續挑選</span>
              </Link>
              <div className="cart-summary__body">
                <span className="cart-summary__label">使用優惠券</span>
                <div className="cart-summary__input-group">
                  <input
                    type="text"
                    className="cart-summary__input"
                    placeholder="輸入折扣碼"
                  />
                  <button type="button" className="cart-summary__btn-apply">
                    套用
                  </button>
                </div>
              </div>
            </div>

            <hr className="cart-summary__divider" />

            {/* 金額明細 */}
            <div className="cart-summary__pricing">
              <div className="cart-summary__row">
                <span>商品小計</span>
                <span>NT${currency(cart.total ?? 0)}</span>
              </div>
              <div className="cart-summary__row">
                <span>運費</span>
                <span>NT$0</span>
              </div>
              <div className="cart-summary__row">
                <span>折扣</span>
                <span>
                  -NT$
                  {currency((cart.total ?? 0) - (cart.final_total ?? 0))}
                </span>
              </div>
              <div className="cart-summary__row cart-summary__row--total">
                <span>合計</span>
                <span>NT${currency(cart.final_total ?? 0)}</span>
              </div>
            </div>

            <Link to="/oderInformation" className="cart-summary__checkout">
              <span className="cart-summary__checkout-icon">
                <img src={cartIconWhite} alt="" />
              </span>
              立即結帳
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
