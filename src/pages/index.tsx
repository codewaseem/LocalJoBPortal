import React from "react";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";
import bgImage from "../images/bg-header-mobile.svg";
import bgImageDesktop from "../images/bg-header-desktop.svg";
import jobLogo from "../images/insure.svg";
import JobPost, { JobPostProps } from "../components/JobPost";

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
  flex: 1;
  > :not(:last-of-type) {
    margin-bottom: 45px;
  }
`;

export const Index = () => {
  return (
    <AppContainer>
      <Header>
        <picture>
          <source media="(min-width: 600px)" srcSet={bgImageDesktop} />
          <HeaderImage width="100%" src={bgImage} alt="" />
        </picture>
      </Header>
      <Main>
        {Array(10)
          .fill(true)
          .map((_, i) => (
            <JobPost key={i} post={jobPost} />
          ))}
      </Main>
    </AppContainer>
  );
};

export default observer(Index);
