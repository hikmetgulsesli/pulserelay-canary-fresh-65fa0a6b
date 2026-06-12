import { useEffect, useMemo, useSyncExternalStore } from 'react';
import {
  createPulseRelayStore,
  initialPulseState,
  type PulseState,
} from './features/pulserelay-canary-fresh/pulserelay-canary-fresh.store';
import { pulseRepo } from './features/pulserelay-canary-fresh/pulserelay-canary-fresh.repo';
import { startGameRuntime, stopGameRuntime } from './game/game-runtime';
import {
  GameplayPulserelayCanaryFresh,
  GameSettingsPulserelayCanaryFresh,
} from './screens';
import type {
  GameplayPulserelayCanaryFreshActionId,
  GameSettingsPulserelayCanaryFreshActionId,
} from './screens';

export default function App() {
  const store = useMemo(
    () => createPulseRelayStore({ ...initialPulseState, config: pulseRepo.load() }),
    [],
  );
  const state = useSyncExternalStore(store.subscribe, store.getState, store.getState);

  useEffect(() => {
    const cleanup = startGameRuntime(store);
    return () => {
      cleanup();
      stopGameRuntime();
    };
  }, [store]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (state.screen !== 'gameplay') return;
      switch (e.key.toLowerCase()) {
        case 'arrowleft':
        case 'a':
          store.dispatch({ type: 'move-left' });
          break;
        case 'arrowright':
        case 'd':
          store.dispatch({ type: 'move-right' });
          break;
        case ' ':
          if (!state.initialized) {
            store.dispatch({ type: 'initialize-pulse' });
          } else if (state.paused) {
            store.dispatch({ type: 'resume-feed' });
          } else {
            store.dispatch({ type: 'pause' });
          }
          break;
        case 'r':
          store.dispatch({ type: 'restart' });
          break;
        case 'p':
          if (state.initialized && !state.paused) {
            store.dispatch({ type: 'pause' });
          }
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [store, state.screen, state.initialized, state.paused]);

  const gameplayActions = useMemo(
    (): Partial<Record<GameplayPulserelayCanaryFreshActionId, () => void>> => ({
      'timer-1': () => store.dispatch({ type: 'timer-1' }),
      'favorite-2': () => store.dispatch({ type: 'favorite-2' }),
      'rebase-edit-3': () => store.dispatch({ type: 'rebase-edit-3' }),
      'initialize-pulse-4': () => store.dispatch({ type: 'initialize-pulse' }),
      'pause-5': () => store.dispatch({ type: 'pause' }),
      'restart-6': () => store.dispatch({ type: 'restart' }),
      'resume-feed-7': () => store.dispatch({ type: 'resume-feed' }),
      'exit-to-settings-8': () => store.dispatch({ type: 'exit-to-settings' }),
      'terminal-1': () => store.dispatch({ type: 'terminal-1' }),
      'config-2': () => store.dispatch({ type: 'config-2' }),
      'data-streams-3': () => store.dispatch({ type: 'data-streams-3' }),
      'diagnostics-4': () => store.dispatch({ type: 'diagnostics-4' }),
      'manual-5': () => store.dispatch({ type: 'manual-5' }),
      'logs-6': () => store.dispatch({ type: 'logs-6' }),
      'network-status-7': () => store.dispatch({ type: 'network-status-7' }),
    }),
    [store],
  );

  const settingsActions = useMemo(
    (): Partial<Record<GameSettingsPulserelayCanaryFreshActionId, () => void>> => ({
      'back-to-game-1': () => store.dispatch({ type: 'back-to-game-1' }),
      'save-configuration-2': () => store.dispatch({ type: 'save-configuration-2' }),
    }),
    [store],
  );

  return (
    <div
      data-setfarm-root="us-001"
      data-testid="setfarm-app-root"
      className="relative h-screen w-full overflow-hidden bg-slate-950 text-slate-50"
    >
      {state.screen === 'gameplay' ? (
        <GameplayPulserelayCanaryFresh actions={gameplayActions} runtime={toRuntime(state)} />
      ) : (
        <GameSettingsPulserelayCanaryFresh actions={settingsActions} />
      )}
    </div>
  );
}

function toRuntime(state: PulseState) {
  return {
    player: state.player,
    obstacles: state.obstacles,
    shards: state.shards,
    score: state.score,
    energy: state.energy,
    lives: state.lives,
    paused: state.paused,
  };
}
