import Project from "../components/Project"
import { myProjects } from "../constants"
const Projects = () => {
  return (
    <section className="relative c-space mt-25 pb-50">
        <h2 className="text-heading">My Selected Projects</h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-700
        to-transparent mt-12 h-[1px] w-full " />
        {myProjects.map((project)=>
            (<Project key={project.id} {...project} />))}
            <img className="fixed "/>
    </section>
  )
}

export default Projects