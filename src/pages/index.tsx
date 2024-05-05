'use client'
import ViewContainer from "@/components/layout/viewContainer";
import Header from "@/components/main/header";
import About from "@/components/main/about";
import ExperienceSection from "@/components/main/ExperienceSection";
import Project from "@/components/main/Project";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <main
      className='dark:bg-[#1a1a1e] min-h-screen'
    >
      <Navbar/>
      <ViewContainer className="max-w-[1280px]  w-[95%] md:w-11/12 lg:w-10/12 mx-auto">
        <Header />
        <About />
        <ExperienceSection />
        <Project />
      </ViewContainer>
      <hr className=" w-10/12 max-w-[1280px] mx-auto my-20"/>
        <Footer/>
    </main>
  );
}
