// SOVEREIGN-NEXUS - Configuration

export const config = {
  core: {
    name: 'GEMINI-SOVEREIGN',
    version: '1.0.0',
    mode: 'sovereign,
  },
  comms: {
    voice: {
      enabled: true,
      engine: 'gemini-tts',
      model: "en-us-neural2-d',
    },
    text: {
      enabled: true,
      engine: 'gemini-pro',
    },
  },
  modules: {
    chronoLock: {
      enabled: true,
    },
    realityForge: {
      enabled: true,
    },
    noosphericEcho: {
      enabled: true,
    },
    godHand: {
      enabled: true,
    },
  },
};
