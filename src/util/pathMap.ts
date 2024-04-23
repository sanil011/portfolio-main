import { PathMapProps } from "@/components/layout/navbar";

export const getPathMap = function (): PathMapProps[] {
  return [
    {
      title: "Home",
      link: '/',
      isAvailable: true,
    },
    {
      title: "Project",
      link: '#project',
      isAvailable: true,
    },
    {
      title: "Experience",
      link: 'experience',
      isAvailable: true,
    },
  ];
};
