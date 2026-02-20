import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

const setAuthCookiesAndHeaders = (token, expired, uid) => {
    document.cookie = `hexToken=${token};expires=${new Date(expired)};path=/;`;
    document.cookie = `hexUID=${uid};expires=${new Date(expired)};path=/;`;
    axios.defaults.headers.common.Authorization = `${token}`;
};

const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${API_BASE}/admin/signin`, data);
            const { token, expired, uid } = response.data;
            setAuthCookiesAndHeaders(token, expired, uid);

            if (token && uid) {
                navigate("/admin/products");
            } else {
                navigate("/");
            }
        } catch (error) {
            alert("登入失敗: " + (error.response?.data?.message || "伺服器錯誤"));
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    {/* 標題 */}
                    <h2 
                    className="text-center fw-bold" 
                    style={{ letterSpacing: '8px',margin: '5rem 0' }}
                    >
                    登入會員</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* 使用者名稱 (Miro 有此欄位，但 admin API 通常只需 email/password，這裡保留結構供調整) */}
                        {/* <div className="mb-4">
                            <label className="form-label fw-bold mb-2">
                                使用者名稱 <span className="badge bg-danger-subtle text-danger ms-1">必須</span>
                            </label>
                            <input
                                type="text"
                                className="form-control py-2"
                                placeholder="使用者名稱"
                            />
                        </div> */}

                        {/* Email 欄位 */}
                        <div className="mb-4">
                            <label className="form-label fw-bold mb-2">email 信箱</label>
                            <input
                                type="email"
                                className=
                                {`
                                form-control
                                text-center
                                py-2 
                                ${errors.username ? "is-invalid" : ""}
                                `}
                                placeholder="請輸入電子郵件"
                                {...register("username", {
                                    required: "信箱必填",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "請輸入正確的信箱格式",
                                    },
                                })}
                            />
                            {errors.username && (
                                <div className="invalid-feedback">{errors.username.message}</div>
                            )}
                        </div>

                        {/* 密碼欄位 */}
                        <div className="mb-4 position-relative">
                            <label className="form-label fw-bold mb-2">密碼</label>
                            <input
                                type="password"
                                className={`
                                    form-control
                                    py-2 
                                    text-center
                                    ${errors.password ? "is-invalid" : ""}
                                `}
                                placeholder="英數混合且長度為6-12字元"
                                {...register("password", {
                                    required: "密碼必填",
                                    minLength: { value: 6, message: "密碼至少需 6 位數" },
                                })}
                            />
                            {/* 模擬圖片中的眼睛圖示，實際功能需另寫狀態切換 */}
                            <i className="bi bi-eye-slash position-absolute" style={{ right: '15px', top: '45px', cursor: 'pointer', color: '#666' }}></i>
                            {errors.password && (
                                <div className="invalid-feedback">{errors.password.message}</div>
                            )}
                        </div>

                        {/* 登入按鈕 */}
                        <button
                            className="btn py-3 fw-bold w-100 mt-3"
                            type="submit"
                            style={{ backgroundColor: '#BC9C59', color: 'white', letterSpacing: '10px' }}
                        >
                            登 入
                        </button>

                        {/* 下方連結 */}
                        <div className="text-center mt-3">
                            <Link to="/register" className="text-dark text-decoration-underline small fw-bold">
                                還不是會員嗎？前往註冊
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;