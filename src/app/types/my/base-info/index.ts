export interface BaseInfoEditTrigger {
  id: string;
  title: string;
  icon: string;
  action?: () => void;
}