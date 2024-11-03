import React, { useState } from "react";
import Back from "../common/Back";
import "../home/recent/recent.css";
import img from "../images/about.jpg";
import { list } from "../data/Data";
import "./Product.css";
import AllProduct from "./AllProduct";
import map from "../images/map.png";
import up from "../images/up-down.png";
import styled from "styled-components";
import icon1 from "../images/Armchair.png";
import icon2 from "../images/Roundchair.png";
import icon3 from "../images/Stool.png";
import icon4 from "../images/Wardrobe.png";
import priceup from "../images/priceup.png";
import pricedown from "../images/pricedown.png";
import search from "../images/search.png";

const Product = ({ onUpdateWishlistCount }) => {
  // State lưu trữ giá trị của các bộ lọc
  const [selectedCategories, setSelectedCategories] = useState([]); // Danh mục được chọn
  const [nameFilter, setNameFilter] = useState(""); // Chuỗi tìm kiếm sản phẩm theo tên
  const [showDropdown, setShowDropdown] = useState(false); // Hiển thị dropdown cho danh mục
  const [minPrice, setMinPrice] = useState(0); // Giá trị tối thiểu
  const [maxPrice, setMaxPrice] = useState(10000000); // Giá trị tối đa
  const [sortBy, setSortBy] = useState("Sắp Xếp"); // Tiêu chí sắp xếp
  const [showSortDropdown, setShowSortDropdown] = useState(false); // Hiển thị dropdown sắp xếp

  // Hàm chuyển đổi giá từ chuỗi thành số
  const parsePrice = (priceString) => {
    if (typeof priceString === "string") {
      // Xóa ký tự không phải số trong chuỗi giá
      return parseInt(priceString.replace(/[^0-9]/g, ""), 10);
    } else if (typeof priceString === "number") {
      // Nếu là số, trả về giá trị đó
      return priceString;
    } else {
      // Nếu không hợp lệ, trả về 0
      return 0;
    }
  };

  // Hàm xử lý khi thay đổi checkbox category
  const handleCategoryChange = (category) => {
    // Kiểm tra nếu category đã có trong danh sách selectedCategories
    if (selectedCategories.includes(category)) {
      // Xóa category khỏi selectedCategories nếu đã có
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      // Thêm category vào selectedCategories nếu chưa có
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Lấy tất cả các danh mục từ dữ liệu sản phẩm mà không trùng lặp
  const allCategories = [...new Set(list.map((item) => item.category))];

  // Hàm lọc sản phẩm dựa trên các tiêu chí đã chọn
  const filteredProducts = list.filter((product) => {
    const productPrice = parsePrice(product.price); // Chuyển đổi giá sản phẩm thành số

    // Kiểm tra nếu sản phẩm thuộc một trong các danh mục đã chọn
    const matchesCategory =
      selectedCategories.length > 0
        ? selectedCategories.includes(product.category)
        : true;

    // Kiểm tra nếu giá sản phẩm nằm trong khoảng giá đã chọn
    const matchesPrice =
      (minPrice ? productPrice >= parsePrice(minPrice) : true) &&
      (maxPrice ? productPrice <= parsePrice(maxPrice) : true);

    // Kiểm tra nếu tên sản phẩm có chứa chuỗi tìm kiếm
    const matchesName = nameFilter
      ? product.name.toLowerCase().includes(nameFilter.toLowerCase())
      : true;

    // Trả về sản phẩm nếu thỏa mãn tất cả các điều kiện
    return matchesCategory && matchesPrice && matchesName;
  });

  // Sắp xếp sản phẩm dựa trên giá trị sortBy
  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case "Sort by Price: ↑":
        // Sắp xếp theo giá tăng dần
        return parsePrice(a.price) - parsePrice(b.price);
      case "Sort by Price: ↓":
        // Sắp xếp theo giá giảm dần
        return parsePrice(b.price) - parsePrice(a.price);
      case "Sắp Xếp":
        // Sắp xếp theo đánh giá giảm dần
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  return (
    <>
      <section className="blog-out mb">
        <Back
          title="Tất cả phòng"
          cover={img}
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          icon4={icon4}
        />

        {/* Bộ lọc sản phẩm */}
        <div className="filter-wrapper">
          <div className="filter-container">
            {/* Lọc theo loại phòng */}
            <div className="filter-item dropdown">
              <div>
                <img src={map} alt="map" style={{ width: "100%" }} />
              </div>
              <p className="filter-title">Khu Vực</p>
              <div>
                <p
                  className="filter-title"
                  onClick={() => setShowDropdown(!showDropdown)}
                  style={{ cursor: "pointer" }}
                >
                  {showDropdown ? "▲" : "▼"}
                </p>

                {/* Hiển thị dropdown khi nhấn vào */}
                {showDropdown && (
                  <div className="dropdown-content">
                    {allCategories.map((category, index) => (
                      <div key={index} className="dropdown-item">
                        <input
                          type="checkbox"
                          id={`category-${index}`}
                          value={category}
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                        />
                        <label htmlFor={`category-${index}`}>{category}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Lọc theo giá (giá tối thiểu) */}
            <div className="filter-item">
              <Icon>
                <img src={pricedown} />
              </Icon>
              <div>
                <p className="filter-title">Giá</p>
                <label>
                  Từ: {minPrice.toLocaleString()} vnđ
                  <input
                    type="range"
                    min="0"
                    max="3000000"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    step="1000000"
                    className="slider"
                  />
                </label>
              </div>
            </div>

            {/* Lọc theo giá (giá tối đa) */}
            <div className="filter-item">
              <Icon>
                <img src={priceup} />
              </Icon>
              <div>
                <p className="filter-title">Giá</p>
                <label>
                  Đến: {maxPrice.toLocaleString()} vnđ
                  <input
                    type="range"
                    min="5000000"
                    max="10000000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    step="5000000"
                    className="slider"
                  />
                </label>
              </div>
            </div>

            {/* Tìm kiếm sản phẩm theo tên */}
            <div className="search-bar">
              <Icon>
                <img src={search} />
              </Icon>
              <input
                className="filter-description"
                placeholder="Tìm theo tên"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)} // Cập nhật chuỗi tìm kiếm
              />
            </div>

            {/* Bộ lọc sắp xếp sản phẩm */}
            <div className="sort-wrapper">
              <p
                className="filter-title"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                style={{ cursor: "pointer" }}
              >
                {sortBy} <span>{showSortDropdown ? "▲" : "▼"}</span>
              </p>

              {/* Hiển thị dropdown sắp xếp khi nhấn vào */}
              {showSortDropdown && (
                <div className="dropdown-content">
                  <div
                    className="dropdown-item"
                    onClick={() => setSortBy("Sắp Xếp")}
                  >
                    Tất Cả
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => setSortBy("Sort by Price: ↑")}
                  >
                    Sắp xếp theo giá: ↑
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => setSortBy("Sort by Price: ↓")}
                  >
                    Sắp xếp theo giá: ↓
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Danh sách sản phẩm đã lọc và sắp xếp */}
        <div className="container recent">
          <AllProduct
            products={sortedProducts}
            onUpdateWishlistCount={onUpdateWishlistCount}
          />
        </div>
      </section>
    </>
  );
};

export default Product;

// Styled component cho phần biểu tượng
const Icon = styled.div`
  img {
    width: 100%;
  }
  display: flex;
  align-items: center;
`;
