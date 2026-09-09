declare global {
  interface Window {
    __lenis: import("lenis").default | null;
  }
}

export {};
