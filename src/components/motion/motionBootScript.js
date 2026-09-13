/**
 * Runs before first paint, inline in <head>.
 *
 * It sets `data-motion="on"` on <html>, which is the only thing that makes the
 * stylesheet hide the reveal targets. That ordering matters: if this script
 * never runs — JavaScript disabled, a blocked bundle, an old browser without
 * IntersectionObserver — the attribute is absent and the whole page renders
 * normally. Content can never be left invisible.
 *
 * The timeout is the second half of that guarantee. If the React controller
 * fails to mount for any reason, the attribute is removed and everything
 * becomes visible anyway.
 *
 * Kept as a string so it can be inlined without a network request, and short
 * enough to read in the page source.
 */
export const MOTION_BOOT_SCRIPT = `
(function(){
  var r=document.documentElement;
  try{
    if(!('IntersectionObserver' in window)) return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    r.dataset.motion='on';
    setTimeout(function(){ if(r.dataset.motionReady!=='1') delete r.dataset.motion; },2500);
  }catch(e){ delete r.dataset.motion; }
})();
`.trim();
