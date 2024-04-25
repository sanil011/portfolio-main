import ViewContainer from "@/components/layout/viewContainer";
import Header from "@/components/main/header";
import About from "@/components/main/about";
import ExperienceSection from "@/components/main/ExperienceSection";
import Project from "@/components/main/Project";


export default function Home() {
  return (
    <main
      className=''
    >
      <ViewContainer>
        <Header />
        <About />
        <ExperienceSection />
        <Project/>
      </ViewContainer>
    </main>
  );
}
