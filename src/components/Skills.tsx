import { Badge } from "@/components/ui/badge"

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", 
  "Express", "MongoDB", "SQL", "Git", "Responsive Design", "UI/UX"
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

