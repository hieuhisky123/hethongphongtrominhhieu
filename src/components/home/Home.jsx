import React from "react";
import Hero from "./hero/Hero";
import styled from "styled-components";
import Freeshapping from "./freeShapping";
import RecentCard from "./recent/RecentCard";
import DecorPaner from "./decor";
import Sampledesign from "./samdesin";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Freeshapping />
      <RecentCard />
      <DecorPaner />
      <Sampledesign />
      {/* <Ourteam/> */}
      {/* <Awards /> */}
      {/* <Location /> */}
      {/* <Team /> */}
      {/* <Price /> */}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;
