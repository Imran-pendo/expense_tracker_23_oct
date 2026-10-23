// Pendo agent global — injected by the Pendo install snippet at runtime.
interface PendoAgent {
  track(eventName: string, properties?: Record<string, string | number | boolean>): void;
}

declare const pendo: PendoAgent | undefined;
