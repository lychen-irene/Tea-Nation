import TeaNationLogo from "../assets/images/Navbar&Footer/TeaNationLogo.jpg";
import facebook from "../assets/images/Navbar&Footer/facebook.png";
import ig from "../assets/images/Navbar&Footer/ig.png";
import phone from "../assets/images/Navbar&Footer/phone.png";
import clock from "../assets/images/Navbar&Footer/clock.png";

const Footer = () => {
    return (<>
            <footer className="bg-light py-4 mt-auto border-top">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        {/* 左側：品牌標語與版權聲明 */}
                        <div className="col-12 col-md-6 text-center text-md-start">
                            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                                <img src={TeaNationLogo} alt="Logo" style={{ height: '50px' }} className="me-2" />
                                <h5 className="m-0 fw-bold text-secondary" style={{ letterSpacing: '2px' }}>
                                    茶香，是生活溫柔的停頓。
                                </h5>
                            </div>
                            <div className="text-muted small">
                                <p className="mb-1">此專題僅為面試作品所用，非商業營利性質</p>
                                <p className="mb-0">© 2026 Tea Nation All rights reserved.</p>
                            </div>
                        </div>
        
                        {/* 右側：聯絡資訊 */}
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <div className="mb-3 text-muted">
                                <p className="mb-1">
                                    <img src={clock} alt="" />平日 09:00 - 12:00 | 13:00 - 17:00
                                </p>
                                <p className="mb-0">
                                    <img src={phone} alt="" />04-2567-2231
                                </p>
                            </div>
                            
                            {/* 社群按鈕(圓圈樣式) */}
                            <div className="d-flex justify-content-center justify-content-md-end gap-3">
                                <a href="#" className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                    <img src={facebook} alt="" />
                                </a>
                                <a href="#" className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                    <img src={ig} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    </>);
}

export default Footer;