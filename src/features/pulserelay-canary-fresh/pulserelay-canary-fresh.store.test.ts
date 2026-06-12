import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { createPulseRelayStore, initialPulseState, pulseReducer } from './pulserelay-canary-fresh.store';
import { pulseRepo } from './pulserelay-canary-fresh.repo';

describe('pulseReducer tick', () => {
  it('spawns obstacles and shards at the far end and moves them toward the player', () => {
    const store = createPulseRelayStore({
      ...initialPulseState,
      initialized: true,
      paused: false,
      ticks: 23,
    });

    store.dispatch({ type: 'tick', payload: { obstacleLane: 2, shardLane: 0 } });
    const state = store.getState();

    expect(state.obstacles).toContainEqual({ lane: 2, position: 19 });
    expect(state.shards).toContainEqual({ lane: 0, position: 19 });
    expect(state.ticks).toBe(24);
  });

  it('stops ticking when lives are zero', () => {
    const store = createPulseRelayStore({
      ...initialPulseState,
      initialized: true,
      lives: 0,
      ticks: 5,
    });

    store.dispatch({ type: 'tick', payload: { obstacleLane: 0, shardLane: 0 } });
    expect(store.getState().ticks).toBe(5);
  });

  it('records GAME OVER when an obstacle reduces lives to zero', () => {
    const store = createPulseRelayStore({
      ...initialPulseState,
      initialized: true,
      lives: 1,
      obstacles: [{ lane: 1, position: 1 }],
    });

    store.dispatch({ type: 'tick', payload: { obstacleLane: 0, shardLane: 0 } });
    const state = store.getState();

    expect(state.lives).toBe(0);
    expect(state.log).toContain('GAME OVER');
  });

  it('does not use Math.random inside the reducer', () => {
    const randomSpy = vi.spyOn(Math, 'random').mockImplementation(() => 0.5);
    pulseReducer(
      { ...initialPulseState, initialized: true },
      { type: 'tick', payload: { obstacleLane: 0, shardLane: 0 } },
    );
    expect(randomSpy).not.toHaveBeenCalled();
    randomSpy.mockRestore();
  });
});

describe('pulseRepo integration', () => {
  beforeEach(() => {
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('loads initial config when creating the store', () => {
    vi.mocked(localStorage.getItem).mockReturnValue(
      JSON.stringify({ highScore: 42, sfx: false, difficulty: 'high' }),
    );

    const store = createPulseRelayStore({ ...initialPulseState, config: pulseRepo.load() });
    expect(store.getState().config).toEqual({ highScore: 42, sfx: false, difficulty: 'high' });
  });

  it('saves config when save-configuration-2 is dispatched', () => {
    const store = createPulseRelayStore(initialPulseState);
    store.dispatch({ type: 'save-configuration-2' });
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'pulserelay-canary-fresh-config',
      expect.stringContaining('highScore'),
    );
  });

  it('updates high score when score exceeds the stored high score', () => {
    vi.mocked(localStorage.getItem).mockReturnValue(JSON.stringify({ highScore: 10, sfx: true, difficulty: 'normal' }));

    const store = createPulseRelayStore({
      ...initialPulseState,
      initialized: true,
      score: 25,
      config: pulseRepo.load(),
    });

    store.dispatch({ type: 'tick', payload: { obstacleLane: 0, shardLane: 0 } });

    expect(store.getState().config.highScore).toBeGreaterThanOrEqual(26);
  });
});

describe('pulseRepo.load', () => {
  beforeEach(() => {
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns defaults when localStorage contains the string null', () => {
    vi.mocked(localStorage.getItem).mockReturnValue('null');
    expect(pulseRepo.load()).toEqual({
      highScore: 0,
      sfx: true,
      difficulty: 'normal',
    });
  });
});
