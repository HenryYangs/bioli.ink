export interface SocialLinkInputProps {
  placeholder: string;
  example: string;
  defaultLink?: string;
  defaultDescription?: string;
  onAddSuccess: ({ link, description }: { link: string; description: string }) => void;
}
