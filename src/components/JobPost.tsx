import React from "react";
import styled from "@emotion/styled";

const JobPostDiv = styled.div`
  display: flex;
  position: relative;
  min-height: 175px;
  max-width: 960px;
  margin: auto;
  background: white;
  padding: 25px;
  flex-wrap: wrap;
  --job-item-width: 100%;
  --separator: 1px;
  --first-div-width: 100%;
  border-radius: 5px;
  box-shadow: 3px 5px 25px rgba(0, 0, 0, 0.2);

  > :first-of-type {
    max-width: var(--first-div-width);
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
    --first-div-width: max-content;
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

    > span:not(:first-of-type)::before {
      content: "•";
      display: inline-block;
      margin: auto 10px;
      color: var(--gray);
    }
  }
`;

const JobFilters = styled.div`
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;

  > * {
    margin: 5px;
  }

  @media (min-width: 600px) {
    justify-content: flex-end;
  }
`;

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
    margin-bottom: 10px;
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

const FilterTag = styled.span`
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  line-height: 20px;
  font-size: smaller;
  background: var(--light-cyan-table);
  color: var(--dark-cyan);
  height: fit-content;
  cursor: pointer;
`;

export type JobPostProps = React.AllHTMLAttributes<any> & {
  post: {
    companyName: string;
    id: string | number;
    companyLogo: any;
    jobTitle: string;
    postedOn: string;
    workingHours: string;
    jobLocation: string;
    keywords: string[];
    featured: boolean;
    new: boolean;
  };
};

const JobPost: React.FC<JobPostProps> = ({ post }) => {
  return (
    <JobPostDiv key={post.id} className={post.featured ? "featured" : ""}>
      <JobDetails>
        <Logo src={post.companyLogo} />
        <header>
          <CompanyName>{post.companyName}</CompanyName>
          {post.new && <NewTag />}
          {post.featured && <FeaturedTag />}
        </header>
        <Title>{post.jobTitle}</Title>
        <footer>
          <span>{post.postedOn}</span>
          <span>{post.workingHours}</span>
          <span>{post.jobLocation}</span>
        </footer>
      </JobDetails>
      <JobFilters>
        {post.keywords.map((keyword: string) => (
          <FilterTag key={keyword}>{keyword}</FilterTag>
        ))}
      </JobFilters>
    </JobPostDiv>
  );
};

export default JobPost;