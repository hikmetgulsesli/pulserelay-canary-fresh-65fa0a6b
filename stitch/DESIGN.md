---
name: PulseRelay
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#fface8'
  on-secondary: '#5e0053'
  secondary-container: '#ff24e4'
  on-secondary-container: '#520049'
  tertiary: '#fcf5ff'
  on-tertiary: '#3c0090'
  tertiary-container: '#e3d4ff'
  on-tertiary-container: '#7318ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd7f0'
  secondary-fixed-dim: '#fface8'
  on-secondary-fixed: '#3a0033'
  on-secondary-fixed-variant: '#840076'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d1bcff'
  on-tertiary-fixed: '#23005b'
  on-tertiary-fixed-variant: '#5700c9'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-lg:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  grid-gutter: 16px
  container-margin: 24px
---

## Brand & Style
The design system is engineered for high-stakes, fast-paced technical environments where precision and speed are paramount. The brand personality is **Electric, Technical, and High-Frequency**. It targets power users and players who demand a "system terminal" aesthetic—one that feels like a live data feed from a high-performance engine.

The visual style is a fusion of **Dark Minimalism** and **Cyber-Technician**. It utilizes deep obsidian surfaces to provide a high-contrast backdrop for "light-emissive" interactive elements. The aesthetic prioritizes a "Glow-on-Dark" effect, where digital light serves as the primary signifier of state and urgency, ensuring that critical information is never lost in the noise.

## Colors
The palette is built on a foundation of absolute darkness to maximize the impact of neon accents.

- **Primary (Pulse Cyan):** Used for active data paths, success states, and primary interactive nodes.
- **Secondary (Relay Magenta):** Reserved for "dead rails," warnings, critical errors, and high-alert UI regions.
- **Tertiary (Frequency Violet):** A secondary accent for mid-level hierarchy elements like selection highlights or progress markers.
- **Base (Obsidian):** The deep navy/black (#0a0a0f) serves as the "void" background.
- **Surfaces:** Use slightly lighter shades of navy for containers and panels to establish depth without losing the dark-mode immersion.

## Typography
This design system utilizes **JetBrains Mono** exclusively to maintain a rigid, monospaced structure reminiscent of developer tools and terminal interfaces. 

- **Alignment:** Use rigid vertical and horizontal alignment. Text blocks should feel like code snippets.
- **Uppercase:** Use uppercase sparingly for labels and headers to increase the "industrial" feel.
- **Contrast:** High-priority headlines should use Pulse Cyan. Metadata and less important labels should use a desaturated blue-grey to recede.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy. All spacing is derived from a 4px base unit to ensure alignment with the monospaced typography.

- **Grid Model:** Use a 12-column grid for desktop with 16px gutters.
- **Reflow:** On mobile, the layout collapses to a single column with 16px margins. 
- **Density:** High density is preferred. Elements should be packed efficiently to allow for a comprehensive "dashboard" view of the game state. Use thin 1px borders to separate sections rather than wide whitespace.

## Elevation & Depth
In this design system, depth is achieved through **Luminescence** rather than shadows. 

- **Tonal Layers:** Backgrounds use `#0a0a0f`. Containers use `#12121a`. Floating panels use `#1a1a24`.
- **The Glow Effect:** Active elements do not cast traditional black shadows. Instead, they use a subtle outer glow (e.g., `box-shadow: 0 0 10px rgba(0, 242, 255, 0.3)`) that matches the element's accent color.
- **Borders:** Use 1px solid borders for all containers. Default borders should be low-contrast (deep navy), while active/focused borders should "ignite" with Pulse Cyan.

## Shapes
The shape language is sharp and clinical. 

- **Radius:** A consistent **4px radius** (`rounded-sm`) is applied to all buttons, inputs, and cards. This provides just enough softening to prevent the UI from feeling aggressive while maintaining a precise, technical look.
- **Icons:** Use stroke-based icons with 2px weights and square terminals to match the font's geometry.

## Components
Consistent implementation of these components is vital for the "PulseRelay" aesthetic:

- **Buttons:** 
  - *Primary:* Solid Pulse Cyan background with black text. On hover, increase the glow intensity.
  - *Ghost:* 1px Cyan border, transparent background. Cyan text.
- **Inputs:** Dark backgrounds with a 1px border. On focus, the border turns Pulse Cyan and a subtle glow appears. Use monospaced font for all user input.
- **Chips/Status Tags:** Small, rectangular tags with 4px corners. Use "Relay Magenta" for "Offline/Dead" and "Pulse Cyan" for "Active/Online."
- **Cards:** Use `#12121a` for the background. Add a top-border accent of 2px in Pulse Cyan to denote high-priority data modules.
- **Progress Bars:** Thin 4px height. The "filled" portion should have a linear gradient from Cyan to a slightly darker blue, with a glow effect at the leading edge.
- **The Grid:** A persistent, low-opacity (5%) background grid pattern should be visible across the main viewport to reinforce the technical theme.