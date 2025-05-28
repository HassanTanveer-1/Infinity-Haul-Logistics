// lucide-react.d.ts
declare module 'lucide-react' {
  import * as React from 'react';

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;   // Width and height of the icon (e.g., 48, '2em')
    color?: string;           // Stroke color
    className?: string;       // CSS classes
  }

  // Icon Components used in your Services
  export const Truck: React.FC<LucideProps>;
  export const DollarSign: React.FC<LucideProps>;
  export const FileText: React.FC<LucideProps>;
  export const Mail: React.FC<LucideProps>;
  export const Phone: React.FC<LucideProps>;
  export const MapPin: React.FC<LucideProps>;
  export const Send: React.FC<LucideProps>;
  export const SendHorizonal: React.FC<LucideProps>;
  export const Phone: React.FC<LucideProps>;
  export const Users: React.FC<LucideProps>;
  export const Navigation: React.FC<LucideProps>;
  export const Sparkles: React.FC<LucideProps>;
  export const Facebook: React.FC<LucideProps>;
  export const Instagram: React.FC<LucideProps>;
  export const Linkedin: React.FC<LucideProps>;
  export const ArrowUp: React.FC<LucideProps>;
  export const Menu: React.FC<LucideProps>;
  export const X: React.FC<LucideProps>;
}
