export type GameConfig = {
  highScore: number;
  sfx: boolean;
  difficulty: 'low' | 'normal' | 'high';
};

export const defaultGameConfig: GameConfig = {
  highScore: 0,
  sfx: true,
  difficulty: 'normal',
};

const STORAGE_KEY = 'pulserelay-canary-fresh-config';

export const pulseRepo = {
  load(): GameConfig {
    if (typeof localStorage === 'undefined') {
      return { ...defaultGameConfig };
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultGameConfig };
      const parsed = JSON.parse(raw) as Partial<GameConfig> | null;
      if (!parsed || typeof parsed !== 'object') {
        return { ...defaultGameConfig };
      }
      return {
        highScore: typeof parsed.highScore === 'number' ? parsed.highScore : defaultGameConfig.highScore,
        sfx: typeof parsed.sfx === 'boolean' ? parsed.sfx : defaultGameConfig.sfx,
        difficulty: ['low', 'normal', 'high'].includes(parsed.difficulty as string)
          ? (parsed.difficulty as GameConfig['difficulty'])
          : defaultGameConfig.difficulty,
      };
    } catch {
      return { ...defaultGameConfig };
    }
  },

  save(config: GameConfig): void {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // storage may be unavailable in private mode or restricted environments
    }
  },

  updateHighScore(score: number): GameConfig {
    const current = this.load();
    if (score > current.highScore) {
      const next = { ...current, highScore: score };
      this.save(next);
      return next;
    }
    return current;
  },
};
