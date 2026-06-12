import {
  createPulseRelayStore,
  initialPulseState,
  type PulseAction,
  type PulseState,
  type PulseStore,
} from '../features/pulserelay-canary-fresh/pulserelay-canary-fresh.store';
import { startGameRuntime, stopGameRuntime, type RuntimeApi } from '../game/game-runtime';

export type TestBridge = PulseStore & {
  runtime: RuntimeApi | null;
  start: () => RuntimeApi;
  stop: () => void;
};

export function createTestBridge(seed: PulseState = initialPulseState): TestBridge {
  const store = createPulseRelayStore(seed);
  let runtime: RuntimeApi | null = null;

  return {
    ...store,
    get runtime() {
      return runtime;
    },
    start() {
      stopGameRuntime();
      const cleanup = startGameRuntime(store);
      runtime = {
        state: store.getState,
        dispatch: store.dispatch,
        subscribe: store.subscribe,
        actions: store.actions,
      };
      return runtime;
    },
    stop() {
      stopGameRuntime();
      runtime = null;
    },
  };
}

export function mountAppBridge(): RuntimeApi {
  const bridge = createTestBridge();
  return bridge.start();
}

export { createPulseRelayStore, initialPulseState, startGameRuntime, stopGameRuntime };
export type { PulseAction, PulseState, PulseStore, RuntimeApi };
