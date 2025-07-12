
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Briefcase, Github, GraduationCap, Link as LinkIcon, Linkedin, Mail, MapPin, Phone, UserCheck } from "lucide-react"

const contact = {
  email: "Not Publicly Available",
  phone: "Not Publicly Available",
  location: "Freetown, Sierra Leone",
  github: "https://www.github.com/dominicOT",
  linkedin: "https://www.linkedin.com/in/dominic-oladapo-tonade-6605b2209/",
};

const workExperience = [
  {
    role: "Software Engineer",
    company: "Smart Systems (SL) Limited",
    period: "June 2025 - Present",
    type: "Full-time / Remote",
  },
  {
    role: "Software / AI Engineer",
    company: "AUTOHEALTH SL (LTD)",
    period: "Mar 2025 - May 2025",
    type: "Contract / On-site",
  },
  {
    role: "Operations Manager",
    company: "UniMak Workflow Innovation Hub",
    period: "Sept 2023 - Dec 2024",
    type: "Internship / On-site",
  },
  {
    role: "Tech Director",
    company: "Dazzling Orbit Ltd Gte",
    period: "Jan 2022 - Present",
    type: "Full-time / Remote",
  },
  {
    role: "Coding Tutor",
    company: "Readland Global",
    period: "July 2022 - Aug 2023",
    type: "Contract / Remote",
  },
  {
    role: "Enumerator for Evaluation",
    company: "Ascendant & Company Ltd",
    period: "March 2021 - March 2023",
    type: "Contract / On-site",
  },
];

const skills = [
  "JavaScript", "TypeScript", "React Native", "HTML", "TailwindCSS", "Python", 
  "Next.js", "Git", "Firebase", "Google Cloud", "Expo", "Google Workspaces", "GitHub", 
  "VSCode", "Project IDX", "Insomnia", "MongoDB", "MIT App Inventor", "API Integrations",
];

const projects = {
  blockchain: [
    { name: "PassRaydSwapr", url: "https://passraydswapr.vercel.app/", description: "Passkey Raydium Swapper (using LazorKit)", github: "https://github.com/justanthruser/passkey-raydium-swapper" },
    { name: "RUGGUARD", url: "https://github.com/dominicOT/RugGuardBotProject", description: "An intelligent Twitter bot that analyzes the trustworthiness of Solana project accounts" },
    { name: "Web3 Authd App Starter", url: "https://web3-authd-app-starter.vercel.app/", description: "A simulation of the civic Auth and starter template for building web3 applications with Authd" },
  ],
  ai: [
    { name: "Adrit", url: "https://adrit.dorbai.com", description: "An AI-powered application." },
    { name: "WasteWise", url: "#", description: "AI-driven solution for waste management." },
    { name: "Perplexity-ai", url: "https://github.com/helallao/perplexity-ai", description: "Unofficial API Wrapper for Perplexity.ai + Account Generator." },
  ],
  mobile: [
    { name: "WasteWise", url: "#", description: "A mobile application promoting smart recycling and waste tracking." },
    { name: "OltraPay", url: "#", description: "A secure and user-friendly mobile payment platform." },
    { name: "TWU", url: "#", description: "A mobile app for the Transport Workers Union, Sierra Leone." },
  ],
  websites: [
    { name: "SUN SL", url: "https://www.sun.ovp.gov.sl/", description: "Official website for the Scaling Up Nutrition initiative in Sierra Leone." },
    { name: "Dazzling Orbit", url: "https://dorbsl-ltd.vercel.app/", description: "Corporate website for Dazzling Orbit Ltd." },
    { name: "RCCG SL", url: "https://rccgsl.vercel.app/", description: "Website for the Redeemed Christian Church of God, Sierra Leone." },
    { name: "We Restore SL", url: "https://werestore-sl.org/", description: "A platform for a restoration-focused community project." },
    { name: "Cloth Drive", url: "#", description: "Web application for a charity clothing drive initiative." },
    { name: "UniMak Workflow Innovation Hub", url: "http://uwihsl.web.app/", description: "The digital hub for UniMak's innovation center." },
  ],
};

const education = [
  "Harvard University Online",
  "University of Makeni, Makeni",
  "Christ Victory College, Ibadan",
  "Good Tidings Standard Collegiate, Osogbo",
  "Grace Bible Mission Nur/Pry School, Osogbo",
];

const academicQualifications = [
  { text: "Artificial Intelligence (Certificate)", school: "Harvard University Online", status: "In Progress" },
  { text: "Bachelor of Science - Computer Science (Degree)", school: "University of Makeni", status: "2025" },
  { text: "Secondary School Certificate (SSCE)", school: "Christ Victory College", status: "2020" },
  { text: "Primary School Leaving Certificate", school: "Grace Bible Mission", status: "2014" },
];

const otherQualifications = [
  "Certificate of Project Management (Foundation) - 2023",
  "Certificate of Computer Fundamentals (Advanced) - 2023",
  "Certificate of E-Marketing (Foundation) - 2023",
  "Introduction to Generative AI - Google Cloud - 2023",
  "Computer Networking (In Progress)",
  "Digital Network Security Certificate (In Progress)",
];

