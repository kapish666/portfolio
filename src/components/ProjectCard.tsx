
const ProjectCard = ({heading,desc,img,reverse}:{heading:string,desc:string,img:string,reverse:boolean}) => {
  return (
    <div className={`flex items-center gap-4 ${reverse && "flex-row-reverse"}`}>
      <div>
        <div className="big text-6xl ">{heading}</div>
        <div className="regularFont mt-1">{desc}</div>
      </div>
      <div className="overflow-hidden w-100 h-50 bg-center flex items-center justify-center backdrop-contrast-125">
        <img src={img} alt={heading} className="grayscale brightness-55 contrast-160" />
      </div>
    </div>
  )
}

export default ProjectCard
