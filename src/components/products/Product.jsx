import React, { useState, useRef } from "react";
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
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [sortBy, setSortBy] = useState("Sắp Xếp");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

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
  // Ref cho phần tử AllProduct
  const allProductRef = useRef(null);

  // Hàm cuộn tới phần tử AllProduct
  const scrollToAllProduct = () => {
    if (allProductRef.current) {
      allProductRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    scrollToAllProduct(); // Cuộn tới AllProduct khi chọn danh mục
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    setShowSortDropdown(false);
    scrollToAllProduct(); // Cuộn tới AllProduct khi chọn sắp xếp
  };

  const allCategories = [...new Set(list.map((item) => item.category))];

  const filteredProducts = list.filter((product) => {
    const productPrice = parsePrice(product.price);
    const matchesCategory =
      selectedCategories.length > 0
        ? selectedCategories.includes(product.category)
        : true;
    const matchesPrice =
      (minPrice ? productPrice >= parsePrice(minPrice) : true) &&
      (maxPrice ? productPrice <= parsePrice(maxPrice) : true);
    const matchesName = nameFilter
      ? product.name.toLowerCase().includes(nameFilter.toLowerCase())
      : true;
    return matchesCategory && matchesPrice && matchesName;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case "Sắp xếp theo giá: ↑":
        return parsePrice(a.price) - parsePrice(b.price);
      case "Sắp xếp theo giá: ↓":
        return parsePrice(b.price) - parsePrice(a.price);
      case "Sắp Xếp":
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

        <div className="filter-wrapper">
          <div className="filter-container">
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

            <div className="filter-item">
              <Icon>
                <img src={pricedown} alt="price down" />
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

            <div className="filter-item">
              <Icon>
                <img src={priceup} alt="price up" />
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

            <div className="search-bar">
              <Icon>
                <img src={search} alt="search" />
              </Icon>
              <input
                className="filter-description"
                placeholder="Tìm theo tên"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
              />
            </div>

            <div className="sort-wrapper">
              <p
                className="filter-title"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                style={{ cursor: "pointer" }}
              >
                {sortBy} <span>{showSortDropdown ? "▲" : "▼"}</span>
              </p>

              {showSortDropdown && (
                <div className="dropdown-content">
                  <div
                    className="dropdown-item"
                    onClick={() => handleSortChange("Sắp Xếp")}
                  >
                    Tất Cả
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleSortChange("Sắp xếp theo giá: ↑")}
                  >
                    Sắp xếp theo giá: ↑
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleSortChange("Sắp xếp theo giá: ↓")}
                  >
                    Sắp xếp theo giá: ↓
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container recent" ref={allProductRef}>
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

const Icon = styled.div`
  img {
    width: 100%;
  }
  display: flex;
  align-items: center;
`;
