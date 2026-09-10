export type Task = {
  id: string;
  title: string;
  description: string;
  order: number;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  estimatedMin: number | null;
};

export type PluginRecommendation = {
  id: string;
  name: string;
  description: string;
  whyUse: string;
  websiteUrl: string | null;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  tasks: Task[];
  pluginRecommendations: PluginRecommendation[];
};
