"use client";

import { useSidebar, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function SiteHeader() {
  const { open } = useSidebar();

  return (
    <header className="flex h-16 items-center gap-4 bg-background px-4">
      <SidebarTrigger className="md:hidden" />
        <Avatar className="w-8 h-8 rounded-full">
          <AvatarImage src="https://picsum.photos/300/300" alt="Your Avatar" />
          <AvatarFallback>HS</AvatarFallback>
        </Avatar>
      <span className="font-bold">Your Name</span>
    </header>
  );
}
