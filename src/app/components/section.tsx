
import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, children, className, ...props }) => {
  return (
    <section id={id} className={`py-8 ${className}`} {...props}>
      {children}
    </section>
  );
};
