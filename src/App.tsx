import { useEffect, useMemo, useSyncExternalStore } from 'react';
import { createPulseRelayStore, type PulseState } from './features/pulserelay-canary-fresh/pulserelay-canary-fresh.store';
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
  const store = useMemo(() => createPulseRelayStore(), []);
  const state = useSyncExternalStore(store.subscribe, store.getState, store.getState);

  useEffect(() => {
    const cleanup = startGameRuntime(store);
    return () => {
      cleanup();
      stopGameRuntime();
    };
  }, [store]);

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
