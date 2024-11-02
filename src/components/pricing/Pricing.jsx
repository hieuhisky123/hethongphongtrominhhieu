import React from "react";
import styled from "styled-components";
import search from "../../acsset/slice/search1.png";
import sam from "../../acsset/slice/templatephongtam.jpg";
import sam1 from "../../acsset/slice/sam1.png";
import sam2 from "../../acsset/slice/templatephongbep.webp";
import sam3 from "../../acsset/slice/templateden.jpg";
import classic from "../../acsset/slice/templatenhatamcd.jpg";
import classic1 from "../../acsset/slice/templatephongbepcd.png";
import classic2 from "../../acsset/slice/templatedencd.jpg";
import elegan from "../../acsset/slice/templatephongtamtl.jpg";
import elegan2 from "../../acsset/slice/templatephongbeptl.jpg";
import elegan3 from "../../acsset/slice/templatedentl.jpg";

import dd1 from "../../acsset/slice/dd1.png";
import { Tabs } from "antd";
import { useState } from "react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("1");

  const onChange = (key) => {
    setActiveTab(key);
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Sang trọng",
      children: (
        <TextConten>
          <p>
            Thiết kế phòng trọ sang trọng kết hợp giữa sự tinh tế và tính tiện
            dụng, sử dụng các vật liệu cao cấp như đá cẩm thạch, gỗ tự nhiên, và
            kim loại sáng bóng. Hệ thống chiếu sáng tinh tế, bố trí rộng rãi,
            cùng với các chi tiết tùy chỉnh như nội thất thiết kế riêng tạo nên
            không gian vừa thoải mái vừa mang lại cảm giác đẳng cấp và lâu bền.
          </p>{" "}
        </TextConten>
      ),
    },
    {
      key: "2",
      label: "Cổ điển",
      children: (
        <TextConten>
          <p>
            {" "}
            Thiết kế phòng trọ cổ điển toát lên vẻ đẹp vượt thời gian, được đặc
            trưng bởi các vật liệu cao cấp, chi tiết tinh xảo và bảng màu ấm áp.
            Các đặc điểm như phào chỉ trang trí, sàn gỗ tự nhiên và nội thất cổ
            điển mang đến sự sang trọng và quyến rũ. Những yếu tố truyền thống
            như đèn chùm, đồ trang trí cổ và lò sưởi lớn góp phần tạo nên không
            gian ấm cúng, trong khi cách bố trí đối xứng mang lại sự cân bằng và
            hài hòa. Phong cách này nhấn mạnh vào sự thoải mái và tinh xảo, giúp
            mỗi không gian vừa sang trọng vừa gần gũi. Thiết kế cổ điển tôn vinh
            giá trị lịch sử và nghệ thuật, đảm bảo không gian luôn phong cách và
            hữu dụng qua nhiều thế hệ.
          </p>
        </TextConten>
      ),
    },
    {
      key: "3",
      label: "Tinh tế",
      children: (
        <TextConten>
          <p>
            Thiết kế phòng trọ tinh tế tập trung vào sự đơn giản và sang trọng,
            với các đường nét gọn gàng, bảng màu trung tính và vật liệu cao cấp.
            Phong cách này sử dụng nội thất tối giản và trang trí thanh lịch,
            tạo nên không gian yên bình. Các cửa sổ lớn cho phép ánh sáng tự
            nhiên tràn vào, tăng thêm cảm giác rộng rãi. Những chi tiết tinh tế
            như tranh nghệ thuật trang nhã và đèn trang trí phong cách làm tăng
            thêm sức hấp dẫn mà không làm rối mắt. Sự chú trọng vào tính tiện
            dụng đảm bảo mỗi chi tiết đều có công năng riêng, đồng thời duy trì
            tính thẩm mỹ, tạo nên không gian hài hòa mang đậm chất sang trọng
            hiện đại và vẻ đẹp vượt thời gian.
          </p>
        </TextConten>
      ),
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "1":
        return samarr.map((item, index) => (
          <Allsyteam key={index}>
            <Hover>
              <HoverImg>
                <img src={item.img} />
              </HoverImg>
            </Hover>
            <p>{item.title}</p>
            <h1>{item.conten}</h1>
            <span>{item.des}</span>
            <button>------ Read More</button>
          </Allsyteam>
        ));
      case "2":
        return samadd1.map((item, index) => (
          <Allsyteam key={index}>
            <Hover>
              <HoverImg>
                <img src={item.img} />
              </HoverImg>
            </Hover>
            <p>{item.title}</p>
            <h1>{item.conten}</h1>
            <span>{item.des}</span>
            <button>------ Read More</button>
          </Allsyteam>
        ));
      case "3":
        return samadd.map((item, index) => (
          <Allsyteam key={index}>
            <Hover>
              <HoverImg>
                <img src={item.img} />
              </HoverImg>
            </Hover>
            <p>{item.title}</p>
            <h1>{item.conten}</h1>
            <span>{item.des}</span>
            <button>------ Read More</button>
          </Allsyteam>
        ));
      default:
        return "";
    }
  };

  return (
    <Wapper>
      <Container>
        <TitlrBlog>
          <Titlesample>
            <h1>Mẫu Thiết Kế Nội Thất</h1>
            <span>
              Khám phá những góc nhìn của chúng tôi về các xu hướng thiết kế mới
              nhất và kỹ thuật sáng tạo.
              {/* <p>massa amet purus gravida quis blandit.</p> */}
            </span>
          </Titlesample>
          <Search>
            <Liner>
              {/* <input /> */}
              {/* <img src={search} /> */}
            </Liner>
          </Search>
        </TitlrBlog>

        <Sample>
          <SampleLeft>{renderTabContent()}</SampleLeft>

          <SampleRight>
            <img src={sam1} />
            <h1>phong cách thiết kế</h1>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </SampleRight>
        </Sample>
      </Container>
    </Wapper>
  );
};

