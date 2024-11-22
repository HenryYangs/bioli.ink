type onActionType = ({ link, description }: { link: string; description: string }) => void;

export interface SocialLinkInputProps {
  placeholder: string;
  example: string;
  defaultLink?: string;
  defaultDescription?: string;
  status?: 'create' | 'edit';
  onAdd: onActionType;
  onEdit: onActionType;
}
