import { RateLimiter } from 'limiter';

export const limiter = new RateLimiter({
  tokensPerInterval: 30,
  interval: 'hour',
  fireImmediately: true,
});
