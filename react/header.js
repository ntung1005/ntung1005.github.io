function Myheader() {
    return (
        <div id="header">
            <div id="a">
                <div id="header_1">
                    <div className="row justify-content-between" id="header_11">
                        <div className="col-6" id="header_11a">
                            <p>Liên Hệ Ngay: <a href="#"> 0978032402</a></p>
                        </div>
                        <div className="col-6" id="header_11b">
                            <ul>
                                <li><a href="infor_shop.html">Thông Tin Shop</a></li>
                                <li><a href="news.html">Bài Viết</a></li>
                                <li><a href="call.html">Liên Hệ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="header_2">
                    <div className="row" id="header_21">
                        <div className="col-4" id="header_21a">
                            <a href="../index.html"><img src="../img/logo2.png" alt="XXXX" /></a>
                        </div>
                        <div className="col-4" id="header_21b">
                            <ul>
                                <li><a href="men.html#main">Giày Nam</a></li>
                                <li><a href="women.html#main">Giày Nữ</a></li>
                                <li><a href="sale.html">Khuyến Mãi</a></li>
                            </ul>
                        </div>
                        <div className="col-4" id="header_21c">
                            <ul>
                                <li>
                                    <form id="search">
                                        <input type="text" placeholder="Tìm Kiếm" />
                                        <span className="fas fa-search" />
                                    </form>
                                </li>
                                <li><i className="fas fa-user" /></li>
                                <li> <a href="cart.html"> <i className="fas fa-shopping-bag" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="header_3">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <h6>What is Lorem Ipsum?</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                            <div className="carousel-item">
                                <h6>XYZ</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                            <div className="carousel-item">
                                <h6>ABC</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header_4">
                    <div id="banner">
                    </div>
                </div>
            </div>
            <div id="b">
                <div id="b_1">
                    <div id="b_1_1">
                        <p>Liên Hệ Ngay: <a href="#"> 0978032402</a></p>
                    </div>
                </div>
                <div id="header_responsive">
                    <nav className="navbar navbar-light" id="b_2">
                        <div className="navbar-brand" id="b_2_1">
                            <input type="checkbox" id="menuToggle" />
                            <label htmlFor="menuToggle" className="menu-icon"><i className="fas fa-bars" /></label>
                            <div className="menu">
                                <ul>
                                    <a href="men.html#main">
                                        <li> Giày Nam</li>
                                    </a>
                                    <a href="women.html#main">
                                        <li>Giày Nữ</li>
                                    </a>
                                    <a href="sale.html">
                                        <li>Khuyến Mãi</li>
                                    </a>
                                    <div id="ul_1">
                                        <a href="#">
                                            <li ><i className="fas fa-user"> Đăng Nhập</i></li>
                                        </a>
                                        <a href="infor_shop.html">
                                            <li>Thông tin Shop</li>
                                        </a>
                                        <a href="news.html">
                                            <li>Bài Viết</li>
                                        </a>
                                        <a href="call.html">
                                            <li>Liên Hệ</li>
                                        </a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div id="b_2_2">
                            <button ><span className="fas fa-search" /></button>
                            <a href="cart.html"> <button><span className="fas fa-shopping-bag" /></button></a>
                        </div>
                    </nav>
                    <div id="logo_responsive">
                        <a href="../index.html"><img src="../img/logo2.png" alt="XXXX" /></a>
                    </div>
                    <div id="input_search">
                        <form>
                            <input type="text" placeholder="Tìm Kiếm" />
                            <span className="fas fa-search" />
                        </form>
                    </div>
                </div>
                <div id="b_3">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <h6>What is Lorem Ipsum?</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                            <div className="carousel-item">
                                <h6>XYZ</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                            <div className="carousel-item">
                                <h6>ABC</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="b_4">
                    <div id="banner">
                    </div>
                </div>
            </div>
            <div className="login-page" id="login-page">
                <div className="form">
                    <form className="register-form form_1">
                        <input type="text" placeholder="Tên" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Mật Khẩu" />
                        <input type="text" placeholder="Địa Chỉ" />
                        <button>ĐĂng Kí</button>
                        <p className="message"><a href="#">Đăng Nhập</a></p>
                    </form>
                    <form className="login-form form_1">
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button>Đăng Nhập</button>
                        <p className="message">Quên Mật Khẩu<br /><a href="#">Đăng Kí</a></p>
                    </form>
                    <span className="fas fa-times" id="close"  />
                </div>
            </div>
            <div id="fullscreen"  />
        </div>

    )
}