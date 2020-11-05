export interface GamesConfig {
  id?: any;
  code: string;
  name: string;
  duration: string;
  description: string;
  rules: string;
}

export interface UpdateGameConfig {
  id: string;
  code: string;
  name: string;
  duration: string;
  description: string;
  rules: string;
}
