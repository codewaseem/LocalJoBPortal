import React from "react";
import styled from "@emotion/styled";

const JobPostDiv = styled.div`
  display: flex;
  position: relative;
  min-height: 175px;
  padding: 20px;

  flex-wrap: wrap;
  --job-item-width: 100%;
  --separator: 1px;
  --first-div-width: 100%;

  > .job-details {
    max-width: var(--first-div-width);
    border-bottom: var(--separator) solid var(--gray);

    &:hover .job-title,
    &:focus .job-title {
      color: var(--dark-cyan);
    }
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

const JobDetails = styled.a`
  text-decoration: none;
  border: 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;

    img {
      width: 75px;
      height: 75px;
      margin-right: 15px;
    }
  }

  header {
    color: var(--dark-cyan);
    font-size: 14px;
    font-weight: bold;
    margin-top: 15px;
  }

  > div > * {
    margin: 7px 0px;
  }

  footer {
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
  @media (max-width: 599px) {
    width: 50px;
    position: absolute;
    top: -25px;
  }
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

const FilterTag = styled.button`
  border: 0;
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  line-height: 20px;
  font-size: smaller;
  background: var(--light-cyan-table);
  color: var(--dark-cyan);
  height: fit-content;
  cursor: pointer;
  font-weight: bold;

  &:hover,
  &:focus {
    background: var(--dark-cyan);
    color: white;
  }
`;

type Post = {
  id: number;
  company: string;
  logo: string;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  keywords: string[];
  featured: boolean;
  new: boolean;
};

export type JobPostProps = React.AllHTMLAttributes<any> & {
  post: Post;
  onOpenClick?: (post: Post) => void;
  onFilterClick?: (keyword: string) => void;
};

const JobPost: React.FC<JobPostProps> = ({
  post,
  onOpenClick = () => {},
  onFilterClick = () => {},
  ...props
}) => {
  return (
    <JobPostDiv
      {...props}
      key={post.id}
      className={post.featured ? "featured" : ""}
    >
      <JobDetails
        className="job-details"
        onClick={() => {
          onOpenClick(post);
        }}
        href=""
        aria-label={`JOB ${post.role} at the company named ${post.company}. Click for more details`}
      >
        <Logo src={post.logo} alt="" />
        <div>
          <header>
            <CompanyName>{post.company}</CompanyName>
            {post.new && <NewTag />}
            {post.featured && <FeaturedTag />}
          </header>
          <Title className="job-title">{post.role}</Title>
          <footer>
            <span>{post.postedAt}</span>
            <span>{post.contract}</span>
            <span>{post.location}</span>
          </footer>
        </div>
      </JobDetails>
      <JobFilters>
        {post.keywords.map((keyword: string) => (
          <FilterTag
            aria-label={`Filter jobs by ${keyword}`}
            title={`Filter jobs by ${keyword}`}
            onClick={() => onFilterClick(keyword)}
            key={keyword}
          >
            {keyword}
          </FilterTag>
        ))}
      </JobFilters>
    </JobPostDiv>
  );
};

export default JobPost;
