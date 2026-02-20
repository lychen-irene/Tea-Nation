import React from "react";
import { Link } from "react-router-dom";

import blog01 from "../../assets/images/Knowledge/blog01.png";
import blog02 from "../../assets/images/Knowledge/blog02.png";
import blog03 from "../../assets/images/Knowledge/blog03.png";
import blog04 from "../../assets/images/Knowledge/blog04.png";
import blog05 from "../../assets/images/Knowledge/blog05.png";
import blog06 from "../../assets/images/Knowledge/blog06.png";

import slide4 from "../../assets/images/Home/slide4.png";
import slide5 from "../../assets/images/Home/slide5.png";
import slide6 from "../../assets/images/Home/slide6.png";
import iconRight from "../../assets/images/Home/icon-right.svg";


const Knowledge = () => {
    // 識茶知識資料
    const knowledgeData = [
        {
        id: 1, date: { year: "2026", month: "Jan", day: "1", week: "MON." },
        title: "茶葉的六大基本分類決定於「發酵程度」",
        desc: "茶葉的六大基本分類（綠茶、白茶、黃茶、青茶/烏龍茶、紅茶、黑茶）並非由茶樹品種決定，而是由其製程中的發酵程度區分。",
        img: blog01, col: 1
        },
        {
        id: 2, date: { year: "2026", month: "Apr", day: "4", week: "THU." },
        title: "茶葉中的「茶多酚」是主要的健康益處來源",
        desc: "茶葉含有豐富的生物活性化合物，其中以茶多酚（特別是兒茶素）最為重要。",
        img: blog02, col: 1
        },
        {
        id: 3, date: { year: "2026", month: "Feb", day: "2", week: "TUE." },
        title: "海拔高度對茶葉風味影響巨大（高山茶的魅力）",
        desc: "海拔與溫度呈負相關，高海拔環境雲霧繚繞，日照較少，茶樹生長緩慢，這導致茶葉中的氨基酸和芳香物質積累較多。",
        img: blog03, col: 2
        },
        {
        id: 4, date: { year: "2026", month: "May", day: "5", week: "FRI." },
        title: "茶葉保存須避免的五大要素",
        desc: "為了維持茶葉的最佳風味與品質，保存時必須遠離以下五個要素：濕氣、高溫、陽光、空氣（氧氣）、異味。",
        img: blog04, col: 2
        },
        {
        id: 5, date: { year: "2026", month: "Mar", day: "3", week: "WED." },
        title: "茶葉的分類主要取決於「發酵程度」",
        desc: "茶葉的六大基本分類：綠茶、白茶、黃茶、青茶/烏龍茶、紅茶、黑茶。發酵程度決定了茶湯的顏色與風味層次。",
        img: blog05, col: 3
        },
        {
        id: 6, date: { year: "2026", month: "Jun", day: "6", week: "SAT." },
        title: "茶葉中的「茶多酚」",
        desc: "茶葉含有豐富的生物活性化合物，其中以茶多酚（特別是兒茶素）最為重要，具有抗氧化作用。",
        img: blog06, col: 3
        },
    ];

    // 探索茶香資料
    const exploreData = [
        {
        id: 1, title: "品茶", link: "/products/tasting",
        desc: "深感山林呼吸，品味純粹的風土。讓每一口茶湯的回甘，撫平日常的焦躁與繁忙。",
        img: slide4,
        },
        {
        id: 2, title: "禮盒", link: "/products/gifts",
        desc: "將生活的美好妥善包裝。幾片不張揚的心意，讓收到的祝福隨著茶香蔓延伸展。",
        img: slide5,
        },
        {
        id: 3, title: "茶具", link: "/products/teaware",
        desc: "觸碰職人手心的溫度。好的器皿不只是工具，更是讓茶在釋放時更顯圓潤的關鍵。",
        img: slide6,
        },
    ];

    // 渲染日期區塊的小元件 (抽出重複的 UI)
    const DateBox = ({ date }) => (
        <div className="text-center pe-3 me-3 border-end border-1 border-light-subtle" style={{ minWidth: "75px", fontFamily: "serif" }}>
            <div className="text-secondary" style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>
                {date.year}
            </div>
            <div className="fw-bold" style={{ color: "#BC9C59", fontSize: "0.85rem", letterSpacing: "1px", margin: "4px 0" }}>
                {date.month}
            </div>
            <div className="text-dark fw-bold lh-1" style={{ fontSize: "2.2rem" }}>{date.day}</div>
            <div 
            className="text-secondary mt-1" 
            style={{ fontSize: "0.75rem", letterSpacing: "1px" }}>
                {date.week}
            </div>
        </div>
    );

    return (
        <div>
            {/* Knowledge 標題區 */}
            <section className="container py-5 mt-20 mb-15">
            <div className="text-center mb-4">
                <span className="fw-bold d-block mb-2" style={{ color: "#BC9C59", letterSpacing: "2px", fontSize: "0.85rem" }}>
                識茶知識
                </span>
                <h2 className="display-4 text-dark" style={{ fontFamily: "serif", letterSpacing: "1px" }}>
                Knowledge
                </h2>
            </div>
            </section>

{/* 文章區 */}
<section className="container-fluid px-0 py-5" style={{ backgroundColor: "#FCFCFC" }}>
    <div className="container">
        <div className="row g-0">
            {/* 左欄 */}
            <div className="col-12 col-lg-4 pe-lg-5 mb-5 mb-lg-0" style={{ borderRight: "1px solid #EAEAEA" }}>
                {knowledgeData.filter(d => d.col === 1).map((item, index, array) => (
                    <React.Fragment key={item.id}>
                        <div className="d-flex align-items-start">
                            <DateBox date={item.date} />
                            <div className="flex-grow-1">
                                <h6 className="fw-bold mb-3 lh-base" style={{ fontSize: "1.05rem", letterSpacing: "1px", color: "#333", fontFamily: "serif" }}>
                                    {item.title}
                                </h6>
                                <p className="text-secondary small lh-lg text-justify mb-4" style={{ letterSpacing: "1px" }}>
                                    {item.desc}
                                </p>
                                <img src={item.img} alt={item.title} className="w-100 object-fit-cover shadow-sm" style={{ height: "220px", filter: "grayscale(15%)" }} />
                            </div>
                        </div>
                        {index !== array.length - 1 && <hr className="my-5" style={{ borderColor: "#E0E0E0", opacity: 0.8 }} />}
                    </React.Fragment>
                ))}
            </div>
            {/* 中欄 */}
            <div className="col-12 col-lg-4 px-lg-5 mb-5 mb-lg-0" style={{ borderRight: "1px solid #EAEAEA" }}>
                <div>
                    {knowledgeData.filter(d => d.col === 2).map((item, index, array) => (
                        <React.Fragment key={item.id}>
                            <div className="d-flex align-items-start">
                                <DateBox date={item.date} />
                                <div className="flex-grow-1">
                                    <h6 className="fw-bold mb-3 lh-base" style={{ fontSize: "1.05rem", letterSpacing: "1px", color: "#333", fontFamily: "serif" }}>
                                        {item.title}
                                    </h6>
                                    <p className="text-secondary small lh-lg text-justify mb-4" style={{ letterSpacing: "1px" }}>
                                        {item.desc}
                                    </p>
                                    <img src={item.img} alt={item.title} className="w-100 object-fit-cover shadow-sm" style={{ height: "220px", filter: "grayscale(15%)" }} />
                                </div>
                            </div>
                            {index !== array.length - 1 && <hr className="my-5" style={{ borderColor: "#E0E0E0", opacity: 0.8 }} />}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* 右欄 */}
            <div className="col-12 col-lg-4 ps-lg-5">
                {knowledgeData.filter(d => d.col === 3).map((item, index, array) => (
                    <React.Fragment key={item.id}>
                        <div className="d-flex align-items-start">
                            <DateBox date={item.date} />
                            <div className="flex-grow-1">
                                <h6 className="fw-bold mb-3 lh-base" style={{ fontSize: "1.05rem", letterSpacing: "1px", color: "#333", fontFamily: "serif" }}>
                                    {item.title}
                                </h6>
                                <p className="text-secondary small lh-lg text-justify mb-4" style={{ letterSpacing: "1px" }}>
                                    {item.desc}
                                </p>
                                <img src={item.img} alt={item.title} className="w-100 object-fit-cover shadow-sm" style={{ height: "220px", filter: "grayscale(15%)" }} />
                            </div>
                        </div>
                        {index !== array.length - 1 && <hr className="my-5" style={{ borderColor: "#E0E0E0", opacity: 0.8 }} />}
                    </React.Fragment>
                ))}
            </div>

        </div>
    </div>
</section>

            {/* ---------------- Explore 區塊 ---------------- */}
            <section className="container py-5 my-md-5">
            {/* 左右橫線 */}
            <div className="d-flex align-items-center justify-content-center mt-20 mb-15 pb-4">
                <div className="flex-grow-1" style={{ height: "1px", backgroundColor: "#BC9C59", maxWidth: "250px" }}></div>
                <div className="text-center px-4 px-md-5">
                    <span className="fw-bold d-block" style={{ color: "#BC9C59", letterSpacing: "2px", fontSize: "0.85rem" }}>
                        探索茶香
                    </span>
                    <h2 className="display-4 text-dark mb-0" style={{ fontFamily: "serif", letterSpacing: "1px" }}>
                        Explore
                    </h2>
                </div>
                <div className="flex-grow-1" style={{ height: "1px", backgroundColor: "#BC9C59", maxWidth: "250px" }}></div>
            </div>

            <div className="row g-0">
                {exploreData.map((item, index) => (
                <div 
                    key={item.id} 
                    className="col-12 col-md-4 px-3 px-lg-4" 
                    style={{ 
                    borderRight: index !== exploreData.length - 1 ? "1px solid #E5E5E5" : "none" 
                    }}
                >
                    {/* 上半部 */}
                    <div className="d-flex align-items-start mb-4">
                        {/* 直排標題 */}
                        <h3 className="fw-bold m-0 me-3 me-lg-4 pt-2" 
                            style={{ writingMode: "vertical-rl", letterSpacing: "8px", color: "#333", fontFamily: "serif", fontSize: "1.5rem" }}>
                            {item.title}
                        </h3>
                        {/* 圖片 */}
                        <div className="flex-grow-1">
                            <img src={item.img} alt={item.title} className="w-100 object-fit-cover" style={{ height: "400px" }} />
                        </div>
                    </div>

                    {/* 下半部 */}
                    <div className="d-flex align-items-center justify-content-between ps-lg-5">
                        {/* 描述文字 */}
                        <p className="small lh-lg mb-0 text-justify flex-grow-1 pe-3 px-5" 
                        style={{ letterSpacing: "1px" }}>
                            {item.desc}
                        </p>

                        {/* 圓形按鈕 */}
                        <Link 
                            to={item.link} 
                            className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
                            style={{ width: "65px", height: "65px", borderColor: "#ccc", padding: 0 }}
                        >
                            <img src={iconRight} alt="arrow-right" style={{ width: "30px" }} />
                        </Link>
                    </div>
                </div>
                ))}
            </div>
            </section>
        </div>
    );
};

export default Knowledge;