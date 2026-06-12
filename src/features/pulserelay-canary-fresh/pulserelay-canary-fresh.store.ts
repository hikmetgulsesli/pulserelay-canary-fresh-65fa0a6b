export type GameScreen = 'gameplay' | 'settings';

export type GameEntity = {
  lane: number;
  position: number;
};

export type PulseState = {
  screen: GameScreen;
  initialized: boolean;
  paused: boolean;
  player: GameEntity;
  obstacles: GameEntity[];
  shards: GameEntity[];
  score: number;
  energy: number;
  lives: number;
  ticks: number;
  log: string[];
};

export const initialPulseState: PulseState = {
  screen: 'gameplay',
  initialized: false,
  paused: false,
  player: { lane: 1, position: 0 },
  obstacles: [],
  shards: [],
  score: 0,
  energy: 100,
  lives: 3,
  ticks: 0,
  log: [],
};

const MAX_LANES = 3;
const TRACK_LENGTH = 20;

function clampLane(lane: number): number {
  return Math.max(0, Math.min(MAX_LANES - 1, lane));
}

function randomLane(): number {
  return Math.floor(Math.random() * MAX_LANES);
}

export type PulseAction =
  | { type: 'initialize-pulse' }
  | { type: 'tick' }
  | { type: 'pause' }
  | { type: 'resume-feed' }
  | { type: 'restart' }
  | { type: 'exit-to-settings' }
  | { type: 'back-to-game-1' }
  | { type: 'save-configuration-2' }
  | { type: 'timer-1' }
  | { type: 'favorite-2' }
  | { type: 'rebase-edit-3' }
  | { type: 'terminal-1' }
  | { type: 'config-2' }
  | { type: 'data-streams-3' }
  | { type: 'diagnostics-4' }
  | { type: 'manual-5' }
  | { type: 'logs-6' }
  | { type: 'network-status-7' }
  | { type: 'move-left' }
  | { type: 'move-right' };

export function pulseReducer(state: PulseState, action: PulseAction): PulseState {
  switch (action.type) {
    case 'initialize-pulse':
      return {
        ...initialPulseState,
        screen: state.screen,
        initialized: true,
        paused: false,
        log: [...state.log, 'PULSE INITIALIZED'],
      };

    case 'restart':
      return {
        ...initialPulseState,
        screen: state.screen,
        log: [...state.log, 'SYSTEM RESTART'],
      };

    case 'pause':
      return { ...state, paused: true, log: [...state.log, 'PAUSED'] };

    case 'resume-feed':
      return { ...state, paused: false, log: [...state.log, 'RESUMED'] };

    case 'exit-to-settings':
      return { ...state, screen: 'settings' };

    case 'back-to-game-1':
      return { ...state, screen: 'gameplay' };

    case 'save-configuration-2':
      return { ...state, screen: 'gameplay', log: [...state.log, 'CONFIGURATION SAVED'] };

    case 'tick': {
      if (!state.initialized || state.paused) {
        return state;
      }

      const ticks = state.ticks + 1;
      let obstacles = state.obstacles
        .map((o) => ({ ...o, position: o.position + 1 }))
        .filter((o) => o.position < TRACK_LENGTH);
      let shards = state.shards
        .map((s) => ({ ...s, position: s.position + 1 }))
        .filter((s) => s.position < TRACK_LENGTH);

      if (ticks % 8 === 0) {
        obstacles = [...obstacles, { lane: randomLane(), position: 0 }];
      }
      if (ticks % 12 === 0) {
        shards = [...shards, { lane: randomLane(), position: 0 }];
      }

      let lives = state.lives;
      let energy = Math.min(100, state.energy + 1);
      let score = state.score + 1;

      const hitObstacle = obstacles.some(
        (o) => o.lane === state.player.lane && o.position === state.player.position,
      );
      if (hitObstacle) {
        lives = Math.max(0, lives - 1);
        energy = Math.max(0, energy - 20);
      }

      const collectedShard = shards.some(
        (s) => s.lane === state.player.lane && s.position === state.player.position,
      );
      if (collectedShard) {
        score += 10;
        energy = Math.min(100, energy + 10);
        shards = shards.filter(
          (s) => !(s.lane === state.player.lane && s.position === state.player.position),
        );
      }

      return {
        ...state,
        ticks,
        obstacles,
        shards,
        score,
        energy,
        lives,
      };
    }

    case 'move-left':
      return {
        ...state,
        player: { ...state.player, lane: clampLane(state.player.lane - 1) },
      };

    case 'move-right':
      return {
        ...state,
        player: { ...state.player, lane: clampLane(state.player.lane + 1) },
      };

    case 'timer-1':
      return { ...state, log: [...state.log, 'TIMER SYNC'] };

    case 'favorite-2':
      return { ...state, log: [...state.log, 'FAVORITE MARKED'] };

    case 'rebase-edit-3':
      return { ...state, log: [...state.log, 'REBASE EDIT'] };

    case 'terminal-1':
      return { ...state, log: [...state.log, 'TERMINAL OPEN'] };

    case 'config-2':
      return { ...state, log: [...state.log, 'CONFIG VIEW'] };

    case 'data-streams-3':
      return { ...state, log: [...state.log, 'DATA STREAMS'] };

    case 'diagnostics-4':
      return { ...state, log: [...state.log, 'DIAGNOSTICS'] };

    case 'manual-5':
      return { ...state, log: [...state.log, 'MANUAL'] };

    case 'logs-6':
      return { ...state, log: [...state.log, 'LOGS'] };

    case 'network-status-7':
      return { ...state, log: [...state.log, 'NETWORK STATUS'] };

    default:
      return state;
  }
}

export type PulseStore = {
  getState: () => PulseState;
  dispatch: (action: PulseAction) => void;
  subscribe: (listener: () => void) => () => void;
  actions: Record<PulseAction['type'], () => void>;
};

export function createPulseRelayStore(seed: PulseState = initialPulseState): PulseStore {
  let state = seed;
  const listeners = new Set<() => void>();

  const dispatch = (action: PulseAction) => {
    state = pulseReducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const getState = () => state;

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  const actionTypes: PulseAction['type'][] = [
    'initialize-pulse',
    'tick',
    'pause',
    'resume-feed',
    'restart',
    'exit-to-settings',
    'back-to-game-1',
    'save-configuration-2',
    'timer-1',
    'favorite-2',
    'rebase-edit-3',
    'terminal-1',
    'config-2',
    'data-streams-3',
    'diagnostics-4',
    'manual-5',
    'logs-6',
    'network-status-7',
    'move-left',
    'move-right',
  ];

  const actions = Object.fromEntries(
    actionTypes.map((type) => [type, () => dispatch({ type } as PulseAction)]),
  ) as Record<PulseAction['type'], () => void>;

  return { getState, dispatch, subscribe, actions };
}