const otherTrainings = [
  "U.G.R.L FLASH CS5 COURSE - 2015",
  "SCRATCH CODING COURSE - 2021",
  "MIT APP INVENTOR COURSE - 2021",
];

const referees = [
  {
    name: "Mrs. Kemi Oladapo-Tonade",
    title: "Chief Executive Officer, Dazzling Orbit Ltd. GTE., SL",
  },
  {
    name: "Mr. Ibrahim Kalokoh",
    title: "Head of Department, Computer Science Department, University of Makeni",
  }
];


export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground font-body antialiased">
      <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Hero Section */}
        <section id="hero" className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/20 shadow-lg">
            <AvatarImage src="" alt="Dominic Oladapo-Tonade" data-ai-hint="professional headshot" />
            <AvatarFallback className="text-4xl bg-primary/10 text-primary">DO</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left flex-grow">
            <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight">DOMINIC DOTUN OLADAPO-TONADE</h1>
            <p className="text-xl md:text-2xl mt-2 text-muted-foreground font-medium">Software & AI Engineer</p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-muted-foreground">
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> {contact.email}</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> {contact.phone}</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> {contact.location}</span>
            </div>
            <div className="mt-4 flex justify-center md:justify-start gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={contact.github} target="_blank" rel="noopener noreferrer"><Github className="mr-2" /> GitHub</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2" /> LinkedIn</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Work Experience */}
            <section id="experience">
              <h2 className="text-3xl font-headline font-bold mb-6 text-primary flex items-center gap-3"><Briefcase /> Work Experience</h2>
              <div className="relative pl-6 space-y-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-border">
                {workExperience.map((job, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <Card>
                      <CardHeader>
                        <CardTitle>{job.role}</CardTitle>
                        <CardDescription>{job.company} &bull; {job.period}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="secondary">{job.type}</Badge>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Projects */}
            <section id="projects">
              <h2 className="text-3xl font-headline font-bold mb-6 text-primary">Projects</h2>
              <Tabs defaultValue="websites" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="websites">Websites</TabsTrigger>
                  <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
                  <TabsTrigger value="ai">AI Projects</TabsTrigger>
                  <TabsTrigger value="blockchain">Blockchain Projects</TabsTrigger>
                </TabsList>
                <TabsContent value="websites" className="mt-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {projects.websites.map(p => <ProjectCard key={p.name} {...p} />)}
                  </div>
                </TabsContent>
                <TabsContent value="mobile" className="mt-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {projects.mobile.map(p => <ProjectCard key={p.name} {...p} />)}
                  </div>
                </TabsContent>
                <TabsContent value="ai" className="mt-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {projects.ai.map(p => <ProjectCard key={p.name} {...p} />)}
                  </div>
                </TabsContent>
                <TabsContent value="blockchain" className="mt-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {projects.blockchain.map(p => <ProjectCard key={p.name} {...p} />)}
                  </div>
                </TabsContent>
              </Tabs>
            </section>
          </div>
          
          {/* Right Column */}
          <div className="space-y-12">
            
            {/* Skills */}
            <section id="skills">
              <h2 className="text-3xl font-headline font-bold mb-6 text-primary">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <Badge key={skill} variant="default" className="bg-accent/20 text-accent-foreground hover:bg-accent/30 text-sm px-3 py-1">{skill}</Badge>
                ))}
              </div>
            </section>
            
            <Separator />
            
            {/* Education & Certs */}
            <section id="education">
              <h2 className="text-3xl font-headline font-bold mb-6 text-primary flex items-center gap-3"><GraduationCap /> Education & Qualifications</h2>
              <div className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg text-primary/90 mb-2">Academic Qualifications</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                        {academicQualifications.map(q => (
                            <li key={q.text}>
                                {q.text}, <span className="italic">{q.school}</span> - <Badge variant="outline">{q.status}</Badge>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg text-primary/90 mb-2">Educational Background</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                        {education.map(e => <li key={e}>{e}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg text-primary/90 mb-2 flex items-center gap-2"><Award /> Other Qualifications & Trainings</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                        {otherQualifications.map(q => <li key={q}>{q}</li>)}
                        {otherTrainings.map(t => <li key={t}>{t}</li>)}
                    </ul>
                </div>
              </div>
            </section>
            
            <Separator />
            
            {/* References */}
            <section id="referees">
              <h2 className="text-3xl font-headline font-bold mb-6 text-primary flex items-center gap-3"><UserCheck /> References</h2>
              <Card>
                <CardContent className="pt-6">
                  {referees.map(r => (
                    <div key={r.name}>
                      <p className="font-semibold">{r.name}</p>
                      <p className="text-sm text-muted-foreground">{r.title}</p>
                    </div>
                  ))}
                   <p className="text-sm text-muted-foreground mt-2 italic">Further references available upon request.</p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>

        <footer className="text-center mt-16 text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Dominic Dotun Oladapo-Tonade. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

function ProjectCard({ name, description, url }: { name: string, description: string, url: string }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        {url !== "#" ? (
          <Button variant="outline" size="sm" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer"><LinkIcon className="mr-2 h-4 w-4" /> View Project</a>
          </Button>
        ) : (
          <Badge variant="secondary">Link Not Available</Badge>
        )}
      </CardFooter>
    </Card>
  )
}
