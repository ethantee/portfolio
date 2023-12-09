import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>R</li>
        <li>SQL</li>
        <li>C++</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Real-Time Route Recommendation System</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Asia Pacific University</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white grid" id="aboutMe">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
        <div>
          <img
            src="dark-cube.jpg"
            alt="About Me"
            width={1080}
            height={1080}
            style={{ borderRadius: "15px" }}
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-base text-justify lg:text-lg">
          I am a data enthusiast with a passion for data science, 
		  and I am currently pursuing a BSc (Hons) Computer Science degree majoring in Data Analytics.<br /><br />
          I have experience in data analytics and am always eager to learn new skills and take on new challenges and opportunities.
		  I am hardworking, kind and supportive, with excellent time management skills.
		  I enjoy working with others and overcoming challenges as a team, but I can also work independently and take initiative.
		  I believe I have the skills and experience needed to succeed in a data-related position.<br /><br />
          I am looking for an opportunity to develop professionally by applying my skills
		  to real-world projects and positively contributing to a dynamic and innovative organisation.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;