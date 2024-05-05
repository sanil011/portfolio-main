import { PathMapProps } from "@/components/layout/navbar";

export const getPathMap = function (): PathMapProps[] {
  return [
    {
      title: "Home",
      link: "/",
      isAvailable: true,
    },
    {
      title: "Project",
      link: "#project",
      isAvailable: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1HX9cX-ydqj4ohSRoM7ijqTQdcLc5wgv_/view",
      isAvailable: true,
    },
  ];
};
