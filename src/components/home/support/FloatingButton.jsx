import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import SupportForOwner from "./SupportContainer"; // Đảm bảo đường dẫn đúng
import { IoMdChatboxes } from "react-icons/io";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
  z-index: 1000;
`;

const FloatingIcon = styled.button`
  background-color: #c8bbbb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 100px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    color: black;
    font-size: 24px;
  }
`;

const Panel = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: -4px 0px 8px rgba(0, 0, 0, 0.2);
  animation: ${slideIn} 0.3s ease forwards;
  z-index: 1001;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Màu tối cho lớp phủ */
  z-index: 1000; /* Đảm bảo lớp phủ nằm phía dưới popup */
`;

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const closePanel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <FloatingContainer>
        <FloatingIcon onClick={togglePanel}>
          <IoMdChatboxes />
        </FloatingIcon>
      </FloatingContainer>

      {isOpen && (
        <>
          <Overlay onClick={closePanel} /> {/* Lớp phủ để làm tối trang */}
          <Panel>
            <SupportForOwner onClose={closePanel} />
          </Panel>
        </>
      )}
    </>
  );
};

export default FloatingButton;
