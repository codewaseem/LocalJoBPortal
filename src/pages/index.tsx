import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";
import bgImage from "../images/bg-header-mobile.svg";
import bgImageDesktop from "../images/bg-header-desktop.svg";
import JobPost from "../components/JobPost";
import AppliedFilters from "../components/AppliedFilters";
import SEO from "../components/Seo";

const jobs = [
  {
    id: 1,
    company: "Photosnap",
    logo: require("../images/photosnap.svg"),
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    company: "Manage",
    logo: require("../images/manage.svg"),
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: require("../images/account.svg"),
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: require("../images/myhome.svg"),
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: require("../images/loop-studios.svg"),
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "FullStack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: require("../images/faceit.svg"),
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: require("../images/shortly.svg"),
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: require("../images/insure.svg"),
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue, Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: require("../images/eyecam-co.svg"),
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: require("../images/the-air-filter-company.svg"),
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

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
  position: relative;
  max-width: 960px;
  margin: auto;
  width: 100%;

  flex: 1;
  > * {
    background: white;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);
  }
  > :not(:last-of-type) {
    margin-bottom: 45px;
  }

  > .filters-section {
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
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <AppContainer>
      <SEO />
      <Header>
        <h1 className="sr-only">Job Portal Website.</h1>
        <picture>
          <source media="(min-width: 600px)" srcSet={bgImageDesktop} />
          <HeaderImage width="100%" src={bgImage} alt="" />
        </picture>
      </Header>
      <Main>
        {filters.length > 0 && (
          <AppliedFilters
            className="filters-section"
            filters={filters}
            onClearAll={() => setFilters([])}
            onClearFilter={(filter) => {
              let index = filters.indexOf(filter);
              setFilters([
                ...filters.slice(0, index),
                ...filters.slice(index + 1),
              ]);
            }}
          />
        )}
        {jobs
          .filter((job) => {
            let keywords = [...(job.tools || []), ...(job.languages || [])];
            if (filters.length == 0) return true;
            let select = false;
            keywords.forEach((keyword) => {
              if (filters.includes(keyword)) {
                select = true;
              }
            });
            return select;
          })
          .map((jobPost, i) => (
            <JobPost
              style={{
                marginTop: i == 0 ? "45px" : "0",
              }}
              onFilterClick={(filter) =>
                setFilters(Array.from(new Set(filters).add(filter)))
              }
              onOpenClick={console.log}
              key={i}
              post={{
                ...jobPost,
                keywords: [
                  ...(jobPost.languages || []),
                  ...(jobPost.tools || []),
                ],
              }}
            />
          ))}
      </Main>
    </AppContainer>
  );
};

export default observer(Index);
