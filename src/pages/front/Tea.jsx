const Tea = () => {
  return (
    <>
      <div className='container mt-4'>
        <div className='row'>
          {/* {products.map((product) => (
            <div className='col-md-4 mb-3' key={product.id}>
              <div className='card'>
                <img src={product.imageUrl} className='card-img-top' alt={product.title} />
                <div className='card-body'>
                  <h5 className='card-title'>{product.title}</h5>
                  <p className='card-text'>{product.description}</p>
                  <p className='card-text'>
                    <strong>價格:</strong> {product.price} 元
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>單位: {product.unit}</small>
                  </p>
                  <button className='btn btn-primary' onClick={() => handleViewMore(product.id)}>
                    查看更多
                  </button>
                </div>
              </div>
            </div>
          ))} */}
          <div className='col-6 mb-3'>
            <img src='https://picsum.photos/200' className='img-fluid' alt='title' />
          </div>
          <div className='col-6 mb-3'>
            <div className='d-flex justify-content-between'>
              <h1>蜜香紅茶</h1>
              <div className='dropdown'>
                <button
                  className='form-select text-start py-3'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  重度發酵
                </button>
                <ul className='dropdown-menu w-100 mt-2'>
                  <li>
                    <a class='dropdown-item' href='#'>
                      輕度發酵
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      中度發酵
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              「蟲咬​出來​的​蜜味」。​茶葉​在​生長​過程​中​必須​經過​「小綠​葉蟬​（Jacobiasca
              formosana）」​吸吮​（俗稱​「著涎」），​茶樹​為​了​自​我​防禦會​產生​特殊​的​化學​變化，​進而​轉化​成​天然​的​蜜香。
            </p>
            <div className='row'>
              <div className='col-4'>
                <div className='card' style='width: 18rem;'>
                  <div className='card-body'>
                    <h5 className='card-title'>最​佳​水溫</h5>
                    <p className='card-text'>95°C</p>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className='card' style='width: 18rem;'>
                  <div className='card-body'>
                    <h5 className='card-title'>沖泡時間</h5>
                    <p className='card-text'>3-5 min</p>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className='card' style='width: 18rem;'>
                  <div className='card-body'>
                    <h5 className='card-title'>建議​茶量​</h5>
                    <p className='card-text'>3​-5 g</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tea;
