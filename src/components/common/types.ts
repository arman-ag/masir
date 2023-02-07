export interface buttonProps {
  children: React.ReactNode;
  style?: string;
  href?: string;
  onClick?: React.MouseEventHandler | null;
}
export interface cardProps {
  country: string;
  population: number;
  region: string;
  capital: string[];
  alt: string;
  flag: string;
}
