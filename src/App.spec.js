import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import App from './App.svelte';

describe('Portfolio App - Root Smoke Test', () => {
  beforeEach(() => {
    // Polyfill IntersectionObserver if not present in DOM environment
    if (!global.IntersectionObserver) {
      global.IntersectionObserver = class {
        constructor(callback) {
          this.callback = callback;
        }
        observe() {}
        unobserve() {}
        disconnect() {}
      };
    }

    // Mock HTMLCanvasElement getContext for WebGL / Three.js
    if (!HTMLCanvasElement.prototype.getContext) {
      HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
        getExtension: vi.fn(),
        getParameter: vi.fn(),
        createTexture: vi.fn(),
        bindTexture: vi.fn(),
        texParameteri: vi.fn(),
        texImage2D: vi.fn(),
        clear: vi.fn(),
        viewport: vi.fn(),
      });
    }

    document.body.innerHTML = '';
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('mounts portfolio root component cleanly without crashing', () => {
    const target = document.createElement('div');
    document.body.appendChild(target);

    const app = new App({
      target,
    });

    expect(app).toBeDefined();
    expect(target.innerHTML).not.toBe('');
  });

  it('renders core portfolio sections in DOM', () => {
    const target = document.createElement('div');
    document.body.appendChild(target);

    new App({
      target,
    });

    const mainElement = target.querySelector('main');
    expect(mainElement).not.toBeNull();
  });
});
