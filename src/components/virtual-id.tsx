import Link from "next/link"
import { BadgeCheck, Book, User } from 'lucide-react'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function VirtualId() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <nav className="ml-auto flex gap-6">
            <Link
              href="/profile"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Link>
            <Link
              href="/knowledge-base"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <Book className="mr-2 h-4 w-4" />
              Knowledge Base
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6 lg:p-8">
        {/* Virtual ID Card */}
        <Card className="mx-auto max-w-md overflow-hidden">
          <CardHeader className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-6 text-white">
            <div className="absolute inset-0 bg-black/20"></div>
            <h1 className="relative z-10 text-2xl font-bold">Virtual ID Card</h1>
          </CardHeader>
          <CardContent className="aspect-[1.58/1] bg-gradient-to-br from-blue-100 via-blue-50 to-white p-6">
            <div className="grid h-full grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">Full Name</div>
                <div className="font-semibold">John Doe</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">ID Number</div>
                <div className="font-semibold">ID-12345-XYZ</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">Date of Issue</div>
                <div className="font-semibold">2024-01-01</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">Valid Until</div>
                <div className="font-semibold">2029-01-01</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">Access Level</div>
                <div className="font-semibold">Level 3 - Premium</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">Status</div>
                {/* <Badge variant="default" className="bg-green-500">Active</Badge> */}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements Section */}
        <div className="mx-auto mt-8 max-w-2xl">
          <h2 className="mb-4 text-xl font-semibold">Achievements</h2>
          <ScrollArea className="h-[400px] rounded-lg border p-4">
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <div className="mt-1 text-xs text-muted-foreground">Earned on: {achievement.date}</div>
                    </div>
                  </div>
                  {index < achievements.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  )
}

const achievements = [
  {
    title: "Early Adopter",
    description: "One of the first 1000 users to join the platform",
    date: "2024-01-15",
  },
  {
    title: "Power User",
    description: "Completed 100 successful transactions",
    date: "2024-02-01",
  },
  {
    title: "Community Champion",
    description: "Received 50 positive reviews from other users",
    date: "2024-02-15",
  },
  {
    title: "Verification Pro",
    description: "Completed all identity verification steps",
    date: "2024-03-01",
  },
  {
    title: "Premium Member",
    description: "Subscribed to premium membership for 6 months",
    date: "2024-03-15",
  },
  {
    title: "Bug Hunter",
    description: "Reported 5 critical bugs that were fixed",
    date: "2024-04-01",
  },
  {
    title: "Content Creator",
    description: "Published 10 helpful articles in the knowledge base",
    date: "2024-04-15",
  },
  {
    title: "Network Builder",
    description: "Connected with 100 other users on the platform",
    date: "2024-05-01",
  },
]