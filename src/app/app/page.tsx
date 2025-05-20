'use client';

import { useAuth } from '@/lib/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, User as UserIcon } from "lucide-react";

export default function AppPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button variant="outline" onClick={() => signOut()} className="gap-2">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Welcome
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>
                    <UserIcon className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{user?.email}</p>
                  <p className="text-sm text-muted-foreground">User</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>No recent activity</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Button size="sm" variant="outline">View Profile</Button>
              <Button size="sm" variant="outline">Settings</Button>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Dashboard Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is your application dashboard. Add your main content here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}