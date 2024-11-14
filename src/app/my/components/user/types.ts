export interface HelpEntry {
  key: string;
  name: string;
  icon: string;
  redirect?: string;
  disabled?: boolean;
  action?: () => void;
}

export interface HelpItem {
  title: string;
  entries: HelpEntry[];
}
