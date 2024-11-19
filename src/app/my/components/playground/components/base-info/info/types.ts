export interface InfoProps {
  username: string;
  bio: string;
  onSave: ({ username, bio }: { username: string; bio: string }) => void;
}
