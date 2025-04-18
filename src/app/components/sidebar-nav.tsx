"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Briefcase,
  Certificate,
  Contact2,
  GraduationCap,
  Home,
  Lightbulb,
  User,
} from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import React from "react";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    label: string;
    icon: React.ReactNode;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const { setOpen } = useSidebar();

  return (
    <SidebarMenu
      className={cn(
        "p-4 bg-[hsl(var(--background))] text-white h-full shadow-none", // 👈 updated here
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton asChild href={item.href}>
            <a className="w-full flex items-center gap-2 hover:text-lime-500 transition-colors">
              {item.icon}
              <span>{item.label}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
