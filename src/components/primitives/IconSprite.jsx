/**
 * The icon sprite.
 *
 * Rendered exactly once, in the root layout. Every <Icon /> on the page then
 * references a symbol from it with <use>, so a page with forty icons still
 * ships one copy of each path.
 *
 * Drawing style is fixed: 24×24 box, stroke 1.75, round caps and joins. Brand
 * marks (LinkedIn, Facebook, YouTube) are filled because that is how they are
 * distributed. Adding an icon means adding a symbol here and nothing else.
 */
export default function IconSprite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="visually-hidden" aria-hidden="true" focusable="false">
      <symbol id="i-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h15M13 6l6 6-6 6" />
      </symbol>
      <symbol id="i-arrow-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12H5M11 6l-6 6 6 6" />
      </symbol>
      <symbol id="i-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 9l7 7 7-7" />
      </symbol>
      <symbol id="i-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M3 6h18M3 12h18M3 18h18" />
      </symbol>
      <symbol id="i-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M6 6l12 12M18 6L6 18" />
      </symbol>
      <symbol id="i-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="6.5" />
        <path d="M20 20l-4.2-4.2" />
      </symbol>
      <symbol id="i-quote" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </symbol>
      <symbol id="i-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="5" width="17" height="16" rx="2" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
      </symbol>
      <symbol id="i-track" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8.5 12 4l9 4.5-9 4.5z" />
        <path d="M3 12.5 12 17l9-4.5M3 16.5 12 21l9-4.5" />
      </symbol>
      <symbol id="i-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </symbol>
      <symbol id="i-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z" />
      </symbol>
      <symbol id="i-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.5 7 8.5 6 8.5-6" />
      </symbol>
      <symbol id="i-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.4 2.4 3.6 5.3 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.3-3.6-8.5S9.6 5.9 12 3.5z" />
      </symbol>
      <symbol id="i-ship" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17.5c1.6 0 1.6 1.5 3.2 1.5s1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5 1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5" />
        <path d="M5 15V9.5h14L17.5 15" />
        <path d="M9 9.5V6h6v3.5M12 3v3" />
      </symbol>
      <symbol id="i-container" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="10" rx="1" />
        <path d="M7.5 7v10M12 7v10M16.5 7v10" />
      </symbol>
      <symbol id="i-truck" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 6.5h11v10H2zM13 10h4.5l3.5 3.5v3H13z" />
        <circle cx="6.5" cy="18.5" r="1.9" />
        <circle cx="17" cy="18.5" r="1.9" />
      </symbol>
      <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6z" />
        <path d="m9 12 2.2 2.2L15.5 10" />
      </symbol>
      <symbol id="i-leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4c0 9-5.4 13-9.5 13A5.5 5.5 0 0 1 5 11.5C5 7 9.5 4 20 4z" />
        <path d="M4 20c3.5-4.5 7-7 11.5-9" />
      </symbol>
      <symbol id="i-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5.2l3.4 2" />
      </symbol>
      <symbol id="i-route" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="6" r="2.5" />
        <circle cx="18.5" cy="18" r="2.5" />
        <path d="M8 6h6.5a3.5 3.5 0 0 1 0 7h-5a3.5 3.5 0 0 0 0 5H16" />
      </symbol>
      <symbol id="i-headset" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14v-2a8 8 0 1 1 16 0v2" />
        <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
        <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
        <path d="M19.5 19v.5a2.5 2.5 0 0 1-2.5 2.5h-3" />
      </symbol>
      <symbol id="i-crane" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V6l8-3v18" />
        <path d="M12 6h8M20 6v4M16 10h8" />
        <path d="M17 10v4h6v-4" />
      </symbol>
      <symbol id="i-doc-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9" />
        <path d="M13 3v6h6" />
        <path d="m8.5 15 2 2 4-4" />
      </symbol>
      <symbol id="i-warehouse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V9l9-4.5L21 9v12" />
        <path d="M8 21v-7h8v7" />
        <path d="M8 17.5h8" />
      </symbol>
      <symbol id="i-droplet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.5s6 6.3 6 10.2A6 6 0 0 1 6 13.7C6 9.8 12 3.5 12 3.5z" />
      </symbol>
      <symbol id="i-linkedin" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.4H3.6V20h3.34V8.4ZM5.27 3.2a1.94 1.94 0 1 0 0 3.87 1.94 1.94 0 0 0 0-3.87ZM20.4 13.6c0-3.2-1.71-4.69-4-4.69a3.45 3.45 0 0 0-3.13 1.72V8.4H9.94V20h3.33v-6.16c0-1.63.31-3.2 2.33-3.2s2 1.85 2 3.3V20h3.33Z" />
      </symbol>
      <symbol id="i-facebook" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.5 8.6V6.9c0-.8.2-1.2 1.4-1.2h1.6V2.8h-2.7c-3.3 0-4.4 1.5-4.4 4v1.8H8.3v3h2.1V21h4.1v-9.4h2.8l.4-3z" />
      </symbol>
      <symbol id="i-youtube" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.7-1.8C18.3 5 12 5 12 5s-6.3 0-7.9.5a2.5 2.5 0 0 0-1.7 1.8C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.9.9 1.6 1.7 1.8 1.6.5 7.9.5 7.9.5s6.3 0 7.9-.5a2.5 2.5 0 0 0 1.7-1.8c.4-1.5.4-4.7.4-4.7Zm-12 3.1V8.9l5.2 3.1z" />
      </symbol>
      <symbol id="i-instagram" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
      </symbol>
    </svg>
  );
}
