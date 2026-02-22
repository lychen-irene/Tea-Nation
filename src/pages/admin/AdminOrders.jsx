import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import axios from "axios";
import * as bootstrap from "bootstrap";

import OrderTable from "../../components/admin/OrderTable";
import OrderModal from "../../components/admin/OrderModal";
import PageNation from "../../components/admin/PageNation";

import { API_BASE, API_PATH } from "../../api/config";

export const AdminOrders = () => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  // 訂單狀態：「檢視/編輯」與「刪除」
  const [modalType, setModalType] = useState("");

  // 訂單資料結構
  const [templateData, setTemplateData] = useState({
    id: "",
    create_at: "",
    is_paid: false,
    message: "",
    products: {},
    user: {
      address: "",
      email: "",
      name: "",
      tel: "",
    },
    total: 0,
  });

  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState({});

  // orderModal 初始化
  const orderModalRef = useRef(null);
  useEffect(() => {
    orderModalRef.current = new bootstrap.Modal("#orderModal", {
      keyboard: false,
    });
  }, []);

  // API: 取得訂單列表
  const getOrderData = useCallback(async (page = 1) => {
    try {
      const response = await axios.get(
        `${API_BASE}/api/${API_PATH}/admin/orders?page=${page}`,
      );
      setOrders(response.data.orders);
      setPagination(response.data.pagination);
    } catch (err) {
      console.error("取得訂單失敗", err);
    }
  }, []);

  useEffect(() => {
    let isMounted = true; // 防止組件卸載後繼續更新狀態

    const fetchData = async () => {
      if (isMounted) {
        await getOrderData(currentPage);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // 清理函式
    };
  }, [getOrderData, currentPage]);

  // 打開 Modal
  const openModal = (order, type) => {
    setModalType(type);
    setTemplateData({ ...order });
    orderModalRef.current.show();
  };

  // 監聽訂單內容修改
  const handleInputChange = useCallback((e) => {
    const { id, type, checked, value } = e.target;
    if (id.includes("user.")) {
      const field = id.split(".")[1];
      setTemplateData((prev) => ({
        ...prev,
        user: { ...prev.user, [field]: value },
      }));
    } else {
      setTemplateData((prev) => ({
        ...prev,
        [id]: type === "checkbox" ? checked : value,
      }));
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h3>訂單管理</h3>
          <button className="btn btn-outline-danger">清除所有訂單</button>
        </div>

        <table className="table mt-4 table-transparent">
          <thead>
            <tr>
              <th>下單時間</th>
              <th>Email</th>
              <th>應付金額</th>
              <th>付款狀態</th>
              <th>編輯</th>
            </tr>
          </thead>
          <OrderTable orders={orders} openModal={openModal} />
        </table>

        <PageNation pagination={pagination} changePage={getOrderData} />
      </div>

      {/* 訂單詳情與編輯 Modal */}
      <OrderModal
        modalType={modalType}
        templateData={templateData}
        orderModalRef={orderModalRef}
        getOrderData={getOrderData}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default AdminOrders;
