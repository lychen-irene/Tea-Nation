import axios from "axios";
import { API_BASE, API_PATH } from "../../api/config";

const OrderModal = ({ 
    modalType, 
    templateData, 
    orderModalRef, 
    getOrderData, 
    handleInputChange 
}) => {

    // API: 修改訂單
    const updateOrder = async () => {
        try {
            const response = await axios.put(
                `${API_BASE}/api/${API_PATH}/admin/order/${templateData.id}`,
                { data: templateData }
            );
            alert(response.data.message);
            orderModalRef.current.hide();
            getOrderData(); // 重新取得列表
        } catch (error) {
            alert("更新訂單失敗");
            console.error(error);
        }
    };

    // API: 刪除訂單
    const deleteOrder = async () => {
        if (!window.confirm("確定要刪除這筆訂單嗎？")) return;
        try {
            const response = await axios.delete(
                `${API_BASE}/api/${API_PATH}/admin/order/${templateData.id}`
            );
            alert(response.data.message);
            orderModalRef.current.hide();
            getOrderData();
        } catch (error) {
            alert("刪除失敗");
            console.error(error);
        }
    };

    return (
        <div 
            className="modal fade" 
            id="orderModal" 
            tabIndex="-1" 
            aria-labelledby="orderModalLabel" 
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content border-0">
                    <div className="modal-header bg-dark text-white">
                        <h5 className="modal-title" id="orderModalLabel">
                            <span>{modalType === "delete" ? "刪除訂單" : "訂單詳情"}</span>
                        </h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {modalType === "delete" ? (
                            <p>是否刪除 訂單編號：
                                <strong className="text-danger">{templateData.id}</strong> 
                            (刪除後將無法恢復)。
                            </p>
                        ) : (
                            <div className="row">
                                {/* 左側：訂單內容與狀態 */}
                                <div className="col-md-7">
                                    <h4 className="h5 border-bottom pb-2">訂單品項</h4>
                                    <table className="table align-middle">
                                        <thead>
                                            <tr>
                                                <th>商品名稱</th>
                                                <th>數量</th>
                                                <th className="text-end">金額</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {templateData.products && Object.values(templateData.products).map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.product.title}</td>
                                                    <td>{item.qty} / {item.product.unit}</td>
                                                    <td className="text-end">NT$ {item.total}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2" className="text-end">總計:</td>
                                                <td className="text-end text-success fw-bold">NT$ {templateData.total}</td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    <div className="mt-4">
                                        <h4 className="h5 border-bottom pb-2">付款狀態</h4>
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="is_paid"
                                                checked={templateData.is_paid}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-check-label" htmlFor="is_paid">
                                                {templateData.is_paid ? <span className="text-success">已付款</span> : <span className="text-danger">未付款</span>}
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* 右側：客戶資訊 */}
                                <div className="col-md-5">
                                    <h4 className="h5 border-bottom pb-2">收件人資訊</h4>
                                    <div className="mb-3">
                                        <label htmlFor="user.name" className="form-label">姓名</label>
                                        <input id="user.name" type="text" className="form-control" value={templateData.user?.name || ""} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="user.email" className="form-label">Email</label>
                                        <input id="user.email" type="email" className="form-control" value={templateData.user?.email || ""} 
                                        onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="user.tel" className="form-label">電話</label>
                                        <input id="user.tel" type="tel" className="form-control" value={templateData.user?.tel || ""} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="user.address" className="form-label">地址</label>
                                        <input id="user.address" type="text" className="form-control" value={templateData.user?.address || ""} onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">留言</label>
                                        <textarea id="message" className="form-control" rows="3" value={templateData.message || ""} onChange={handleInputChange}></textarea>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
                        {modalType === "delete" ? (
                            <button type="button" className="btn btn-danger" onClick={deleteOrder}>確認刪除</button>
                        ) : (
                            <button type="button" className="btn btn-primary" onClick={updateOrder}>更新訂單資料</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;