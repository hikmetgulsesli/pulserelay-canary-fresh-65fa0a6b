import type { PulseStore } from '../features/pulserelay-canary-fresh/pulserelay-canary-fresh.store';

export type RuntimeApi = {
  /** Live snapshot of the current runtime state. */
  state: () => ReturnType<PulseStore['getState']>;
  /** Direct dispatch function for reducer actions. */
  dispatch: PulseStore['dispatch'];
  /** Subscribe to state changes. Returns an unsubscribe function. */
  subscribe: PulseStore['subscribe'];
  /** Convenience action callers for every reducer action. */
  actions: PulseStore['actions'];
};

let activeTimer: ReturnType<typeof setInterval> | null = null;

const MAX_LANES = 3;

function randomLane(): number {
  return Math.floor(Math.random() * MAX_LANES);
}

export function startGameRuntime(store: PulseStore, tickMs = 250): () => void {
  stopGameRuntime();

  activeTimer = setInterval(() => {
    store.dispatch({
      type: 'tick',
      payload: { obstacleLane: randomLane(), shardLane: randomLane() },
    });
  }, tickMs);

  const api: RuntimeApi = {
    state: store.getState,
    dispatch: store.dispatch,
    subscribe: store.subscribe,
    actions: store.actions,
  };

  if (typeof globalThis !== 'undefined') {
    // @ts-expect-error expose runtime api for browser verification
    globalThis.app = api;
  }
  if (typeof window !== 'undefined') {
    // @ts-expect-error expose runtime api for browser verification
    window.app = api;
  }

  return stopGameRuntime;
}

export function stopGameRuntime(): void {
  if (activeTimer !== null) {
    clearInterval(activeTimer);
    activeTimer = null;
  }
}
