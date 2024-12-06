export interface BaseUserConfig {
  id: string;
  username: string;
  mobile: string;
  baseConfig: {
    id: string;
    name: string;
    userId: string;
    type: number;
    otherType: string;
    avatar: string;
    bio: string | null;
    platform: string | null;
    themeId: string;
  };
  theme: {
    id: string;
    type: number | null;
    status: number | null;
    header: string | null;
    font: string | null;
    background: string | null;
    module: string | null;
    social: string | null;
    sharing: string | null;
    authorId: string;
  }[]
}
