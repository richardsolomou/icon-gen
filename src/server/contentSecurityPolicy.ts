/**
 * The Content Security Policy's sources by directive, which `middleware.ts` turns into the header. Add the sources the
 * application's own features load from here, so recipe updates to the middleware never conflict with them.
 */
export const contentSecurityPolicy: Record<string, string[]> = {
  'default-src': ["'self'"],
  // Start streams its hydration data as inline scripts, and the root route adds chunk recovery. Shiki highlights the
  // framework examples with its WebAssembly regex engine.
  'script-src': ["'self'", "'unsafe-inline'", "'wasm-unsafe-eval'"],
  'style-src': ["'self'", "'unsafe-inline'"],
  // The footer avatar comes from GitHub.
  'img-src': ["'self'", 'data:', 'https://github.com', 'https://avatars.githubusercontent.com'],
  'font-src': ["'self'", 'data:'],
  'connect-src': ["'self'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'frame-ancestors': ["'none'"],
}
