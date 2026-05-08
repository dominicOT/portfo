import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link as LinkIcon, Calendar, Users } from "lucide-react"

const articles = [
  {
    title: "Edommen: A Krio-English Translation Model",
    date: "2024",
    link: "https://huggingface.co/dominicOT/edommen",
    description: "A machine translation model for Krio-English language pairs, based on Facebook's mBART-large-50.",
    collaborators: []
  },
  {
    title: "Intelligent Twitter Bot for Solana Project Analysis",
    date: "2023",
    link: "https://github.com/dominicOT/RugGuardBotProject",
    description: "An AI-powered bot that evaluates the trustworthiness of Solana blockchain project accounts on Twitter.",
    collaborators: ["Collaborator Name 1"]
  },
  {
    title: "Web3 Authentication Starter Template",
    date: "2023",
    link: "https://web3-authd-app-starter.vercel.app/",
    description: "A simulation and starter template for building Web3 applications with Civic Auth.",
    collaborators: []
  },
  {
    title: "Unofficial Perplexity.ai API Wrapper",
    date: "2023",
    link: "https://github.com/helallao/perplexity-ai",
    description: "An API wrapper for Perplexity.ai with account generation capabilities.",
    collaborators: ["helallao"]
  },
  // Add more articles as needed
];

export default function ResearchPage() {
  return (
    <div className="bg-background text-foreground font-body antialiased">
      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight mb-8">Research & Articles</h1>
        <p className="text-xl text-muted-foreground mb-12">A collection of my published research, articles, and technical writings in AI, blockchain, and software development.</p>
        
        <div className="grid gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{article.description}</p>
                {article.collaborators.length > 0 && (
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Collaborators: </span>
                    {article.collaborators.map((collab, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{collab}</Badge>
                    ))}
                  </div>
                )}
              </CardContent>
              <div className="p-6 pt-0">
                <Button variant="outline" size="sm" asChild>
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2 h-4 w-4" /> View Article
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a href="/">Back to Portfolio</a>
          </Button>
        </div>
      </main>
    </div>
  );
}