export default Pricing;
const samarr = [
  {
    img: sam,
    title: "Ngày 14 tháng 9, 2024 bởi HomeStyler",
    conten: "Thiết Kế Phòng Tắm Sang Trọng",
    des: "Phòng tắm sang trọng không chỉ là một không gian chức năng; đó là nơi thư giãn và hòa quyện giữa phong cách và sự thoải mái. Để tạo nên bầu không khí này, mỗi yếu tố thiết kế cần được lựa chọn cẩn thận, từ vật liệu đến bố cục và trang trí. Nền tảng của một phòng tắm sang trọng thường bắt đầu với bảng màu tinh tế. Các tông màu trung tính như ngà, be nhẹ hoặc xám nhạt thường được sử dụng để mang lại cảm giác yên bình và thanh lịch. Những màu sắc này không chỉ giúp không gian trông rộng rãi hơn mà còn là nền hoàn hảo cho các điểm nhấn sang trọng. Đối với những ai thích phong cách táo bạo hơn, các gam màu đậm như xám than, xanh hải quân hoặc xanh lục bảo có thể kết hợp với các phụ kiện bằng vàng hoặc đồng thau, mang lại vẻ đẹp xa hoa và lộng lẫy cho căn phòng.",
  },
  {
    img: sam2,
    title: "Ngày 18 tháng 9, 2024 bởi HomeStyler",
    conten: "Ý Tưởng Cho Nhà Bếp Sang Trọng",
    des: "Thiết kế nhà bếp sang trọng là sự kết hợp hoàn hảo giữa chức năng, phong cách và sự tinh tế, tạo nên một không gian không chỉ là trái tim của ngôi nhà mà còn toát lên vẻ thanh lịch. Một nhà bếp sang trọng thường bắt đầu với bảng màu được lựa chọn kỹ lưỡng để tạo nên phong cách tổng thể. Các tông màu trung tính như trắng, be, hoặc xám nhạt là lựa chọn phổ biến cho vẻ đẹp hiện đại và tinh tế, tạo nền sạch sẽ để làm nổi bật các yếu tố thiết kế khác. Để tạo điểm nhấn táo bạo và ấn tượng hơn, những sắc màu đậm như xanh hải quân, xanh lục bảo, hoặc đen nhám có thể được thêm vào để tăng chiều sâu và sự phong phú cho không gian. Những màu sắc này thường được kết hợp với các điểm nhấn kim loại như vàng, đồng thau hoặc thép không gỉ, mang lại vẻ đẹp bền bỉ và cao cấp cho nhà bếp.",
  },
  {
    img: sam3,
    title: "Ngày 20 tháng 9, 2024 bởi HomeStyler",
    conten: "Vai Trò Của Ánh Sáng Trong Căn Phòng Của Bạn",
    des: "Ánh sáng đóng vai trò quan trọng trong việc tạo nên không gian sang trọng cho bất kỳ ngôi nhà nào, làm thay đổi cả vẻ đẹp thẩm mỹ và chức năng của không gian. Một hệ thống ánh sáng được thiết kế tốt có thể làm tăng vẻ thanh lịch của căn phòng, làm nổi bật các chi tiết kiến trúc và tạo nên không khí ấm cúng, dễ chịu. Ánh sáng sang trọng không chỉ là về độ sáng; mà là sự kết hợp các lớp ánh sáng để vừa đáp ứng nhu cầu sử dụng vừa mang đến phong cách. Dưới đây là cách ánh sáng sang trọng có thể nâng tầm sự tinh tế cho ngôi nhà của bạn.",
  },
];
const samadd = [
  {
    img: elegan,
    title: "Ngày 20 tháng 9, 2024 bởi HomeStyler",
    conten: "Thiết Kế Phòng Tắm Thanh Lịch",
    des: "Thiết kế phòng tắm thanh lịch kết hợp giữa sự sang trọng và chức năng, tạo nên một không gian thư giãn yên bình. Các đặc điểm chính bao gồm bảng màu nhẹ nhàng như trắng và các tông màu pastel, được kết hợp với các vật liệu cao cấp như đá cẩm thạch hoặc đá granite. Bồn tắm độc lập và tủ lavabo tinh tế làm tăng thêm vẻ sang trọng, trong khi các chi tiết mạ đồng thau hoặc chrome bóng bẩy làm tôn lên phong cách tổng thể. Hệ thống chiếu sáng tinh tế, bao gồm đèn treo tường và đèn tạo không khí, mang đến ánh sáng ấm áp. Các yếu tố trang trí như hoa tươi hoặc tranh nghệ thuật trang nhã tạo thêm không gian ấm cúng, đảm bảo phòng tắm không chỉ là nơi sử dụng mà còn là chốn nghỉ ngơi yên bình khỏi cuộc sống thường ngày.",
  },
  {
    img: elegan2,
    title: "Ngày 19 tháng 9, 2024 bởi HomeStyler",
    conten: "Nhà Bếp Thanh Lịch Thể Hiện Phong Cách Riêng Của Bạn",
    des: "Thiết kế nhà bếp thanh lịch kết hợp sự tinh tế với tính thực tiễn, với tủ bếp kiểu dáng hiện đại và vật liệu cao cấp. Bảng màu trung tính, kết hợp với các điểm nhấn nhẹ nhàng, tạo nên bầu không khí hài hòa. Mặt bàn bếp bằng đá cẩm thạch hoặc thạch anh không chỉ gia tăng sự tiện dụng mà còn mang lại vẻ sang trọng. Đèn treo được bố trí hợp lý chiếu sáng khu vực làm việc, trong khi kệ mở trưng bày các bộ đồ ăn trang nhã. Đảo bếp lớn vừa là nơi chuẩn bị thức ăn vừa là nơi tụ họp, khuyến khích sự tương tác. Các chi tiết trang trí như thảo mộc tươi hoặc nghệ thuật tinh tế góp phần tạo không gian ấm cúng, khiến nhà bếp không chỉ là nơi nấu ăn mà còn là không gian tuyệt đẹp để giải trí và gắn kết gia đình.",
  },
  {
    img: elegan3,
    title: "Ngày 18 tháng 9 năm 2022 bởi HomeStyler",
    conten: "Biến không gian sống của bạn trở nên tinh tế hơn với đèn pendant",
    des: "Đèn pendant sang trọng mang đến một chút tinh tế cho bất kỳ không gian nào, vừa là yếu tố chức năng vừa là yếu tố trang trí. Có nhiều kiểu dáng khác nhau, từ tối giản đến cầu kỳ, những thiết bị chiếu sáng này nâng cao bầu không khí của căn phòng. Việc lựa chọn các chất liệu như thủy tinh, đồng, hoặc kim loại bóng giúp nâng cao tính thẩm mỹ, trong khi vị trí đặt đèn hợp lý trên bàn ăn hoặc đảo bếp tạo ra các điểm nhấn. Các tùy chọn có thể điều chỉnh độ sáng cho phép ánh sáng được điều chỉnh theo nhu cầu, tạo ra bầu không khí hoàn hảo cho bất kỳ dịp nào. Với thiết kế phong cách và tính linh hoạt của chúng, đèn pendant sang trọng không chỉ làm sáng không gian mà còn góp phần vào sức hấp dẫn và cá tính tổng thể của một ngôi nhà.",
  },
];
const samadd1 = [
  {
    img: classic,
    title: "Ngày 21 tháng 9 năm 2024 bởi HomeStyler",
    conten: "Ý tưởng cho phòng tắm cổ điển",
    des: "Thiết kế phòng tắm cổ điển tỏa ra vẻ đẹp thanh lịch và quyến rũ vượt thời gian, làm cho nó trở thành lựa chọn hoàn hảo cho những ai yêu thích thẩm mỹ truyền thống. Chìa khóa để tạo ra một phòng tắm cổ điển nằm ở việc lựa chọn cẩn thận các thiết bị, vật liệu và màu sắc gợi lên cảm giác lịch sử và sự tinh tế. Một trong những điểm nhấn nổi bật của phòng tắm cổ điển là bồn tắm chân kiểu cổ, là điểm nhấn tuyệt đẹp. Những bồn tắm đứng này không chỉ mang đến trải nghiệm tắm sang trọng mà còn thêm phần hấp dẫn vintage. Khi kết hợp với vòi nước gắn sàn hoặc vòi kiểu cổ điển, bồn tắm trở thành một món đồ nổi bật, nâng cao bầu không khí tổng thể của căn phòng.",
  },
  {
    img: classic1,
    title: "Ngày 19 tháng 9 năm 2024 bởi HomeStyler",
    conten: "Nhà bếp là trái tim của ngôi nhà",
    des: "Thiết kế nhà bếp cổ điển gợi lên sự ấm áp và vẻ đẹp vượt thời gian, làm cho nó trở thành trái tim của ngôi nhà. Đặc trưng bởi các tủ bếp phong phú, thường có tông màu gỗ đậm hoặc màu pastel nhẹ nhàng, một nhà bếp cổ điển tỏa ra bầu không khí chào đón. Tủ bếp được thiết kế theo yêu cầu với các đường viền chi tiết và lớp hoàn thiện cổ điển làm tăng thêm sức hấp dẫn, mang lại vẻ đẹp và chức năng. Kệ mở có thể được tích hợp để trưng bày đồ sứ tinh xảo hoặc dụng cụ nấu ăn cổ điển, thêm một chút cá tính cho trang trí.",
  },
  {
    img: classic2,
    title: "Ngày 16 tháng 9 năm 2024 bởi HomeStyler",
    conten: "Đèn cổ điển châu Âu là thiết kế vượt thời gian",
    des: "Trang trí chiếu sáng cổ điển châu Âu mang đến không khí tinh tế và vẻ đẹp vượt thời gian cho bất kỳ ngôi nhà nào. Đèn chùm với thiết kế phức tạp, thường được làm từ pha lê hoặc sắt rèn, là điểm nhấn tuyệt đẹp trong phòng khách và khu vực ăn uống, tỏa ra ánh sáng ấm áp và mời gọi. Đèn tường với lớp hoàn thiện cổ điển có thể làm tăng thêm vẻ đẹp cho các hành lang hoặc lối vào, tạo thêm tính cách và chiều sâu. Đèn pendant theo phong cách vintage, trang trí với các chi tiết cầu kỳ, hoàn hảo cho nhà bếp hoặc góc ăn sáng, kết hợp chức năng với vẻ đẹp. Việc sử dụng ánh sáng dịu dàng, ấm áp tạo ra bầu không khí ấm cúng, trong khi những chiếc đèn sang trọng với chao vải cung cấp thêm ánh sáng. Việc kết hợp các yếu tố chiếu sáng cổ điển này không chỉ nâng cao tính thẩm mỹ tổng thể mà còn gợi lên cảm giác về lịch sử và sự sang trọng trong toàn bộ ngôi nhà.",
  },
];
const samright = [
  {
    image: sam1,
  },
];
const Wapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
`;
const Container = styled.div`
  /* background: #dfcfb8; */
