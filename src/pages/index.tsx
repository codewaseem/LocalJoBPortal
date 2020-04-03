import React from "react";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";
import bgImage from "../images/bg-header-mobile.svg";
import bgImageDesktop from "../images/bg-header-desktop.svg";
import jobLogo from "../images/insure.svg";

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
`;

const JobPost = styled.div`
  display: flex;
  position: relative;
  min-height: 175px;
  background: white;
  padding: 25px;
  flex-wrap: wrap;
  --job-item-width: 100%;
  --separator: 1px;
  border-radius: 5px;
  box-shadow: 3px 5px 25px rgba(0, 0, 0, 0.2);

  > :first-child {
    border-bottom: var(--separator) solid var(--gray);
  }

  &.featured {
    border-left: 4px solid var(--dark-cyan);
  }

  > * {
    flex: 1 0 var(--job-item-width);
  }

  @media (min-width: 600px) {
    --job-item-width: 50%;
    --separator: 0px;
  }
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  header {
    color: var(--dark-cyan);
    font-size: 14px;
    font-weight: bold;
    margin-top: 20px;
  }

  > * {
    margin: 10px 0px;
  }
  > footer {
    color: hsl(180, 8%, 52%);
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 20px;

    > span:not(:first-child)::before {
      content: "•";
      display: inline-block;
      margin: auto 10px;
      color: var(--gray);
    }
  }
`;

const JobTags = styled.div``;

const Logo = styled.img`
  width: 50px;
  position: absolute;
  top: -25px;
`;

const CompanyName = styled.span`
  display: inline-block;
  margin-right: 20px;
`;

const Title = styled.h3`
  color: var(--very-dark-gray-cyan);
`;

const Tag = styled.span`
  display: inline-block;
  text-transform: uppercase;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  height: 25px;
  line-height: 20px;
  font-size: smaller;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const NewTag = styled(Tag)`
  background: var(--dark-cyan);
  ::after {
    content: "NEW!";
  }
`;

const FeaturedTag = styled(Tag)`
  background: var(--very-dark-gray-cyan);
  ::after {
    content: "featured";
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
        <JobPost className="featured">
          <JobDetails>
            <Logo src={jobLogo} />
            <header>
              <CompanyName>Loop Studios</CompanyName>
              <NewTag />
              <FeaturedTag />
            </header>
            <Title>Software Engineer</Title>
            <footer>
              <span>1d ago</span>
              <span>Full Time</span>
              <span>USA only</span>
            </footer>
          </JobDetails>
          <JobTags></JobTags>
        </JobPost>
      </Main>
    </AppContainer>
  );
};

export default observer(Index);
