import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import Typewriter from "typewriter-effect";

// Componente auxiliar para manejar el delay aleatorio por cada texto
const Type = ({ text, delay = 200, speed = 40, className = "" }: any) => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Generamos un delay base + un extra random para que no sea uniforme
    const timer = setTimeout(() => setStart(true), delay + Math.random() * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={className}>
      {start ? (
        <Typewriter
          options={{
            delay: speed,
            cursor: "", // Quitamos el cursor para que no ensucie el diseño
            autoStart: true,
            loop: false,
          }}
          onInit={(typewriter) => {
            typewriter.typeString(text).start();
          }}
        />
      ) : (
        <span className="opacity-0">{text}</span> // Mantiene el espacio mientras espera
      )}
    </span>
  );
};

const ResumeComponent = () => {
  const data = {
    name: "DANIEL BROWN",
    title: "PROFESSIONAL TITLE",
    contact: {
      email: "youremail@mail.com",
      phone: "+20 1234 5678",
      linkedin: "linkedin.com/in/username",
    },
    education: [
      { degree: "ENTER YOUR DEGREE", school: "University, Location", year: "2014-2015" },
      { degree: "ENTER YOUR DEGREE", school: "University, Location", year: "2014-2013" }
    ],
    skills: ["Problem solving", "Project management", "Team building", "Time management", "Critical thinking"],
    software: ["Adobe Photoshop", "Figma", "Sketch", "Adobe Illustrator"],
    profile: "The purpose of your professional profile is to give the recruiter a quick overview of your potential, expertise and achievements. It should determine if your CV is worth reading. Keep it short and impactful!",
    experience: [
      {
        role: "ENTER YOUR JOB POSITION HERE",
        company: "Company | Location",
        period: "2015-2019",
        description: "Instead of listing all your duties, select your three or four most impressive achievements."
      },
      {
        role: "ENTER YOUR JOB POSITION HERE",
        company: "Company | Location",
        period: "2012-2015",
        description: "Tailor your experience wherever possible. Use action verbs and keep descriptions concise."
      }
    ]
  };

  return (
    <div className="max-w-212.5 min-h-275 mx-auto my-10 bg-white p-12 shadow-lg border border-gray-200 text-slate-800 font-sans leading-tight">
      
      {/* HEADER */}
      <div className="flex justify-between items-start border-b-2 border-gray-100 pb-10 mb-8">
        <div>
          <h1 className="text-4xl font-serif tracking-widest text-gray-900">
            <Type text={data.name} speed={80} />
          </h1>
          <p className="text-lg tracking-[0.2em] text-gray-500 mt-2 lowercase">
            <Type text={data.title} delay={500} />
          </p>
        </div>
        <div className="text-right space-y-1 text-sm text-gray-600">
          <div className="flex items-center justify-end gap-3"><Type text={data.contact.email} delay={800}/> <Mail size={14}/></div>
          <div className="flex items-center justify-end gap-3"><Type text={data.contact.phone} delay={1200}/> <Phone size={14}/></div>
          <div className="flex items-center justify-end gap-3"><Type text={data.contact.linkedin} delay={1500}/> <Linkedin size={14}/></div>
        </div>
      </div>

      <div className="flex gap-10">
        {/* COLUMNA IZQUIERDA */}
        <div className="w-1/3 space-y-12">
          <section>
            <h2 className="text-sm font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">EDUCATION</h2>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-4">
                <Type text={edu.degree} className="text-[13px] font-bold" delay={200 * i} />
                <div className="text-[12px] text-gray-600 italic">
                  <Type text={edu.school} delay={400 * i} />
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-sm font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">SKILLS</h2>
            <ul className="space-y-2">
              {data.skills.map((skill, i) => (
                <li key={i} className="text-[12px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <Type text={skill} delay={100 * i} speed={20} />
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="w-2/3 space-y-10">
          <section>
            <h2 className="text-sm font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">PROFESSIONAL PROFILE</h2>
            <div className="text-[12px] leading-relaxed text-gray-700 italic">
              <Type text={data.profile} delay={1000} speed={10} />
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">WORK EXPERIENCE</h2>
            <div className="space-y-8">
              {data.experience.map((exp, i) => (
                <div key={i}>
                  <Type text={exp.role} className="text-[13px] font-bold uppercase" delay={500 + (i * 300)} />
                  <div className="flex justify-between text-[11px] text-gray-400 mb-2 italic">
                    <Type text={exp.company} delay={700 + (i * 300)} />
                    <Type text={exp.period} delay={900 + (i * 300)} />
                  </div>
                  <div className="text-[12px] leading-relaxed text-gray-700">
                    <Type text={exp.description} delay={1200 + (i * 300)} speed={15} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;