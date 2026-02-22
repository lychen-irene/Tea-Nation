import React from "react";

const OrderTable = ({ orders, openModal }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  return (
    <tbody>
      {orders && orders.length > 0 ? (
        orders.map((item) => (
          <tr key={item.id}>
            <td>{formatDate(item.create_at)}</td>
            <td>
              <span className="d-block">{item.user?.email}</span>
              <small className="text-muted">購買人: {item.user?.name}</small>
            </td>
            <td className="text-center">NT$ {Math.round(item.total).toLocaleString()}</td>
            <td>
              {item.is_paid ? (
                <span className="text-success fw-bold">已付款</span>
              ) : (
                <span className="text-danger fw-bold">未付款</span>
              )}
            </td>
            <td>
              <div className="btn-group">
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => openModal(item, "edit")}
                >
                  檢視/編輯
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => openModal(item, "delete")}
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6" className="text-center py-4 text-muted">
            目前尚無訂單資料
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default OrderTable;