export type User = {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  followers: number;
  following: number;
  location: string;
  login: string;
  name: string;
  public_repos: number;
  twitter_username: string;
};

export type StatsData = { displayed: string; key: string }[];
