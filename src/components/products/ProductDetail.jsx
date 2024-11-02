import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { list } from "../data/Data";
import "./ProductDetail.css";
import styled from "styled-components";
import facebook from "../images/facebook.png";
import zalo from "../images/zalo.png";
import phone from "../images/phone.png";
import Reviews from "../reviews";
import { Crecontext } from "../providertocar";

const ProductDetail = () => {
  const [show, setShow] = useState();
  const [showdes, setShowdes] = useState();
  const { id } = useParams();
  const [showimage, setShowimage] = useState(null);
  const product = list.find((item) => item.id === parseInt(id));

  const { car, setCar } = useContext(Crecontext);

  // Local state for wishlist
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const handleAddToCart = (product) => {
    const isAlreadyInCart = car.some((item) => item.id === product.id);
    if (!isAlreadyInCart) {
      setCar((prevCar) => [...prevCar, product]);
    }
  };

  const handleAddToWishlist = (product) => {
    const isAlreadyInWishlist = wishlist.some((item) => item.id === product.id);

    if (isAlreadyInWishlist) {
      const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };

  const handleshow = (img) => setShowimage(img);
  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <Wapper>
      <div className="product-detail-page" id="conten-a">
        <div className="product-top">
          <div className="product-thumbnails">
            {product.images.map((img, index) => (
              <img
                style={{ margin: "10px" }}
                key={index}
                src={img}
                alt={`thumbnail-${index}`}
                onClick={() => handleshow(img)}
              />
            ))}
          </div>
          <div>
            <img
              className="product-main-image"
              src={showimage || product.images[0]}
              alt={product.name}
            />
          </div>
          <div className="product-main">
            <div className="product-info">
              <h1>{product.name}</h1>
              <p className="price">Giá phòng: {product.price}</p>

              <div className="ratings">
                <span>⭐⭐⭐⭐⭐</span>
                <span>{product.reviews} Người đánh giá</span>
              </div>

              <p className="description-short">{product.shortDescription}</p>

              <div className="product-details">
                <p>Tiện Ích: {product.utilities.join(", ")}</p>
                <p>Phòng: {product.sku}</p>
                <p>Khu Vực: {product.category}</p>
                <p>Nội Thất: {product.tags.join(", ")}</p>
              </div>

              <div className="social-share">
                <h1>Liên Hệ:</h1>
              </div>
              <div className="social-share">
                <Icon>
                  <a href="tel:0817590805">
                    <img src={phone} alt="phone" />
                  </a>
                </Icon>
                <Icon>
                  <a
                    href="https://zalo.me/0817590805"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={zalo} alt="zalo" />
                  </a>
                </Icon>
                <Icon>
                  <a
                    href="https://m.me/profile.php?id=100049668137817&mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebook} alt="facebook" />
                  </a>
                </Icon>
              </div>
              <div>
                {/* <WishlistButton onClick={() => handleAddToCart(product)}>
                  Add to wishlist
                </WishlistButton> */}
              </div>
            </div>
          </div>
        </div>
        <div className="product-bottom">
          <div className="tabs">
            <button className="active-tab" onClick={() => setShowdes(!showdes)}>
              Description
            </button>
            <button onClick={() => setShow(!show)}>
              Reviews ({product.reviews})
            </button>
          </div>
          {show && <Reviews />}
          {showdes && (
            <div className="tab-content">
              <p>{product.longDescription}</p>
            </div>
          )}
          <div className="related-images">
            {product.relatedImages.map((img, index) => (
              <div key={index} className="related-image-wrapper">
                <img src={img} alt={`related-thumbnail-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wapper>
  );
};

export default ProductDetail;

const Wapper = styled.div`
  padding-top: 60px;
  @media screen and (min-width: 320px) and (max-width: 460px) {
    #conten-a {
      flex-wrap: wrap;
    }
  }
`;

const Icon = styled.div`
  img {
    width: 100%;
  }
  display: flex;
  align-items: center;
`;

const WishlistButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: gray;
  }
`;

const CartButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
