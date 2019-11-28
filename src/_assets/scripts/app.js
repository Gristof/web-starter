import { createBrotliCompress } from "zlib";
import Highway from '@dogstudio/highway';
import Fade from './transition';

console.log(`I was loaded at ${Date(Date.now()).toString()}`);

const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});