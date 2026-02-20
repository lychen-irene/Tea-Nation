import { useState, useEffect } from "react";
import axios from "axios";
import { currency } from "../../utils/currency";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

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
      <div className="container">
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
        <div className="text-end mt-4">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => deleteCartAll()}
          >
            清空購物車
          </button>
        </div>
        <table className="table">
          <thead className="cart-list-heading">
            <tr>
              <th scope="col"></th>
              <th scope="col">商品名稱</th>
              <th scope="col">商品小計</th>
              <th scope="col">數量</th>
            </tr>
          </thead>
          <tbody>
            {cart?.carts?.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => deleteCart(cartItem.id)}
                  >
                    刪除
                  </button>
                </td>
                <th scope="row">{cartItem.product.title}</th>
                <td>
                  <div className="input-group input-group-sm mb-3">
                    <input
                      type="number"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      defaultValue={cartItem.qty}
                      onChange={(e) =>
                        updateCart(
                          cartItem.id,
                          cartItem.product_id,
                          Number(e.target.value),
                        )
                      }
                    />
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-sm"
                    >
                      {cartItem.product.unit}
                    </span>
                  </div>
                </td>
                <td className="text-end">{currency(cartItem.final_total)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-end" colSpan="3">
                總計
              </td>
              <td className="text-end">{currency(cart?.final_total)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Cart;
