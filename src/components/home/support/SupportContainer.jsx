import React from "react";
import styled from "styled-components";
import phoneIcon from "../../images/phone.png"; // Đường dẫn icon điện thoại
import zaloIcon from "../../images/zalo.png"; // Đường dẫn icon Zalo
import support from "../../images/support.png";

const SupportContainer = styled.div`
  position: relative;
  width: 300px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  font-family: Arial, sans-serif;

  h2 {
    font-size: 22px;
    color: #333;
    margin: 15px 0;
  }

  p {
    color: #666;
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -5px;
  right: -10px;
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #ff5722;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 200px;
    height: 200px;
  }
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;

  &:first-of-type {
    background-color: #ff5722;
  }

  &:last-of-type {
    background-color: #0078ff;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const SupportForOwner = ({ onClose }) => {
  return (
    <SupportContainer>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <IconContainer>
        <img
          src={support} // URL hình ảnh hỗ trợ của bạn
          alt="Hỗ trợ chủ nhà"
        />
      </IconContainer>
      <h2>Hỗ trợ chủ nhà đăng tin</h2>
      <p>
        Nếu bạn cần hỗ trợ đăng tin, vui lòng liên hệ số điện thoại bên dưới:
      </p>
      <ContactButton href="tel:0817590805">
        <img src={phoneIcon} alt="phone" />
        ĐT: 0817590805
      </ContactButton>
      <ContactButton href="https://zalo.me/0817590805">
        <img src={zaloIcon} alt="zalo" />
        Zalo: 0817590805
      </ContactButton>
    </SupportContainer>
  );
};

export default SupportForOwner;
