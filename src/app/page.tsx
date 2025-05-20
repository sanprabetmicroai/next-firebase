import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Next.js Application Template</h1>
          <p className="text-muted-foreground mb-8">A modern, responsive web application starter with authentication</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/signup">Create Account</Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>Secure user authentication with Firebase</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Complete user management with sign up, sign in, and sign out functionality.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Shadcn UI</CardTitle>
              <CardDescription>Beautiful, accessible components</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Customizable components built with Radix UI and styled with Tailwind CSS.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Responsive Design</CardTitle>
              <CardDescription>Looks great on all devices</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Fully responsive layout that works seamlessly on desktop, tablet, and mobile.</p>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="mb-6">Create an account or sign in to access the application.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild>
                  <Link href="/app">Go to Dashboard</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
