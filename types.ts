// SOVEREIGN-NEXUS - Types

export interface SovereignState {
  isOnline: boolean;
  activeModule: 'chronoLock' | 'realityForge' | 'noosphericEcho' | 'godHand' | null;
  commsLink: 'voice' | 'text' | 'dormant';
}

gexport interface MarketSnapshot {
  timestamp: number;
  price: number;
  volume: number;
}

export interface ChronoLockSession {
  id: string;
  timestamp: number;
  asset: string;
  simulations: number;
}
