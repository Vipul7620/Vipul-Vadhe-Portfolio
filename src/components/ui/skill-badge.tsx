
'use client';

import * as React from 'react';
import { Badge } from '@/components/ui/badge';

const SvgIcon = ({ children, viewBox = "0 0 24 24" }: { children: React.ReactNode; viewBox?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className="w-4 h-4 mr-1.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
  
  const skillIcons: { [key: string]: React.ReactNode } = {
      // Technical Skills
      Python: <SvgIcon viewBox="0 0 24 24"><g fillRule="nonzero" fill="none"><path d="M14.24,19.94a4.8,4.8,0,0,1-4.48,0,4.77,4.77,0,0,1,0-6.79,4.79,4.79,0,0,1,6.79,0v-3a4.79,4.79,0,0,0-6.79,0,4.77,4.77,0,0,0,0,6.79,4.79,4.79,0,0,0,6.79,0Z" style={{fill: '#ffd43b'}}/><path d="M9.76,4.06a4.8,4.8,0,0,1,4.48,0,4.77,4.77,0,0,1,0,6.79,4.79,4.79,0,0,1-6.79,0v3a4.79,4.79,0,0,0,6.79,0,4.77,4.77,0,0,0,0-6.79,4.79,4.79,0,0,0-6.79,0Z" style={{fill: '#306998'}}/><rect x="14" y="1" width="9" height="4" rx="2" ry="2" style={{fill: '#306998'}}/><rect x="1" y="19" width="9" height="4" rx="2" ry="2" style={{fill: '#ffd43b'}}/></g></SvgIcon>,
      Java: <SvgIcon viewBox="0 0 64 64"><g fill="#5382a1"><path d="M36,25.2c-2.4-2.1-4.6-3.3-8.8-3.3c-4.3,0-6.5,1.6-6.5,4.3c0,2.5,2,4,5.4,5.6c4.4,2.1,6.8,4.5,6.8,9.2 c0,5.7-4.3,9.6-10.8,9.6c-5.9,0-10.1-2.9-12.7-5.9l3.8-2.9c2,2.3,5.2,4.5,8.9,4.5c4,0,6.3-1.9,6.3-4.8c0-2.8-2-4.5-5.7-6.2 c-4.4-2-7.1-4.6-7.1-9c0-4.8,3.7-8.8,10-8.8C30.3,19.1,33.9,21.5,36,25.2z"/><path d="M51,32.2c0,8.3-4.5,16.4-12.2,16.4c-7.9,0-12.4-8.3-12.4-16.4S30.7,15.8,38.8,15.8C46.5,15.8,51,23.9,51,32.2z M45.4,32.2c0-5.9-2.7-12-6.6-12s-6.6,6.1-6.6,12s2.7,12,6.6,12S45.4,38.1,45.4,32.2z"/></g><path d="M19.3,16.2c-2.3-1.8-5.2-2.9-8.4-2.9c-4,0-6.8,1.4-6.8,4.2c0,2.6,2.3,4,4.9,5.2c2.6,1.2,5.2,2.4,5.2,5.7 c0,3.9-3.2,6.2-7.4,6.2c-4.4,0-7.3-2-9.1-3.8l2.9-2.3c1.4,1.4,3.7,2.8,6.2,2.8c2.8,0,4.5-1.3,4.5-3.3c0-2.1-1.6-3.2-4.4-4.5 c-2.8-1.3-5.7-2.6-5.7-5.8c0-3.4,2.9-5.8,7.1-5.8C14.7,14.3,17.4,15.1,19.3,16.2z" fill="#f89820"/></SvgIcon>,
      PHP: <SvgIcon viewBox="0 0 128 68"><path fill="#6181B6" d="M64 68c35.346 0 64-15.222 64-34S99.346 0 64 0 0 15.222 0 34s28.654 34 64 34z"/><path fill="#FFF" d="M40.243 43.149h-5.405V24.324h5.405c4.152 0 6.649 2.027 6.649 5.351s-2.497 5.351-6.649 5.351h-2.162v7.122h2.162c4.152 0 6.649 2.027 6.649 5.351s-2.497 5.351-6.649 5.351zm21.622-18.825h-5.405V15.73h5.405c4.152 0 6.649 2.027 6.649 5.351s-2.497 5.351-6.649 5.351h-2.162v7.122h2.162c4.152 0 6.649 2.027 6.649 5.351s-2.497 5.351-6.649 5.351h-5.405V43.15h5.405c4.152 0 6.649-2.027 6.649-5.351s-2.497-5.351-6.649-5.351h-2.162V24.324h2.162c4.152 0 6.649 2.027 6.649 5.351s-2.497 5.351-6.649 5.351zm21.622-7.122h-5.405v18.825h-5.405V24.324h5.405c4.152 0 6.649 2.027 6.649 5.351s-2.497 5.351-6.649 5.351h-2.162v7.122h2.162c4.152 0 6.649 2.027 6.649 5.351s-2.497 5.351-6.649 5.351z"/></SvgIcon>,
      JavaScript: <SvgIcon viewBox="0 0 24 24"><path fill="#F0DB4F" d="M0 0h24v24H0z"/><path d="M8.29 16.25h2.33l.9-1.58c.25-.42.5-.84.75-1.25h.08c.25.41.5.83.75 1.25l.9 1.58h2.33l-2.12-3.59 1.95-3.32h-2.33l-.75 1.41c-.21.37-.42.79-.58 1.12h-.08c-.16-.33-.37-.75-.58-1.12l-.75-1.41h-2.33l1.95 3.32L8.29 16.25zM15.29 12.01c0-1.25.87-2.16 2.12-2.16 1.25 0 2.12.91 2.12 2.16s-.87 2.16-2.12 2.16c-1.25 0-2.12-.9-2.12-2.16zm-1.75-.01c0 1.95 1.54 3.49 3.87 3.49 2.33 0 3.87-1.54 3.87-3.49s-1.54-3.49-3.87-3.49c-2.33 0-3.87 1.55-3.87 3.5z"/></SvgIcon>,
      HTML5: <SvgIcon viewBox="0 0 24 24"><path fill="#E44D26" d="m2.6 1.15l1.83 20.7L12 24l7.57-2.15l1.83-20.7z"/><path fill="#F16529" d="m12 2.52l6.2 17.5l-6.2 1.63V2.52z"/><path fill="#EBEBEB" d="m12 13.5l-3.23-.88l-.21-2.38h-2.24l.3 3.4h5.38zm0 4.38l-3.25-.89l-.42-4.71h-2.23l.63 7.07L12 21.5z"/><path fill="#FFF" d="m12 8.75h4.15l-.36 4.12l-3.79 1.03v-2.28l1.79-.49l.13-1.51H12V8.75zm0 8.13l3.24-.89l.45-5.04h-3.69v2.21h1.5l-.15 1.68l-1.35.37z"/></SvgIcon>,
      CSS3: <SvgIcon viewBox="0 0 24 24"><path fill="#1572B6" d="m2.6 1.15l1.83 20.7L12 24l7.57-2.15l1.83-20.7z"/><path fill="#33A9DC" d="m12 2.52l6.2 17.5l-6.2 1.63V2.52z"/><path fill="#EBEBEB" d="m12 13.5l-3.23-.88l-.21-2.38h-2.24l.3 3.4h5.38zm0 4.38l-3.25-.89l-.42-4.71h-2.23l.63 7.07L12 21.5z"/><path fill="#FFF" d="M12 8.75h4.15l-.36 4.12l-3.79 1.03v-2.28l1.79-.49l.13-1.51H12V8.75zm0 8.13l3.24-.89l.45-5.04h-3.69v2.21h1.5l-.15 1.68l-1.35.37z"/></SvgIcon>,
      React: <SvgIcon viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" fill="#61DAFB"/><g stroke="#61DAFB" fill="none"><ellipse cx="12" cy="12" rx="11" ry="4.2"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/></g></SvgIcon>,
      'Next.js': <SvgIcon viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="black"/><path d="M16.5 6h-2.2l-4.3 7.4v-7.4H7.5v12h2.2l4.3-7.4v7.4h2.5z" fill="white"/></SvgIcon>,
      'Tailwind CSS': <SvgIcon viewBox="0 0 24 24"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 2.25c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5 7.5-3.358 7.5-7.5-3.358-7.5-7.5-7.5zm-3.75 6c0-1.243 1.007-2.25 2.25-2.25S12.75 9.757 12.75 11s-1.007 2.25-2.25 2.25S8.25 12.243 8.25 11zm6 0c0-1.243 1.007-2.25 2.25-2.25s2.25 1.007 2.25 2.25-1.007 2.25-2.25 2.25-2.25-1.007-2.25-2.25z" fill="#38BDF8"/></SvgIcon>,
      'Node.js': <SvgIcon viewBox="0 0 24 24"><path fill="#339933" d="M11.3,1.17c-2.43.08-4.7,1.14-6.3,2.94C1,6,1,10.7,2.83,14.67c2.2,4.8,6.2,7.2,10.5,6.5.9-.15,1.5-.9,1.5-1.8v-1.1c0-1.5-1.2-2.7-2.7-2.7h-3c-1.5,0-2.7-1.2-2.7-2.7V9.77c0-1.5,1.2-2.7,2.7-2.7h6c1.5,0,2.7,1.2,2.7,2.7v4.6c0,4.4,4.2,6,7,3.6,1.4-1.2,2.3-2.9,2.3-4.8C23,6,18,1,11.3,1.17Z"/></SvgIcon>,
      Bootstrap: <SvgIcon viewBox="0 0 24 24"><path fill="#7952B3" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.84 6.09c.42 0 .76.34.76.76v8.3c0 .42-.34.76-.76.76H8.16c-.42 0-.76-.34-.76-.76v-8.3c0-.42.34-.76.76-.76h7.68zm-1.12 2.2H9.28v5.42h5.44V8.29z"/></SvgIcon>,
      jQuery: <SvgIcon viewBox="0 0 24 24"><path fill="#0769AD" d="M22.5,10.6c-.3-1.2-1-2.2-2-3-1-.8-2.2-1.2-3.5-1.2-1.7,0-3.3.6-4.6,1.7l1.2,1.3c1-.9,2.2-1.4,3.4-1.4,1,0,1.9.3,2.6.9.7.6,1.1,1.4,1.1,2.4s-.4,1.8-1.1,2.4c-.7.6-1.6.9-2.6.9h-1.6v2.3h1.6c1,0,1.9.3,2.6.9.7.6,1.1,1.4,1.1,2.4s-.4,1.8-1.1,2.4c-.7.6-1.6.9-2.6.9s-1.9-.3-2.6-.9c-.6-.5-.9-1.2-1-1.9l-2.2.6c.2,1.4,1,2.6,2.1,3.4,1.1.9,2.5,1.3,4,1.3,1.3,0,2.5-.4,3.5-1.2,1-.8,1.7-1.8,2-3,.3-1.2.3-2.5,0-3.7-.3-1.2-1-2.2-2-3zM7.3,10c.8,0,1.5.3,2.1.8.6.5,1,1.3,1,2.2,0,1.2-.5,2.1-1.4,2.8-.9.7-2,1-3.3,1s-2.4-.3-3.3-1c-.9-.7-1.4-1.6-1.4-2.8,0-1,.3-1.8.8-2.5.5-.7,1.2-1.1,2-1.4.3-1.4.9-2.6,1.8-3.4L7.4,6.5c-1.3,1.1-2.2,2.6-2.5,4.3H4v2.3h.5c-1.1,1.3-1.7,2.9-1.7,4.7,0,1.5.5,2.9,1.5,4,1,.9,2.4,1.5,4,1.5,1.4,0,2.6-.4,3.6-1.1.7-.5,1.2-1.1,1.5-1.8H14v-2.3h-1.2c-.3,1-1,1.8-2,2.3-.9.5-2,.7-3.1.5-1.7-.3-3-1.3-3.6-2.9.2.1.4.1.7.1z"/></SvgIcon>,
      Django: <SvgIcon viewBox="0 0 24 24"><path fill="#092E20" d="M20 6H4v12h16V6z"/><path fill="#FFF" d="M7 9h2v6H7zm3 0h2v6h-2zm3 0h2v6h-2z"/></SvgIcon>,
      Spring: <SvgIcon viewBox="0 0 24 24"><path fill="#6DB33F" d="M21.5,14.7c0,3.6-2,6.5-6.1,6.5s-6.3-2.9-6.3-6.5c0-4.4,2.8-6.5,6.2-6.5C19,8.2,21.5,10.7,21.5,14.7z M12,14.7c0,2.4,1.2,4.4,3.4,4.4s3.3-2,3.3-4.4s-1.1-4.4-3.3-4.4S12,12.3,12,14.7z"/><path fill="#6DB33F" d="M11,12.2c0-5.8-3.5-6.5-5.9-6.5c-2.8,0-4.3,2.5-4.3,2.5L2,6.5C4.3,2.9,8.2,2.8,10.6,3c3.4.3,4.9,2.4,4.9,5.7V21h-4.5V12.2z"/></SvgIcon>,
      MySQL: <SvgIcon viewBox="0 0 24 24"><path fill="#4479A1" d="M12.6,12.2c1-2,1.6-4.2,1.6-6.4C14.2,2.6,11.6,0,8.4,0S2.6,2.6,2.6,5.8c0,2.2.6,4.4,1.6,6.4L0,18.4V24h16.8v-5.6ZM8.4,2.5c1.8,0,3.3,1.5,3.3,3.3S10.2,9.1,8.4,9.1,5.1,7.6,5.1,5.8,6.6,2.5,8.4,2.5Z"/><path fill="#F29111" d="M17.1,7.5h6.6v7.7c0,3.6-2.2,4.6-4.8,4.6h-2v-2.3h2c1.2,0,2.2-.5,2.2-2.3V9.8h-4Zm-4.8,14.2,2.2-3.1h2v5.4h-2.3l-2.1-3.2-.8,1v2.2H9.2V16.3h2.3v5.4Z"/></SvgIcon>,
      SQLite: <SvgIcon viewBox="0 0 24 24"><path fill="#003B57" d="M3.7,1.1l7.6,3.1L19,1.1l-7.6,3.1ZM19,2.2l-7.6,3.1L3.7,2.2,11.4,5.3Zm0,2.1L11.4,7.4,3.7,4.3,11.4,7.4Zm0,6.3L11.4,11.7,3.7,8.6l7.7,3.1ZM12.1,23,4.5,19.9l7.6-3.1,7.7,3.1Zm7.7-6.2L12.1,13.7l-7.6,3.1,7.7,3.1Zm0-2.1-7.7-3.1L4.5,11.6l7.6-3.1Z"/></SvgIcon>,
      MongoDB: <SvgIcon viewBox="0 0 24 24"><path fill="#4DB33D" d="M15.3,23.3c-2.2,1-4.9,1-7,0C2,20.4.8,16.4.8,12.1S2,3.7,8.2.8c2.2-1,4.9-1,7,0,6.2,2.9,7.5,6.9,7.5,11.2S21.5,20.4,15.3,23.3ZM12,3.3c-2.4,0-4.6,1-6,2.8v11.8c1.4,1.8,3.6,2.8,6,2.8s4.6-1,6-2.8V6.1C16.6,4.3,14.4,3.3,12,3.3Z"/><path fill="#FFF" d="M12.1,6.5c-1.1,0-2,.3-2.6.9-.6.6-1,1.5-1,2.5V14c.6.4,1.3.6,2.1.6s1.5-.2,2.1-.6V9.9c0-1-.3-1.8-1-2.5C14.1,6.8,13.2,6.5,12.1,6.5Z"/></SvgIcon>,
      AWS: <SvgIcon viewBox="0 0 24 24"><path fill="#FF9900" d="M14.2,16.4c-2.2-2.1-2.5-5.5-2.2-7.8.2-1.9.9-4.2,3.2-4.2h2.2L15.9,8c-1,1-1.1,2.3-.6,3.4l2,3.4-3.1,1.6Z"/><path fill="#232F3E" d="M12.2,5.2c-3.1,0-5.7,2.6-5.7,5.7s2.6,5.7,5.7,5.7,5.7-2.6,5.7-5.7-2.6-5.7-5.7-5.7Zm2.7,8.7c-1.5,1.5-4,1.5-5.5,0-1.5-1.5-1.5-4,0-5.5s4-1.5,5.5,0,1.5,4,0,5.5Z"/><path fill="#FF9900" d="M15.7,18.8c.8.2,1.7.3,2.5.3,3.1,0,5.7-2.6,5.7-5.7,0-1.9-.9-3.6-2.4-4.7l-1.9,1.1c.9.6,1.4,1.6,1.4,2.7,0,2-1.6,3.6-3.6,3.6-.5,0-1-.1-1.4-.3Z"/></SvgIcon>,
      Azure: <SvgIcon viewBox="0 0 24 24"><path fill="#0078D4" d="m17.5 2.5l-10 8.5l4.5 9l12 -9.5z"/><path fill="#0078D4" d="m6.5 12.5l-4 3.5l8 5.5l5.5 -10.5z"/></SvgIcon>,
      'Power BI': <SvgIcon viewBox="0 0 24 24"><path fill="#F2C811" d="M4 4h4v16H4zM10 4h4v7h-4zM16 4h4v12h-4z"/></SvgIcon>,
      Firebase: <SvgIcon viewBox="0 0 24 24"><path fill="#FFCA28" d="M4.33,13.84,12,21.5l7.67-7.66L18.49,15,12,2.5,5.51,15Z"/><path fill="#FFA000" d="m12,17.5-6.49-6.49L4.33,12.16l7.67,7.67Z"/><path fill="#F57C00" d="M4.33,13.84,12,6.17v15.33l-7.67-7.66Z"/></SvgIcon>,
      Git: <SvgIcon viewBox="0 0 24 24"><path fill="#F05032" d="M22.5,10.6c-.3-1.2-1-2.2-2-3-1-.8-2.2-1.2-3.5-1.2-1.7,0-3.3.6-4.6,1.7l1.2,1.3c1-.9,2.2-1.4,3.4-1.4,1,0,1.9.3,2.6.9.7.6,1.1,1.4,1.1,2.4s-.4,1.8-1.1,2.4c-.7.6-1.6.9-2.6.9h-1.6v2.3h1.6c1,0,1.9.3,2.6.9.7.6,1.1,1.4,1.1,2.4s-.4,1.8-1.1,2.4c-.7.6-1.6.9-2.6.9s-1.9-.3-2.6-.9c-.6-.5-.9-1.2-1-1.9l-2.2.6c.2,1.4,1,2.6,2.1,3.4,1.1.9,2.5,1.3,4,1.3,1.3,0,2.5-.4,3.5-1.2,1-.8,1.7-1.8,2-3,.3-1.2.3-2.5,0-3.7-.3-1.2-1-2.2-2-3zM7.3,10c.8,0,1.5.3,2.1.8.6.5,1,1.3,1,2.2,0,1.2-.5,2.1-1.4,2.8-.9.7-2,1-3.3,1s-2.4-.3-3.3-1c-.9-.7-1.4-1.6-1.4-2.8,0-1,.3-1.8.8-2.5.5-.7,1.2-1.1,2-1.4.3-1.4.9-2.6,1.8-3.4L7.4,6.5c-1.3,1.1-2.2,2.6-2.5,4.3H4v2.3h.5c-1.1,1.3-1.7,2.9-1.7,4.7,0,1.5.5,2.9,1.5,4,1,.9,2.4,1.5,4,1.5,1.4,0,2.6-.4,3.6-1.1.7-.5,1.2-1.1,1.5-1.8H14v-2.3h-1.2c-.3,1-1,1.8-2,2.3-.9.5-2,.7-3.1.5-1.7-.3-3-1.3-3.6-2.9.2.1.4.1.7.1z"/></SvgIcon>,
      GitHub: <SvgIcon viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.343-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fill="black"/></SvgIcon>,
      'Visual Studio Code': <SvgIcon viewBox="0 0 24 24"><path fill="#007ACC" d="M23.5 17l-5 5-1.5-1.5 3.5-3.5-3.5-3.5 1.5-1.5 5 5zM.5 7l5-5 1.5 1.5-3.5 3.5 3.5 3.5L5.5 12 .5 7zM7 21l3-18h2l-3 18H7z"/></SvgIcon>,
      PyCharm: <SvgIcon viewBox="0 0 24 24"><path fill="#000" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path fill="#30B86A" d="M12 4l-4 4h8z"/><path fill="#FC3158" d="M8 8v8l-4-4z"/><path fill="#FFE01B" d="M12 20l4-4h-8z"/><path fill="#00A7D4" d="M16 16V8l4 4z"/></SvgIcon>,
      Eclipse: <SvgIcon viewBox="0 0 24 24"><path fill="#2C2255" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.13 4.23c.37-.11.75-.17 1.13-.17.38 0 .76.06 1.13.17.65-1.39 1.5-2.64 2.47-3.67C13.92 2.06 12 2.06 12 2.06s-1.92 0-3.6.56c.97 1.03 1.82 2.28 2.47 3.67zM4.06 15.6c.5-2.22 1.48-4.25 2.82-5.91.43.91.95 1.77 1.55 2.56-1.58 1.25-2.8 2.92-3.55 4.81-.46-.96-.75-2.01-.82-3.13v.67zm7.94 4.34c-1.84 0-3.5-.83-4.66-2.19.86-.94 1.88-1.7 3.03-2.22.58.85 1.27 1.62 2.07 2.29-.11.04-.22.07-.34.1zm.06-12.01c-.5-.01-.98.1-1.43.32-.87.42-1.63 1.09-2.22 1.93-.31-.48-.59-.98-.82-1.5C8.98 9.38 10.39 8.6 12 8.57c1.61.03 3.02.78 4.09 2.02-.23.52-.51 1.02-.82 1.5-.59-.84-1.35-1.51-2.22-1.93-.34-.16-.71-.25-1.08-.28zM15.58 12.25c.6-.79 1.12-1.65 1.55-2.56 1.34 1.66 2.32 3.69 2.82 5.91v-.67c-.07 1.12-.36 2.17-.82 3.13-1.02-2.5-2.58-4.57-4.55-5.81z"/></SvgIcon>,
      Postman: <SvgIcon viewBox="0 0 24 24"><path fill="#FF6C37" d="M22.8 10.4c-.2-1-.7-1.8-1.4-2.5-.7-.7-1.6-1-2.6-1.1-1.3-.1-2.6.2-3.7.8l1 .9c.9-.5 2-.8 3.1-.7.7.1 1.4.4 1.9 1 .5.5.8 1.2.8 2s-.3 1.5-.8 2c-.5.5-1.2.8-1.9.8h-1.3v1.8h1.3c.7.1 1.4.4 1.9 1 .5.5.8 1.2.8 2s-.3 1.5-.8 2c-.5.5-1.2.8-1.9.8s-1.4-.3-1.9-1c-.5-.5-.8-1.2-.8-2l-1.8.4c.1 1.1.7 2.1 1.6 2.8.9.7 2 .1 3.2.1 1 0 2-.3 2.8-.9.8-.7 1.3-1.5 1.5-2.5.2-1 .2-2 0-3s-.6-1.8-1.5-2.5zm-14.2.1c-.2 1-.2 2 0 3 .2 1 .7 1.8 1.5 2.5s1.8.9 2.8.9c1.3 0 2.6-.4 3.7-1.2l-1-1c-.9.6-2 .9-3.1.8-.7-.1-1.4-.4-1.9-1-.5-.5-.8-1.2-.8-2s.3-1.5.8-2c.5-.5 1.2-.8 1.9-.8h1.3V7.6h-1.3c-.7-.1-1.4-.4-1.9-1-.5-.5-.8-1.2-.8-2s.3-1.5.8-2c.5-.5 1.2-.8 1.9-.8s1.4.3 1.9 1c.5.5.8 1.2.8 2l1.8-.4c-.1-1.1-.7-2.1-1.6-2.8-.9-.7-2-.9-3.2-.9-1 0-2 .3-2.8.9-.8.7-1.3 1.5-1.5 2.5z"/></SvgIcon>,
      'Android Studio': <SvgIcon viewBox="0 0 24 24"><path fill="#3DDC84" d="M17.5 2.5L12 5l-5.5-2.5L1 7.5l11 14 11-14zM12 18l-6-8.5 6-3 6 3z"/></SvgIcon>,
  
      // Design Skills
      'Adobe Photoshop': <SvgIcon viewBox="0 0 24 24"><path fill="#31A8FF" d="M17.6,1.9H6.4c-2.5,0-4.5,2-4.5,4.5v11.2c0,2.5,2,4.5,4.5,4.5h11.2c2.5,0,4.5-2,4.5-4.5V6.4C22.1,3.9,20.1,1.9,17.6,1.9z"/><path fill="#fff" d="M10.1,7.2h2.9c1.7,0,2.8,1.2,2.8,2.7c0,1-0.6,1.9-1.5,2.3c0.9,0.3,1.6,1.2,1.6,2.3c0,1.7-1.3,2.9-3.2,2.9h-2.6L10.1,7.2z M11.2,11.3h1.2c0.8,0,1.4-0.6,1.4-1.3c0-0.7-0.5-1.2-1.3-1.2h-1.3V11.3z M11.2,16.1h1.4c0.9,0,1.6-0.6,1.6-1.5c0-0.9-0.7-1.5-1.7-1.5h-1.3V16.1z"/></SvgIcon>,
      'Adobe Illustrator': <SvgIcon viewBox="0 0 24 24"><path fill="#FF9A00" d="M17.6,1.9H6.4c-2.5,0-4.5,2,4.5,4.5v11.2c0,2.5,2,4.5,4.5,4.5h11.2c2.5,0,4.5-2,4.5-4.5V6.4C22.1,3.9,20.1,1.9,17.6,1.9z"/><path fill="#fff" d="M8.8,17.4h2.2L12,13.7l1,3.7h2.1L12.3,7.2h-2L7,13.2l-0.7-2.3H4.1L8.8,17.4z M17.2,7.2h2.2v10.2h-2.2V7.2z"/></SvgIcon>,
      CorelDRAW: <SvgIcon viewBox="0 0 24 24"><path fill="#009A4D" d="M22.1,14.6l-5.6-5.6c0,0-2.3-1.6-4.5,0l-5.6,5.6c-0.6,0.6-1,1.3-1.2,2.1C5,17.5,5,18.3,5.2,19c0.4,1.4,1.5,2.5,2.9,2.9c0.7,0.2,1.5,0.2,2.3,0c0.8-0.2,1.5-0.6,2.1-1.2l5.6-5.6c0.6-0.6,1-1.3,1.2-2.1c0.2-0.8,0.2-1.5,0-2.3C19.6,9.2,18.5,8,17.1,7.6c-0.7-0.2-1.5-0.2-2.3,0c-0.8,0.2-1.5,0.6-2.1,1.2L7.1,14.5l-5,5L1,20.4l5-5c0,0,0,0,0,0l5.6-5.6c0,0,0.9-0.9,2.1-0.4c0.6,0.2,1,0.6,1.2,1.2c0.2,0.6,0.2,1.2,0,1.8c-0.2,0.6-0.6,1-1.2,1.2c-0.6,0.2-1.2,0.2-1.8,0L1.2,19.3l-5.6,5.6l-1.2-1.2l5.6-5.6L12,6.3l5.6,5.6l5.6,5.6l1.2-1.2l-5.6-5.6L12,6.3L6.3,12L0.7,17.6l-5.6-5.6l-1.2,1.2l5.6,5.6L6.3,24.4l5.6-5.6l5.6-5.6l5.6-5.6l-1.2-1.2l-5.6,5.6l-5.6,5.6L6.3,12L0.7,6.3l5.6-5.6L7.5,2l-5.6,5.6L7.5,13.2l5.6-5.6l5.6,5.6l5.6,5.6l-1.2,1.2L18.7,14l-5.6-5.6l-5.6,5.6L1.8,19.6l5.6-5.6l5.6-5.6L18.7,4l-5.6,5.6l-5.6,5.6l-5.6-5.6l-1.2,1.2l5.6,5.6L12,18.7l5.6-5.6l-1.2-1.2l-5.6,5.6l-5.6-5.6l5.6-5.6l-1.2-1.2l-5.6,5.6L6.3,12L12,6.3l5.6,5.6l-5.6,5.6l-1.2-1.2l5.6-5.6l-5.6-5.6l5.6-5.6l1.2,1.2L12,7.5l5.6,5.6l-5.6,5.6l1.2,1.2l5.6-5.6L23.7,8l-5.6,5.6l-5.6,5.6L6.9,13.6l5.6-5.6l5.6-5.6l1.2,1.2l-5.6,5.6L8,18.7l5.6-5.6l5.6-5.6l-1.2,1.2l-5.6,5.6L6.3,8l5.6,5.6l-1.2,1.2L5.1,9.2l5.6-5.6l5.6-5.6l-1.2-1.2L9.5,8l5.6,5.6l-1.2,1.2L8.3,9.2l5.6,5.6L19.5,9.2l-5.6-5.6l1.2-1.2l5.6,5.6l5.6,5.6L19.5,15l-5.6-5.6l-1.2,1.2l5.6,5.6l-5.6,5.6l5.6,5.6l1.2-1.2l-5.6-5.6L12.3,12L18,6.3l-5.6,5.6l-1.2-1.2L16.8,5l-5.6,5.6L5.6,5l1.2-1.2L12.4,9.4l5.6-5.6l1.2,1.2L13.6,10.6z"/></SvgIcon>,
      Canva: <SvgIcon viewBox="0 0 24 24"><path fill="#00C4CC" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.12 4.41c1.24 0 2.24 1 2.24 2.24s-1 2.24-2.24 2.24-2.24-1-2.24-2.24 1-2.24 2.24-2.24zm0 6.72c1.24 0 2.24 1 2.24 2.24s-1 2.24-2.24 2.24-2.24-1-2.24-2.24 1-2.24 2.24-2.24z"/></SvgIcon>,
      Figma: <SvgIcon viewBox="0 0 24 24"><path fill="#F24E1E" d="M8 8a4 4 0 11-8 0 4 4 0 018 0z"/><path fill="#FF7262" d="M4 8a4 4 0 11-8 0 4 4 0 018 0z"/><path fill="#A259FF" d="M4 16a4 4 0 11-8 0 4 4 0 018 0z"/><path fill="#1ABCFE" d="M4 24a4 4 0 11-8 0 4 4 0 018 0z"/><path fill="#0ACF83" d="M12 24a4 4 0 11-8 0 4 4 0 018 0z"/></SvgIcon>,
      'Adobe Premiere Pro': <SvgIcon viewBox="0 0 24 24"><path fill="#9999FF" d="M17.6,1.9H6.4c-2.5,0-4.5,2,4.5,4.5v11.2c0,2.5,2,4.5,4.5,4.5h11.2c2.5,0,4.5-2,4.5-4.5V6.4C22.1,3.9,20.1,1.9,17.6,1.9z"/><path fill="#fff" d="M10.1,7.2h2.9c1.7,0,2.8,1.2,2.8,2.7c0,1-0.6,1.9-1.5,2.3c0.9,0.3,1.6,1.2,1.6,2.3c0,1.7-1.3,2.9-3.2,2.9h-2.6L10.1,7.2z M11.2,11.3h1.2c0.8,0,1.4-0.6,1.4-1.3c0-0.7-0.5-1.2-1.3-1.2h-1.3V11.3z M11.2,16.1h1.4c0.9,0,1.6-0.6,1.6-1.5c0-0.9-0.7-1.5-1.7-1.5h-1.3V16.1z M15.9,7.2h2.2v10.2h-2.2V7.2z"/></SvgIcon>,
      Filmora: <SvgIcon viewBox="0 0 24 24"><path fill="#1E90FF" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/><path fill="#fff" d="M15 8h-2v8h2V8zM11 8H9v8h2V8z"/></SvgIcon>,
      CapCut: <SvgIcon viewBox="0 0 24 24"><path fill="#000" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 13h-2v-2h-4v2H8v-2h2v-2H8V9h2v2h4V9h2v2h-2v2h2v2z"/></SvgIcon>,
      'Logo Design': <SvgIcon><circle cx="12" cy="12" r="10" stroke="#8A2BE2" strokeWidth="2"/><path d="M12 6v12M8 10l-4 4 4 4M16 10l4 4-4 4" stroke="#8A2BE2" strokeWidth="2"/></SvgIcon>,
      'Poster Design': <SvgIcon><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#FF4500" strokeWidth="2"/><line x1="8" y1="8" x2="16" y2="16" stroke="#FF4500" strokeWidth="2"/><line x1="16" y1="8" x2="8" y2="16" stroke="#FF4500" strokeWidth="2"/></SvgIcon>,
      'Social Media Creatives': <SvgIcon><path d="M18 8h-2a4 4 0 0 0-4 4v2H8v4h4v6h4v-6h3l1-4h-4v-2a1 1 0 0 1 1-1h3z" stroke="#1DA1F2" strokeWidth="2"/></SvgIcon>,
      'UI/UX Design': <SvgIcon><rect x="3" y="3" width="18" height="18" rx="2" stroke="#F4D03F" strokeWidth="2" fill="none"/><path d="M3 9h18M9 21V9" stroke="#F4D03F" strokeWidth="2"/></SvgIcon>,
      Branding: <SvgIcon><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="#E91E63" strokeWidth="2"/><path d="M7.5 4.21l4.5 2.6 4.5-2.6" stroke="#E91E63" strokeWidth="2"/><path d="M12 22.77V12" stroke="#E91E63" strokeWidth="2"/></SvgIcon>,
      'Motion Graphics': <SvgIcon><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="#3498DB" strokeWidth="2"/><path d="m9 12 3-3 3 3" stroke="#3498DB" strokeWidth="2"/></SvgIcon>,
      'Reels Editing': <SvgIcon><path d="M10 15v-3l-3 1.5 3 1.5zM14 15v-3l3 1.5-3 1.5z" stroke="#E74C3C" strokeWidth="2"/><rect x="3" y="5" width="18" height="14" rx="2" stroke="#E74C3C" strokeWidth="2"/></SvgIcon>,
      Storyboarding: <SvgIcon><rect x="3" y="3" width="7" height="7" rx="1" stroke="#2ECC71" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#2ECC71" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#2ECC71" strokeWidth="2"/><path d="M14 17h7" stroke="#2ECC71" strokeWidth="2"/></SvgIcon>,
  };
  

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Info for all graphic design skills
const graphicDesignSkillInfo: Record<string, { title: string; description: string }> = {
};

// Info for all technical skills
const technicalSkillInfo: Record<string, { title: string; description: string }> = {
  // Programming Languages
  "Python": {
    title: "Python",
    description: "Learned during MCA/BSc CS and through self-study. Used for automation, data analysis, and backend development in academic and personal projects. Future plans: Explore advanced AI/ML and web frameworks.",
  },
  "Java": {
    title: "Java",
    description: "Studied in MCA/BSc CS. Used for OOP concepts, Android development, and backend systems. Future plans: Deepen Spring Boot and enterprise app skills.",
  },
  "PHP": {
    title: "PHP",
    description: "Learned in MCA/BSc CS and used for web backend development in projects like Cloud Classroom and BookStore. Future plans: Explore modern PHP frameworks and APIs.",
  },
  "JavaScript": {
    title: "JavaScript",
    description: "Core web language learned in MCA/BSc CS and through hands-on web projects. Used for frontend interactivity and backend (Node.js). Future plans: Master advanced JS and frameworks.",
  },
  // Frontend Development
  "HTML5": {
    title: "HTML5",
    description: "Foundation of web development, learned in MCA/BSc CS and used in all web projects. Future plans: Explore semantic HTML and accessibility.",
  },
  "CSS3": {
    title: "CSS3",
    description: "Learned in MCA/BSc CS and through building responsive UIs. Used for styling, layouts, and animations. Future plans: Master CSS frameworks and advanced animations.",
  },
  "React": {
    title: "React",
    description: "Self-taught and used in portfolio and other web projects. Used for building dynamic UIs. Future plans: Explore React ecosystem and advanced patterns.",
  },
  "Next.js": {
    title: "Next.js",
    description: "Learned through building this portfolio and other projects. Used for SSR, routing, and performance. Future plans: Master full-stack features and deployment.",
  },
  "Tailwind CSS": {
    title: "Tailwind CSS",
    description: "Used for rapid UI development in portfolio and web projects. Future plans: Explore advanced theming and plugin development.",
  },
  "Bootstrap": {
    title: "Bootstrap",
    description: "Learned in MCA/BSc CS and used for quick, responsive layouts. Future plans: Use for prototyping and legacy projects.",
  },
  "jQuery": {
    title: "jQuery",
    description: "Learned in MCA/BSc CS and used for DOM manipulation in earlier web projects. Future plans: Maintain for legacy support, focus on modern JS.",
  },
  // Backend Development
  "Node.js": {
    title: "Node.js",
    description: "Self-taught for backend APIs and automation. Used in academic and personal projects. Future plans: Explore advanced Node.js and scalable architectures.",
  },
  "Django": {
    title: "Django",
    description: "Learned through self-study and used for building web apps like AI Healthcare Bot. Future plans: Master Django REST and advanced backend features.",
  },
  "Spring": {
    title: "Spring",
    description: "Studied in MCA/BSc CS. Used for Java backend development. Future plans: Deepen Spring Boot and microservices expertise.",
  },
  // Database Management
  "MySQL": {
    title: "MySQL",
    description: "Learned in MCA/BSc CS and used in most web projects for data storage. Future plans: Explore advanced queries and optimization.",
  },
  "SQLite": {
    title: "SQLite",
    description: "Used for lightweight database needs in academic and mobile projects. Future plans: Use for prototyping and embedded apps.",
  },
  "MongoDB": {
    title: "MongoDB",
    description: "Self-taught for NoSQL database needs. Used in web and academic projects. Future plans: Explore advanced aggregation and scaling.",
  },
  // Cloud & Data Tools
  "AWS": {
    title: "AWS",
    description: "Learned basics through self-study and used for hosting and cloud experiments. Future plans: Get certified and use advanced AWS services.",
  },
  "Azure": {
    title: "Azure",
    description: "Studied basics in MCA/BSc CS and used for cloud labs. Future plans: Explore Azure DevOps and cloud solutions.",
  },
  "Power BI": {
    title: "Power BI",
    description: "Learned in MCA/BSc CS and used for data visualization in academic projects. Future plans: Master dashboarding and data analytics.",
  },
  "Firebase": {
    title: "Firebase",
    description: "Used for real-time data and authentication in mobile/web projects like Esports Tournament App. Future plans: Explore advanced Firebase features.",
  },
  // Version Control
  "Git": {
    title: "Git",
    description: "Learned in MCA/BSc CS and used for all project versioning. Future plans: Master advanced workflows and automation.",
  },
  "GitHub": {
    title: "GitHub",
    description: "Used for hosting and collaborating on code. Future plans: Explore GitHub Actions and open source contributions.",
  },
  // Software & IDEs
  "Visual Studio Code": {
    title: "Visual Studio Code",
    description: "Primary code editor for all projects. Future plans: Explore advanced extensions and productivity tools.",
  },
  "PyCharm": {
    title: "PyCharm",
    description: "Used for Python development in academic and personal projects. Future plans: Use for larger Python codebases.",
  },
  "Eclipse": {
    title: "Eclipse",
    description: "Learned in MCA/BSc CS and used for Java development. Future plans: Use for enterprise Java projects.",
  },
  "Postman": {
    title: "Postman",
    description: "Used for API testing and development in web projects. Future plans: Automate API tests and explore advanced features.",
  },
  "Android Studio": {
    title: "Android Studio",
    description: "Used for Android app development in academic and personal projects. Future plans: Build more advanced mobile apps.",
  },
};

export function SkillBadge({ skillName }: { skillName: string }) {
  const icon = skillIcons[skillName] || (
    <SvgIcon>
      <path d="M12 2l-2 7h4zM12 22l-2-7h4zM2 12l7 2v-4zM22 12l-7 2v-4z" />
    </SvgIcon>
  );

  // List of all graphic design skills (from designSkills in skills.tsx)
  const allGraphicDesignSkills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "CorelDRAW",
    "Canva",
    "Figma",
    "Adobe Premiere Pro",
    "Filmora",
    "CapCut",
    "Logo Design",
    "Poster Design",
    "Social Media Creatives",
    "UI/UX Design",
    "Branding",
    "Motion Graphics",
    "Reels Editing",
    "Storyboarding",
  ];

  // List of all technical skills (from technicalSkills in skills.tsx)
  const allTechnicalSkills = [
    // Programming Languages
    "Python", "Java", "PHP", "JavaScript",
    // Frontend Development
    "HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery",
    // Backend Development
    "Node.js", "Django", "Spring",
    // Database Management
    "MySQL", "SQLite", "MongoDB",
    // Cloud & Data Tools
    "AWS", "Azure", "Power BI", "Firebase",
    // Version Control
    "Git", "GitHub",
    // Software & IDEs
    "Visual Studio Code", "PyCharm", "Eclipse", "Postman", "Android Studio",
  ];

  if (allGraphicDesignSkills.includes(skillName) && graphicDesignSkillInfo[skillName]) {
    const { title, description } = graphicDesignSkillInfo[skillName];
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Badge
            variant="secondary"
            className="flex items-center gap-1 pr-3 pl-2 py-1 text-sm bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer border border-primary/20"
          >
            {icon}
            <span>{skillName}</span>
          </Badge>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  if (allTechnicalSkills.includes(skillName) && technicalSkillInfo[skillName]) {
    const { title, description } = technicalSkillInfo[skillName];
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Badge
            variant="secondary"
            className="flex items-center gap-1 pr-3 pl-2 py-1 text-sm bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer border border-primary/20"
          >
            {icon}
            <span>{skillName}</span>
          </Badge>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Badge
      variant="secondary"
      className="flex items-center gap-1 pr-3 pl-2 py-1 text-sm bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer border border-primary/20"
    >
      {icon}
      <span>{skillName}</span>
    </Badge>
  );
}
