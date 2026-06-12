import { initialPulseState, type PulseState } from '../features/pulserelay-canary-fresh/pulserelay-canary-fresh.store';

export const pulseFixture = {
  initial: initialPulseState,

  initialized: (): PulseState => ({
    ...initialPulseState,
    initialized: true,
    score: 0,
    energy: 100,
    lives: 3,
    log: ['PULSE INITIALIZED'],
  }),

  running: (): PulseState => ({
    ...initialPulseState,
    initialized: true,
    paused: false,
    score: 42,
    energy: 88,
    lives: 2,
    ticks: 120,
    player: { lane: 1, position: 0 },
    obstacles: [{ lane: 0, position: 5 }],
    shards: [{ lane: 2, position: 8 }],
    log: ['PULSE INITIALIZED', 'TIMER SYNC'],
  }),

  paused: (): PulseState => ({
    ...initialPulseState,
    initialized: true,
    paused: true,
    score: 150,
    energy: 60,
    lives: 1,
    log: ['PULSE INITIALIZED', 'PAUSED'],
  }),
};
