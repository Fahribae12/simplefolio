import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

// Initialize Vercel Web Analytics
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };

// Load Vercel Analytics script
const script = document.createElement('script');
script.src = '/_vercel/insights/script.js';
script.defer = true;
document.head.appendChild(script);

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
