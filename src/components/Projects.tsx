import { TiStarburst } from "react-icons/ti";
import ProjectCard from "./ProjectCard";
import Button from "./Button";

const Projects = () => {
  return (
    <div className="pl-30 mt-40">
      <div className="uppercase text-4xl flex items-center gap-2 mb-20">
        <TiStarburst size={40} />
        <div className="text-[#F5EEE6]">Selected projects</div>
      </div>
      <div className="text-[#F5EEE6] grid grid-cols-3 columns-3xs gap-25">
        <div className="col-start-1 col-end-3 col-span-1">
          <ProjectCard
            reverse={false}
            heading="Time-Table"
            desc="NextJS Development"
            img="https://images.unsplash.com/photo-1606327054469-cf9dd7162d6c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="col-start-1 col-end-3">
          <ProjectCard
            reverse={true}
            heading="Time-Table"
            desc="NextJS Development"
            img="https://images.unsplash.com/photo-1606327054469-cf9dd7162d6c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="col-start-2 col-end-4">
          <ProjectCard
          reverse={true}
            heading="Time-Table"
            desc="NextJS Development"
            img="https://images.unsplash.com/photo-1606327054469-cf9dd7162d6c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="col-start-2 col-end-5">
          <ProjectCard
            heading="Time-Table"
            desc="NextJS Development"
            img="https://images.unsplash.com/photo-1606327054469-cf9dd7162d6c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="col-start-1 col-end-3">
          <ProjectCard
            heading="Time-Table"
            desc="NextJS Development"
            img="https://images.unsplash.com/photo-1606327054469-cf9dd7162d6c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div className="flex gap-5 mt-14">
        <Button color="#F5EEE6" text="Contact me"/>
        <Button fill="#F5EEE6" color="black" text="See more projects"/>
      </div>
    </div>
  ); 
};

export default Projects;