`;
const TitlrBlog = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background: #dfcfb8;
  padding-top: 70px;
`;
const Titlesample = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h1 {
    color: #000;
    text-align: center;
    font-family: "Work Sans";
    font-size: 52px;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
  span {
    color: var(--Main-Colors-Gray-4, #292929);
    font-size: 18px;
    text-align: center;
    font-weight: 200;
    line-height: 100%;
  }
  p {
    color: var(--Main-Colors-Gray-4, #292929);
    font-size: 18px;
    text-align: center;
    font-weight: 200;
    line-height: 100%;
    padding: 10px;
  }
`;
const Search = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const Liner = styled.div`
  width: 600px;
  height: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffffd6;
  input {
    width: 100%;
    border: 1px solid #fff;
    backdrop-filter: blur(10px);
    color: #000;
    padding: 10px;
    background: #cccc;
  }
`;
const Sample = styled.div`
  width: 100%;
  margin-top: 80px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  @media screen and (min-width: 320px) and (max-width: 760px) {
    flex-direction: column-reverse;
  }
  &::after {
    content: "";
    position: absolute;
    top: -20%;
    left: 0;
    width: 100%;
    height: 600px;
    background: #dfcfb8;
    z-index: -1;
  }
`;
const SampleLeft = styled.div`
  width: 60%;
  flex-wrap: wrap;
  @media screen and (min-width: 320px) and (max-width: 760px) {
    width: 100%;
  }
`;
const SampleRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px 10px;
  gap: 20px;
  overflow: hidden;
  width: 30%;
  @media screen and (min-width: 320px) and (max-width: 760px) {
    width: 100%;
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 18px;
    }
    span {
      font-size: 18px;
    }
  }
  img {
    aspect-ratio: 400/200;
    max-width: 100%;
  }
  h1 {
    color: #000;
    text-align: left;
    font-family: "Work Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;
const Allsyteam = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    width: 300px;
    background: #fff;
    color: #000;
    font-size: 24px;
    font-weight: 300;
  }
  p {
    color: #000;
    text-align: left;
    font-family: "Work Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  h1 {
    color: #000;
    text-align: left;
    font-family: "Work Sans";
    font-size: 32px;
    font-weight: 600;
    line-height: normal;
  }
  span {
    color: #000;
    text-align: left;
    font-family: "Work Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
  }
  img {
    aspect-ratio: 800/400;
    width: 100%;
    &:hover {
      transform: scale(1.05);
      transition: all 0.25s linear;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 760px) {
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 18px;
    }
    span {
      font-size: 18px;
    }
  }
`;
const Hover = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
  &:hover {
    img {
      transform: scale(1.05);
      transition: all 0.25s linear;
    }
  }
`;
const HoverImg = styled.div`
  overflow: hidden;
  img {
    aspect-ratio: 700/400;
    width: 100%;
  }
`;
const TextConten = styled.div`
  p {
    color: #9f9f9f;
    text-align: left;
    font-family: "Work Sans";
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
  }
`;
