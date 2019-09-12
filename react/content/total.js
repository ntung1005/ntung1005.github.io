let shipping = 30000;
function Total(props) {
  return (
    <div className="container">
      <div className="total_area">
        <div className="coupon">
          <input type="text" placeholder="Mã Khuyến Mãi" />
          <button>Xác Nhận</button>
        </div>
        <div className="totals">
          <table>
            <tr>
              <td>Phí ship</td>
              <td>{shipping.toLocaleString()}VND</td>
            </tr>

            <tr>
              <td>Khuyến Mãi</td>
              <td>0VND</td>
            </tr>

            <tr>
              <td>Tổng Tiền</td>
              <td>{(props.value + shipping).toLocaleString()}VND</td>
            </tr>
          </table>

         
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}
