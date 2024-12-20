import React, { useState } from "react";
import styled from "styled-components";
import Back from "../common/Back";
import "../home/recent/recent.css";
import img from "../images/contact.jpg";
import icon1 from "../images/Armchair.png";
import icon2 from "../images/Roundchair.png";
import icon3 from "../images/Stool.png";
import icon4 from "../images/Wardrobe.png";
import { FaFacebookMessenger, FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Hàm xử lý khi người dùng nhập liệu
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Hàm kiểm tra email hợp lệ
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Hàm xử lý khi gửi form
  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    // Kiểm tra Full name
    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full name is required.";
    }

    // Kiểm tra Phone number
    if (!formData.phoneNumber.trim()) {
      formErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      formErrors.phoneNumber = "Phone number must be numeric.";
    }

    // Kiểm tra Email
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Invalid email address.";
    }

    // Kiểm tra Message
    if (!formData.message.trim()) {
      formErrors.message = "Message is required.";
    }

    // Nếu không có lỗi thì submit form
    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted successfully!");
    } else {
      setErrors(formErrors);
    }
  };
  return (
    <>
      <section className="blog-out mb">
        <Back
          title="LIÊN HỆ"
          cover={img}
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          icon4={icon4}
        />
        <ContactContainer>
          {/* <FormSection>
            <Title>
              <h1>Your Information</h1>
            </Title>
            <Title>Your Information</Title>
            <form onSubmit={handleSubmit}>
              <InputWrapper>
                <label>Full name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
              </InputWrapper>

              <InputWrapper>
                <label>Phone number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && (
                  <ErrorText>{errors.phoneNumber}</ErrorText>
                )}
              </InputWrapper>

              <InputWrapper>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <ErrorText>{errors.email}</ErrorText>}
              </InputWrapper>

              <InputWrapper>
                <label>Leave a message</label>
                <textarea
                  name="message"
                  placeholder="Leave a message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <ErrorText>{errors.message}</ErrorText>}
              </InputWrapper>

              <SubmitButton type="submit">Send a message</SubmitButton>
            </form>
          </FormSection> */}
          <ContactInfoSection>
            <ContactInfo>
              <h2>Liên Hệ : Mr. Hiếu</h2>
              <ContactIcons>
                <IconLink
                  href="https://zalo.me/0817590805"
                  target="_blank"
                  aria-label="Zalo"
                >
                  <SiZalo />
                </IconLink>
                <IconLink
                  href="https://m.me/100049668137817"
                  target="_blank"
                  aria-label="Messenger"
                >
                  <FaFacebookMessenger />
                </IconLink>
                <IconLink
                  href="https://www.facebook.com/profile.php?id=100049668137817"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </IconLink>
              </ContactIcons>
              <PhoneNumber>Phone: 0817590805</PhoneNumber>
            </ContactInfo>

            <ContactInfo>
              <h2>Liên Hệ : Mr. An</h2>
              <ContactIcons>
                <IconLink
                  href="https://zalo.me/0938739530"
                  target="_blank"
                  aria-label="Zalo"
                >
                  <SiZalo />
                </IconLink>
                <IconLink
                  href="https://m.me/61561736154560"
                  target="_blank"
                  aria-label="Messenger"
                >
                  <FaFacebookMessenger />
                </IconLink>
                <IconLink
                  href="https://www.facebook.com/profile.php?id=61561736154560&mibextid=LQQJ4d"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </IconLink>
              </ContactIcons>
              <PhoneNumber>Phone: 0938739530</PhoneNumber>
            </ContactInfo>
          </ContactInfoSection>
          <MapSection>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.865728361669!2d106.63667547480551!3d10.821585989329941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752965bc5d5347%3A0x1bd8bad85f701812!2zMTc4IFBo4bqhbSBWxINuIELhuqFjaCwgUGjGsOG7nW5nIDE1LCBUw6JuIELDrG5oLCBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1730612928172!5m2!1svi!2s"
              width="600"
              height="450"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapSection>
        </ContactContainer>
      </section>
    </>
  );
};
export default Contact;
const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  max-width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// const FormSection = styled.div`
//   width: 45%;
//   @media (max-width: 768px) {
//     width: 100%;
//     margin-bottom: 30px;
//   }
//   form {
//     display: flex;
//     flex-direction: column;
//   }
// `;

// const Title = styled.h2`
//   padding: 10px;
//   h1 {
//     font-size: 28px;
//     font-weight: bold;
//     margin-bottom: 20px;
//   }
//   @media screen and (min-width: 320px) and (max-width: 460px) {
//     h1 {
//       font-size: 18px;
//       text-align: center;
//     }
//   }
//   @media screen and (min-width: 460px) and (max-width: 760px) {
//     h1 {
//       font-size: 24px;
//       text-align: center;
//     }
//   }
// `;

// const InputWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;

//   label {
//     font-size: 16px;
//     margin-bottom: 5px;
//   }

//   input,
//   textarea {
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     font-size: 16px;
//   }
//   textarea {
//     height: 100px;
//     resize: none;
//   }
// `;

// const SubmitButton = styled.button`
//   background-color: #333;
//   color: #fff;
//   border: none;
//   padding: 15px;
//   font-size: 16px;
//   cursor: pointer;
//   border-radius: 5px;

//   &:hover {
//     background-color: #555;
//   }
// `;

const ContactInfoSection = styled.div`
  width: 45%;
  text-align: center;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ContactInfo = styled.div`
  padding: 20px 0;
`;

const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
`;

const IconLink = styled.a`
  font-size: 24px;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #007aff;
  }
`;

const PhoneNumber = styled.p`
  font-size: 16px;
  color: #333;
  margin-top: 10px;
`;

const MapSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;
