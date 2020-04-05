import React from "react";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";
import bgImage from "../images/bg-header-mobile.svg";
import bgImageDesktop from "../images/bg-header-desktop.svg";
import jobLogo from "../images/insure.svg";
import JobPost, { JobPostProps } from "../components/JobPost";
import AppliedFilters from "../components/AppliedFilters";

const jobPost = {
  companyName: "Loop Studios",
  id: "id",
  companyLogo: jobLogo,
  jobTitle: "Software Engineer",
  postedOn: "1d ago",
  workingHours: "Full Time",
  jobLocation: "USA only",
  keywords: ["JavaScript", "CSS", "HTML", "TypeScript"],
  featured: true,
  new: true,
};

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: var(--light-cyan-bg);
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: var(--dark-cyan);
`;

const HeaderImage = styled.img`
  width: 100%;
  max-height: 175px;
`;

const Main = styled.main`
  padding: 50px 20px;
  padding-top: 0px;

  flex: 1;
  > * {
    max-width: 960px;
    margin: auto;
    width: 100%;
    background: white;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);
  }
  position: relative;
  > :not(:last-of-type) {
    margin-bottom: 45px;
  }

  > :nth-of-type(1) {
    position: relative;
    z-index: 99;
    top: 0;
    transform: translate(0, -50%);
    margin-bottom: 0;
  }

  /* > :nth-child(2) {
    margin-top: 100px;
  } */
`;

export const Index = () => {
  return (
    <AppContainer>
      <Header>
        <h1 className="sr-only">Job Portal Website.</h1>
        <picture>
          <source media="(min-width: 600px)" srcSet={bgImageDesktop} />
          <HeaderImage width="100%" src={bgImage} alt="" />
        </picture>
      </Header>
      <Main>
        <AppliedFilters />
        {Array(10)
          .fill(true)
          .map((_, i) => (
            <JobPost
              onFilterClick={console.log}
              onOpenClick={console.log}
              key={i}
              post={jobPost}
            />
          ))}
      </Main>
    </AppContainer>
  );
};

export default observer(Index);
