import React, { useEffect } from "react";
import styled from "styled-components";
import about3 from "../images/about2-bg-1.jpg";
import about2 from "../images/about2-bg-2.jpg";
import about1 from "../images/about2-bg-3.jpg";
import {
  FaLightbulb,
  FaTools,
  FaPencilRuler,
  FaHome,
  FaChair,
  FaTree,
  FaQuoteLeft,
} from "react-icons/fa";
import Ourteam from "../home/ourteam";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
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
    <Container>
      <TitleSection>
        <SubTitle>
          HỆ THỐNG CHO THUÊ PHÒNG TRỌ UY TÍN CHO SINH VIÊN TẠI TP.HCM
        </SubTitle>
        <MainTitle>
          Mang đến giải pháp nhà ở giá rẻ, sạch sẽ và tiện nghi cho sinh viên.{" "}
          <br />
        </MainTitle>
      </TitleSection>

      <ImageGallery>
        <GalleryImage src={about1} alt="Image 1" data-aos="fade-right" />
        <GalleryImage src={about2} alt="Image 2" />
        <GalleryImage src={about3} alt="Image 3" data-aos="fade-left" />
      </ImageGallery>

      <ServiceSection>
        <ServiceTitle data-aos="fade-left">Về Chúng Tôi</ServiceTitle>
        <ServiceGrid>
          <ServiceCard data-aos="fade-up-right">
            <ServiceIcon>
              <FaLightbulb />
            </ServiceIcon>
            <ServiceHeading>LẬP KẾ HOẠCH</ServiceHeading>
            <ServiceDescription>
              Hệ thống cho thuê phòng trọ sinh viên bắt đầu từ việc lên kế hoạch
              chi tiết, định hướng phong cách và tiêu chuẩn cho từng phòng. Yếu
              tố quan trọng bao gồm việc chọn màu sắc, nội thất và trang trí phù
              hợp với nhu cầu của sinh viên. Đảm bảo phòng có đầy đủ tiện nghi,
              sáng sủa và thoáng mát là ưu tiên hàng đầu. Việc đánh giá chất
              lượng định kỳ giúp duy trì sự hài lòng của sinh viên và đáp ứng
              được các yêu cầu từ phía khách thuê.
            </ServiceDescription>
            {/* <ServiceLink href="#">check our service →</ServiceLink> */}
          </ServiceCard>

          <ServiceCard data-aos="fade-up-left">
            <ServiceIcon>
              <FaPencilRuler />
            </ServiceIcon>
            <ServiceHeading>THIẾT KẾ PHÒNG TRỌ</ServiceHeading>
            <ServiceDescription>
              Thiết kế phòng trọ của hệ thống tập trung vào sự tiện nghi và
              thoải mái cho sinh viên. Không gian được bài trí hài hòa với màu
              sắc và nội thất phù hợp, mang lại cảm giác gần gũi như ở nhà. Bố
              trí ánh sáng, không gian học tập và khu vực nghỉ ngơi đều được
              tính toán để tạo nên môi trường lý tưởng cho việc học tập và sinh
              hoạt của sinh viên.
            </ServiceDescription>
            {/* <ServiceLink href="#">check our service →</ServiceLink> */}
          </ServiceCard>

          <ServiceCard data-aos="fade-down-right">
            <ServiceIcon>
              <FaTools />
            </ServiceIcon>
            <ServiceHeading>XÂY DỰNG VÀ HOÀN THIỆN</ServiceHeading>
            <ServiceDescription>
              Quá trình xây dựng và hoàn thiện phòng trọ bao gồm các công đoạn
              lắp đặt, trang trí và hoàn thiện nội thất. Đội ngũ thi công đảm
              bảo chất lượng vật liệu và tuân thủ nghiêm ngặt các tiêu chuẩn
              thiết kế, đáp ứng tiến độ để sẵn sàng đón sinh viên vào ở. Phòng
              trọ được chuẩn bị kỹ lưỡng nhằm tạo nên môi trường sống sạch sẽ,
              thoáng mát và an toàn cho sinh viên.
            </ServiceDescription>
            {/* <ServiceLink href="#">check our service →</ServiceLink> */}
          </ServiceCard>
        </ServiceGrid>

        <ServiceGrid data-aos="fade-down-left">
          <ServiceCard>
            <ServiceIcon>
              <FaHome />
            </ServiceIcon>
            <ServiceHeading>CẢI TẠO PHÒNG TRỌ</ServiceHeading>
            <ServiceDescription>
              Quá trình cải tạo phòng trọ giúp làm mới không gian sống, từ việc
              thay thế các vật liệu cũ hư hỏng cho đến cập nhật phong cách trang
              trí. Điều này không chỉ nâng cao tính thẩm mỹ mà còn đảm bảo tiện
              nghi, mang lại sự thoải mái cho sinh viên. Việc cải tạo giúp sinh
              viên có một môi trường sống sạch sẽ, an toàn, phù hợp với lối sống
              của họ.
            </ServiceDescription>
            {/* <ServiceLink href="#">check our service →</ServiceLink> */}
          </ServiceCard>

          <ServiceCard data-aos="flip-left">
            <ServiceIcon>
              <FaChair />
            </ServiceIcon>
            <ServiceHeading>NỘI THẤT PHÒNG TRỌ</ServiceHeading>
            <ServiceDescription>
              Bố trí nội thất phòng trọ là quá trình sắp xếp và bố trí các vật
              dụng một cách hợp lý và hài hòa. Điều này không chỉ tối ưu hóa
              không gian sử dụng mà còn tạo ra sự cân bằng và tiện nghi, mang
              lại cảm giác dễ chịu cho sinh viên. Thiết kế cẩn thận giúp không
              gian phòng vừa đẹp vừa tiện lợi, phục vụ tốt cho nhu cầu học tập
              và sinh hoạt hàng ngày.
            </ServiceDescription>
            {/* <ServiceLink href="#">check our service →</ServiceLink> */}
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>
              <FaTree />
            </ServiceIcon>
            <ServiceHeading>KHU VỰC NGOÀI TRỜI</ServiceHeading>
            <ServiceDescription>
              Không gian ngoài trời của hệ thống phòng trọ mang đến khu vực thư
              giãn thoáng mát, gần gũi với thiên nhiên. Sử dụng vật liệu bền bỉ,
              cây xanh và đồ nội thất ngoài trời, các khu vực này trở thành nơi
              lý tưởng để sinh viên thư giãn, học nhóm, hoặc tổ chức các buổi
              gặp gỡ, mang lại không khí trong lành và thoải mái.
            </ServiceDescription>
            {/* <ServiceLink href="#">check our service →</ServiceLink> */}
          </ServiceCard>
        </ServiceGrid>
      </ServiceSection>
      {/* <Ourteam /> */}
      <TestimonialSection>
        <TestimonialTitle data-aos="flip-left">
          Một số đánh giá từ khách hàng
        </TestimonialTitle>
        <TestimonialGrid>
          <TestimonialCard data-aos="flip-left">
            <FaQuoteLeft className="quote-icon" />
            <TestimonialText>
              Thiết kế phòng trọ thực sự ấn tượng, kết hợp hoàn hảo giữa phong
              cách và tính tiện dụng. Mỗi không gian đều được sắp xếp cẩn thận,
              tạo nên bầu không khí hài hòa, nâng cao sự thoải mái và tính thẩm
              mỹ.
            </TestimonialText>
            <TestimonialAuthor>CHÂU HOÀNG AN</TestimonialAuthor>
            <TestimonialInfo>Doanh Nhân - TP. Hồ Chí Minh</TestimonialInfo>
          </TestimonialCard>

          <TestimonialCard data-aos="flip-left">
            <FaQuoteLeft className="quote-icon" />
            <TestimonialText>
              Tôi hoàn toàn hài lòng với dịch vụ của hệ thống cho thuê phòng
              trọ. Sự chuyên nghiệp, sáng tạo và kỹ lưỡng trong từng chi tiết đã
              vượt qua kỳ vọng của tôi, mang đến một không gian đẹp đẽ, đúng với
              phong cách cá nhân của tôi.
            </TestimonialText>
            <TestimonialAuthor>VŨ THỊ HÀ THU</TestimonialAuthor>
            <TestimonialInfo>Sinh viên - Đà Nẵng</TestimonialInfo>
          </TestimonialCard>

          <TestimonialCard data-aos="flip-left">
            <FaQuoteLeft className="quote-icon" />
            <TestimonialText>
              Tôi không thể hài lòng hơn với dịch vụ mà đội ngũ đã cung cấp. Họ
              lắng nghe ý tưởng của tôi, đưa ra những gợi ý hữu ích và biến mong
              muốn của tôi thành hiện thực. Kết quả cuối cùng thật tuyệt vời và
              tiện lợi!
            </TestimonialText>
            <TestimonialAuthor>TRẦN QUANG HUY</TestimonialAuthor>
            <TestimonialInfo>Sinh viên - TP. Hồ Chí Minh</TestimonialInfo>
          </TestimonialCard>
        </TestimonialGrid>
      </TestimonialSection>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px;
  text-align: center;
`;

const TitleSection = styled.div`
  margin-bottom: 60px;
  margin-top: 100px;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  letter-spacing: 4px;
  color: #b5a191;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const MainTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #333;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding-top: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GalleryImage = styled.img`
  width: 30%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:nth-child(2) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ServiceSection = styled.section`
  margin-top: 80px;
`;

const ServiceTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
`;

const ServiceGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  width: 30%;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ServiceIcon = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const ServiceHeading = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const ServiceLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    color: #b5a191;
  }
`;

const TestimonialSection = styled.section`
  margin-top: 80px;
`;

const TestimonialTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
`;

const TestimonialGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  text-align: left;

  .quote-icon {
    font-size: 36px;
    color: #b5a191;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TestimonialText = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const TestimonialAuthor = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

const TestimonialInfo = styled.p`
  font-size: 14px;
  color: #999;
`;
