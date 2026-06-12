// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - PulseRelay Canary Fresh
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BookOpen, Gauge, Info, Settings, SlidersHorizontal } from "lucide-react";


export type GameSettingsPulserelayCanaryFreshActionId = "back-to-game-1" | "save-configuration-2";

export interface GameSettingsPulserelayCanaryFreshProps {
  actions?: Partial<Record<GameSettingsPulserelayCanaryFreshActionId, () => void>>;

}

export function GameSettingsPulserelayCanaryFresh({ actions }: GameSettingsPulserelayCanaryFreshProps) {
  return (
    <>
      <div className="scanline"></div>
      {/* Main Configuration Panel */}
      <main className="w-full max-w-2xl bg-surface/95 border border-outline-variant rounded z-10 backdrop-blur-md shadow-2xl relative">
      {/* Header */}
      <header className="border-b border-outline-variant p-lg flex justify-between items-center bg-surface-container-low/50">
      <div className="flex items-center gap-sm">
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary-container" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-md text-headline-md text-primary-container tracking-tighter pulse-text">CONFIG_MODULE</h1>
      </div>
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
      <span className="font-code-sm text-code-sm text-primary-container uppercase">System Online</span>
      </div>
      </header>
      {/* Content Grid */}
      <div className="p-lg grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Left Column: Difficulty & Preferences */}
      <div className="space-y-lg flex flex-col">
      {/* Difficulty Settings */}
      <section className="bg-surface-container border border-outline-variant p-md relative group">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-outline-variant group-hover:bg-primary-container transition-colors duration-300"></div>
      <h2 className="font-label-md text-label-md text-on-surface-variant uppercase mb-md flex items-center gap-xs">
      <Gauge className="text-[16px]" aria-hidden={true} focusable="false" /> Operation Level
                          </h2>
      <div className="flex flex-col gap-sm">
      <label className="flex items-center cursor-pointer border border-outline-variant p-sm hover:border-primary-container/50 transition-colors">
      <input className="hidden peer" name="difficulty" type="radio" defaultValue="novice" />
      <div className="w-4 h-4 border border-outline-variant flex items-center justify-center mr-md peer-checked:border-primary-container">
      <div className="w-2 h-2 bg-transparent peer-checked:bg-primary-container"></div>
      </div>
      <span className="font-code-sm text-code-sm peer-checked:text-primary-container peer-checked:pulse-text">NOVICE</span>
      <span className="ml-auto font-code-sm text-code-sm text-on-surface-variant text-[10px]">BASE_SPEED</span>
      </label>
      <label className="flex items-center cursor-pointer border border-primary-container glow-active p-sm">
      <input defaultChecked={true} className="hidden peer" name="difficulty" type="radio" defaultValue="operator" />
      <div className="w-4 h-4 border border-primary-container flex items-center justify-center mr-md">
      <div className="w-2 h-2 bg-primary-container"></div>
      </div>
      <span className="font-code-sm text-code-sm text-primary-container pulse-text">OPERATOR</span>
      <span className="ml-auto font-code-sm text-code-sm text-primary-container/70 text-[10px]">STANDARD</span>
      </label>
      <label className="flex items-center cursor-pointer border border-outline-variant p-sm hover:border-primary-container/50 transition-colors">
      <input className="hidden peer" name="difficulty" type="radio" defaultValue="expert" />
      <div className="w-4 h-4 border border-outline-variant flex items-center justify-center mr-md peer-checked:border-primary-container">
      <div className="w-2 h-2 bg-transparent peer-checked:bg-primary-container"></div>
      </div>
      <span className="font-code-sm text-code-sm peer-checked:text-primary-container peer-checked:pulse-text">EXPERT</span>
      <span className="ml-auto font-code-sm text-code-sm text-error text-[10px]">OVERDRIVE</span>
      </label>
      </div>
      </section>
      {/* Preferences */}
      <section className="bg-surface-container border border-outline-variant p-md relative group flex-grow">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-outline-variant group-hover:bg-primary-container transition-colors duration-300"></div>
      <h2 className="font-label-md text-label-md text-on-surface-variant uppercase mb-md flex items-center gap-xs">
      <SlidersHorizontal className="text-[16px]" aria-hidden={true} focusable="false" /> Environment Config
                          </h2>
      <div className="space-y-md">
      {/* Toggle Item */}
      <div className="flex items-center justify-between">
      <span className="font-code-sm text-code-sm">Haptic Feedback</span>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input defaultChecked={true} className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-surface border border-outline-variant appearance-none cursor-pointer z-10 top-0 left-0 transition-transform duration-200 ease-in-out" id="toggle1" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-container-highest cursor-pointer border border-outline-variant" htmlFor="toggle1"></label>
      </div>
      </div>
      <div className="w-full h-px bg-outline-variant/50"></div>
      {/* Toggle Item */}
      <div className="flex items-center justify-between">
      <span className="font-code-sm text-code-sm">High Contrast Mode</span>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-surface border border-outline-variant appearance-none cursor-pointer z-10 top-0 left-0 transition-transform duration-200 ease-in-out" id="toggle2" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-container-highest cursor-pointer border border-outline-variant" htmlFor="toggle2"></label>
      </div>
      </div>
      <div className="w-full h-px bg-outline-variant/50"></div>
      {/* Toggle Item */}
      <div className="flex items-center justify-between">
      <span className="font-code-sm text-code-sm">Audio Pings</span>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input defaultChecked={true} className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-surface border border-outline-variant appearance-none cursor-pointer z-10 top-0 left-0 transition-transform duration-200 ease-in-out" id="toggle3" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-container-highest cursor-pointer border border-outline-variant" htmlFor="toggle3"></label>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Right Column: Manual */}
      <div className="flex flex-col h-full">
      <section className="bg-surface-container border border-outline-variant p-md relative group h-full flex flex-col">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-primary-container"></div>
      <h2 className="font-label-md text-label-md text-primary-container uppercase mb-md flex items-center gap-xs pulse-text">
      <BookOpen className="text-[16px]" aria-hidden={true} focusable="false" /> Operator Manual
                          </h2>
      <div className="bg-surface-container-lowest border border-outline-variant p-sm mb-md flex-grow overflow-y-auto">
      <ul className="space-y-sm font-code-sm text-code-sm">
      <li className="flex items-start gap-sm border-b border-outline-variant/30 pb-sm">
      <kbd className="px-2 py-1 bg-surface border border-outline-variant text-primary-container rounded min-w-[60px] text-center">SPACE</kbd>
      <span className="text-on-surface pt-1">Toggle Relay State. Initiates primary sequence transfer.</span>
      </li>
      <li className="flex items-start gap-sm border-b border-outline-variant/30 pb-sm">
      <kbd className="px-2 py-1 bg-surface border border-outline-variant text-primary-container rounded min-w-[60px] text-center">R</kbd>
      <span className="text-on-surface pt-1">Restart current node sequence. Overrides active data stream.</span>
      </li>
      <li className="flex items-start gap-sm">
      <kbd className="px-2 py-1 bg-surface border border-outline-variant text-primary-container rounded min-w-[60px] text-center">P</kbd>
      <span className="text-on-surface pt-1">Pause operations. Halts all active packet routing.</span>
      </li>
      </ul>
      <div className="mt-md p-sm bg-primary-container/10 border border-primary-container/30 text-primary-container text-[10px] uppercase">
      <Info className="text-[14px] inline-block align-text-bottom mr-1" aria-hidden={true} focusable="false" />
                                  Ensure connection stability before altering operation parameters.
                              </div>
      </div>
      </section>
      </div>
      </div>
      {/* Footer Actions */}
      <footer className="border-t border-outline-variant p-md flex justify-between items-center bg-surface-container-low/50">
      <button className="px-lg py-sm font-label-md text-label-md uppercase tracking-wider border border-outline-variant text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-primary-container" type="button" data-action-id="back-to-game-1" onClick={actions?.["back-to-game-1"]}>
                      BACK TO GAME
                  </button>
      <button className="px-lg py-sm font-label-md text-label-md uppercase tracking-wider bg-primary-container text-on-primary border border-primary-container hover:bg-primary-fixed hover:glow-active transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-fixed-dim focus:ring-offset-2 focus:ring-offset-surface" type="button" data-action-id="save-configuration-2" onClick={actions?.["save-configuration-2"]}>
                      SAVE CONFIGURATION
                  </button>
      </footer>
      </main>
      
    </>
  );
}
