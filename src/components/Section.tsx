// src/components/Section.tsx
'use client';
import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  children,
  className = '',
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-12', className)}
      {...rest}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
}
