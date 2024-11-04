import React, { useEffect } from "react";
import { list } from "../../data/Data";
import styled from "styled-components";
import pr1 from "../../../acsset/slice/pr1.png";
import li1 from "../../../acsset/slice/li1.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const RecentCard = ({ products }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wapper>
      <TitleWaper>
        <h1>Phòng Mới Cập Nhật</h1>
        <Spanet>
          <p>Xem Thêm</p>
          <Link to={"/product"}>
            <div>
              <img src={li1} alt="More Icon" />
            </div>
          </Link>
        </Spanet>
      </TitleWaper>
      <Container>
        {list?.slice(0, 4).map((item, index) => (
          <ContainerAll key={index}>
            <Link to={`/product/${item.id}`}>
              <img src={item.images[0]} alt={item.name} />
              <div>
                <h1>{item.name}</h1>
              </div>
              <p>{item.price}</p>
              <div>
                <button>{item.detail}</button>
              </div>
            </Link>
          </ContainerAll>
        ))}
      </Container>
    </Wapper>
  );
};

export default RecentCard;

// Styled Components
const Wapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
`;

const TitleWaper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  h1 {
    color: #081323;
    font-family: "Work Sans", sans-serif;
    font-size: 36px;
    font-weight: 600;
    text-align: center;
  }
  @media (max-width: 460px) {
    h1 {
      font-size: 24px;
    }
  }
`;

const Spanet = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-size: 18px;
    color: #4f4f4f;
    font-weight: 500;
    cursor: pointer;
  }
  img {
    width: 24px;
    transition: transform 0.25s;
  }
  &:hover img {
    transform: translateX(10px);
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding-top: 20px;
`;

const ContainerAll = styled.div`
  width: calc((100% - 60px) / 2);
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s;
  &:hover {
    transform: scale(1.05);
  }
  h1 {
    font-size: 20px;
    color: #292929;
    font-family: "Work Sans", sans-serif;
    margin-top: 10px;
  }
  p {
    font-size: 18px;
    color: #292929;
    font-family: "Work Sans", sans-serif;
    margin: 10px 0;
  }
  button {
    padding: 8px 12px;
    font-size: 16px;
    color: #dcb47a;
    border: 1px solid #dcb47a;
    border-radius: 5px;
    background-color: #f6fff6;
    cursor: pointer;
    transition: background-color 0.25s;
  }
  button:hover {
    background-color: #dcb47a;
    color: #fff;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 460px) {
    width: 100%;
  }
  @media (min-width: 460px) and (max-width: 760px) {
    width: calc(50% - 10px);
  }
`;
