export interface IconSvg {
  size?: number;
  color?: string;
  className?: string;
  onClick?: (e: any) => void;
}

export interface ListTab {
  value: string;
  title: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}
