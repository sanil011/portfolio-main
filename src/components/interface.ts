export interface ProjectProps {
    id: string;
  pic: string;
  name: string;
  techStack: string[];
  githubLink: string;
  hostedLink: string;
  about: string;
  time:string
}

export interface OtherProjectProps {
  id: string,
  description:string,
  title: string;
  github: string;
  link: string;
  tech: string[];
}
