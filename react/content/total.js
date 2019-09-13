let shipping = 30000;


function Total(props) {
  return (
    <div className="container">
      <div className="total_area">
        <div className="coupon">
          <form onSubmit={props.applyCoupon}>
            <input
              type="text"
              placeholder="Mã Khuyến Mãi"
              onChange={props.getValueInputCoupon}
            />
            <button type="submit">Xác Nhận</button>
          </form>
        </div>
        <div className="totals">
          <table>
            <tbody>
              <tr>
                <td>Phí ship</td>
                <td>{shipping.toLocaleString()}VND</td>
              </tr>

              <tr>
                <td>Khuyến Mãi</td>
                <td>{props.value_coupon.toLocaleString()}VND</td>
              </tr>

              <tr>
                <td>Tổng Tiền</td>
                <td>{(props.value + shipping-props.value_coupon).toLocaleString()}VND</td>
              </tr>
            </tbody>
          </table>

          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}
