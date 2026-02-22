import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { API_BASE, API_PATH } from "../../api/config";

const OderInformation = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        email: '',
        address: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const submitOrder = async (e) => {
        e.preventDefault();
        
        // 基礎驗證
        if (!formData.name || !formData.tel || !formData.email || !formData.address) {
            Swal.fire('提示', '請填寫完整寄送資料！', 'warning');
            return;
        }

        try {
            const response = await axios.post(`${API_BASE}/api/${API_PATH}/order`, {
                data: {
                    user: {
                        name: formData.name,
                        tel: formData.tel,
                        email: formData.email,
                        address: formData.address,
                    },
                    message: formData.message
                }
            });

            if (response.data.success) {
                Swal.fire('訂單成功', '感謝您的購買！', 'success');
                setFormData({ name: '', tel: '', email: '', address: '', message: '' });
                navigate('/');
            }
        } catch (error) {
            console.error("訂單送出失敗:", error);
            Swal.fire('失敗', '送出訂單時發生錯誤', 'error');
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <h2 className="text-center fw-bold mb-5" style={{ letterSpacing: '8px' }}>填寫資料</h2>

                    <form onSubmit={submitOrder}>
                        <div className="mb-4">
                            <label className="form-label fw-bold h5 mb-3">姓名</label>
                            <input id="name" type="text" className="form-control border-0 bg-light py-3 px-4 shadow-sm text-center" style={{ borderRadius: '15px' }} placeholder="請輸入姓名" onChange={handleInputChange} value={formData.name} />
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-bold h5 mb-3">電話</label>
                            <input id="tel" type="tel" className="form-control border-0 bg-light py-3 px-4 shadow-sm text-center fw-bold" style={{ borderRadius: '15px' }} placeholder="09XX-XXX-XXX" onChange={handleInputChange} value={formData.tel} />
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-bold h5 mb-3">Email</label>
                            <input id="email" type="email" className="form-control border-0 bg-light py-3 px-4 shadow-sm text-center" style={{ borderRadius: '15px' }} placeholder="請輸入信箱" onChange={handleInputChange} value={formData.email} />
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-bold h5 mb-3">寄送地址</label>
                            <input id="address" type="text" className="form-control border-0 bg-light py-3 px-4 shadow-sm text-center" style={{ borderRadius: '15px' }} placeholder="請填寫完整地址" onChange={handleInputChange} value={formData.address} />
                        </div>

                        <div className="mb-5">
                            <label className="form-label fw-bold h5 mb-3">備註 / 留言</label>
                            <textarea 
                                id="message" 
                                className="form-control border-0 bg-light py-3 px-4 shadow-sm" 
                                rows="3"
                                placeholder="有什麼想對我們說的嗎？"
                                style={{ borderRadius: '15px', resize: 'none' }}
                                onChange={handleInputChange}
                                value={formData.message}
                            ></textarea>
                        </div>

                        <div className="d-flex justify-content-between gap-3 mt-5">
                            <button type="button" className="btn btn-outline-success flex-grow-1 py-2 fw-bold" onClick={() => navigate('/cart')} style={{ borderRadius: '10px', borderWidth: '2px' }}>
                                返回購物車
                            </button>
                            <button type="submit" className="btn btn-success text-white flex-grow-1 py-2 fw-bold" style={{ borderRadius: '10px' }}>
                                送出資料
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OderInformation;