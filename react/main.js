// C3 Rating Star : chia component

// function Rating(props) {
//     let star_rating = [];
//     for (let i = 0; i <props.value; i++) {
//         star_rating.push(<i key={i} className="fa fa-star"></i>)
//     }

//     return star_rating;
// };
//

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          thumbnail: "img/sản phẩm 2.jpg",
          name: "Alexander Mcqueen",
          price: 1000000,
          quantity: 8,
          rating: 3
        },
        {
          id: 2,
          thumbnail: "img/sản phẩm 11.jpg",
          name: "Balenciaga",
          price: 500000,
          quantity: 10,
          rating: 5
        }
      ],

      coupons: [123456, 45678]
    };
  }

  //   Các Hàm xử lí

  //   Giá Trị input
  handleChange(event) {
    const newProducts = this.state.products;

    console.log(event.target.value);

    this.setState({
      products: newProducts
    });
  }
  //

  // Tăng
  decreat(index) {
    const newProducts = this.state.products;
    if (newProducts[index].quantity > 1) newProducts[index].quantity--;

    this.setState({
      products: newProducts
    });
  }
  // Giảm
  increat(index) {
    const newProducts = this.state.products;

    newProducts[index].quantity += 1;

    this.setState({
      products: newProducts
    });
  }

  // delete
  del(index) {
    const newProducts = this.state.products;
    newProducts.splice(index, 1);

    this.setState({
      products: newProducts
    });
  }

  render() {
    const products = this.state.products;
    let cartItems = [];
    let totalPrice = 0;
    

    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      totalPrice += product.price * product.quantity;

      cartItems.push(
        <tr className="table-row" key={product.id}>
          <td className="column-1">
            <div>
              <img src={product.thumbnail} alt="IMG-PRODUCT" />
            </div>
          </td>
          <td className="column-2">
            {product.name}
            <br />

            {/* Star Rating  */}

            {/* Lặp Thường */}
            {/* {
                            function () {
                                let star_r = [];
                                for (let i = 0; i < product.rating; i++) {
                                    star_r.push(<i key={i} className="fa fa-star"></i>)
                                }

                                return star_r;
                            }()
                        }

                        <br/> */}

            {/* Hàm Map */}
            {/* {Array(product.rating).fill(1).map((value,index) => <i key={index} className="fa fa-star"></i>)}
                        <br/> */}

            {/* C3 chia component + dòng 1->10 */}
            {/* <Rating value={product.rating}/> */}

            {/*  */}
          </td>

          <td className="column-3">{product.price.toLocaleString()}VND</td>
          <td className="column-4">
            <div id="quality_area">
              {/* Tăng */}
              <button id="sub" onClick={() => this.decreat(i)}>
                <i className="fs-12 fa fa-minus" aria-hidden="true" />
              </button>

              {/* Thay đổi giá trị ô input */}
              <input
                value={product.quantity}
                onChange={this.handleChange.bind(this, event)}
                type="text"
                name="num-product"
              />

              {/* Giảm */}
              <button id="sum" onClick={() => this.increat(i)}>
                <i className="fs-12 fa fa-plus" aria-hidden="true" />
              </button>
            </div>
          </td>

          {/* Tổng tiền sản phẩm */}
          <td className="column-5">
            {(product.price * product.quantity).toLocaleString()}VND
          </td>

          {/* Xóa */}
          <td className="delete" onClick={this.del.bind(this, i)}>
            <i className="far fa-trash-alt" />
          </td>
        </tr>
      );
    }

    return (
      <div className="main">
        <h4>Giỏ Hàng</h4>
        {/* Cart */}
        <section>
          <div className="container">
            {/* Cart item */}
            <div id="info_table">
              <div>
                <table>
                  <tbody>
                    <tr className="table-head">
                      <th className="column-1"></th>
                      <th className="column-2">Sản Phẩm</th>
                      <th className="column-3">Giá</th>
                      <th className="column-4 p-l-70">Số Lượng</th>
                      <th className="column-5">Tổng</th>
                      <th></th>
                    </tr>

                    {/* Danh sach san pham */}
                    {cartItems}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>



        {/* Total */}

        <Total value={totalPrice}/>
        
      </div>
    );
  }
}
