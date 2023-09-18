import React from "react";

const icons = {
  // post

  Media: (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" />
    </svg>
  ),
  GIF: (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z" />
    </svg>
  ),
  Poll: (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z" />
    </svg>
  ),
  Emoji: (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z" />
    </svg>
  ),
  Schedule: (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z" />
    </svg>
  ),
  "Tag Location": (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z" />
    </svg>
  ),
  Down_Arrow: (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" />
    </svg>
  ),
  Globe: (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z" />
    </svg>
  ),

  // main logo
  X_LOGO: (
    <svg viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),

  // sign up dialog
  Google: (
    <svg viewBox="0 0 48 48" width="20">
      <g>
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        ></path>
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        ></path>
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        ></path>
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        ></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
      </g>
    </svg>
  ),
  Apple: (
    <svg viewBox="0 0 24 24" width="20">
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
    </svg>
  ),
  Close: (
    <svg viewBox="0 0 24 24">
      <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" />
    </svg>
  ),
  Back: (
    <svg viewBox="0 0 24 24">
      <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
    </svg>
  ),
  Reveal: (
    <svg viewBox="0 0 24 24">
      <path d="M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
    </svg>
  ),
  Hide: (
    <svg viewBox="0 0 24 24">
      <path d="M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z" />
    </svg>
  ),
  Default_Avi_Head: (
    <svg viewBox="0 0 400.000000 400.000000">
      <g transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)">
        <path
          d="M1924 3140 c-124 -13 -280 -71 -341 -127 -14 -14 -43 -35 -65 -49
-21 -14 -36 -29 -33 -33 3 -5 -12 -27 -33 -49 -21 -22 -36 -44 -34 -51 2 -6
-4 -11 -13 -11 -9 0 -14 -4 -10 -10 6 -10 -42 -113 -56 -118 -4 -2 -5 -10 -2
-18 3 -8 0 -14 -6 -14 -6 0 -8 -7 -5 -15 4 -8 1 -15 -5 -15 -6 0 -8 -7 -5 -15
4 -8 1 -15 -5 -15 -6 0 -8 -6 -5 -14 3 -8 0 -17 -5 -21 -6 -3 -9 -11 -5 -16 3
-5 0 -16 -6 -24 -6 -8 -9 -19 -5 -25 4 -6 2 -17 -4 -24 -6 -7 -9 -21 -5 -30 3
-9 1 -23 -6 -31 -7 -8 -9 -26 -5 -44 4 -17 3 -36 -1 -42 -10 -18 -11 -329 0
-329 5 0 6 -13 3 -30 -4 -19 -2 -30 4 -30 6 0 9 -9 6 -20 -3 -11 -1 -23 5 -26
5 -3 7 -12 4 -20 -3 -8 -1 -14 5 -14 6 0 9 -7 5 -15 -3 -8 -1 -15 5 -15 6 0 7
-4 4 -10 -3 -5 -2 -10 4 -10 6 0 16 -18 22 -40 7 -22 16 -40 21 -40 4 0 8 -4
8 -9 0 -14 98 -107 135 -127 19 -10 35 -22 35 -27 0 -4 5 -5 10 -2 6 3 10 1
10 -5 0 -6 4 -9 9 -5 5 3 12 1 16 -5 4 -6 11 -8 16 -5 5 4 9 2 9 -4 0 -6 7 -8
15 -5 8 4 15 1 15 -6 0 -7 8 -9 20 -5 12 4 20 2 20 -5 0 -6 10 -8 25 -4 15 4
25 2 25 -5 0 -6 11 -8 30 -5 19 4 30 2 30 -5 0 -7 19 -9 59 -5 39 4 61 3 65
-5 10 -15 226 -15 226 0 0 8 18 10 60 6 41 -5 60 -3 60 4 0 7 11 9 30 6 16 -4
32 -2 35 4 4 5 15 7 26 4 11 -4 19 -2 19 5 0 7 8 9 20 5 12 -4 20 -2 20 5 0 7
7 10 15 6 8 -3 15 -1 15 4 0 6 3 9 8 8 10 -2 106 45 110 55 2 4 7 7 11 7 12 0
115 104 113 113 -1 4 2 7 6 7 5 0 15 18 22 40 7 22 17 40 22 40 5 0 6 5 3 10
-3 6 -2 10 4 10 6 0 8 7 5 15 -4 8 -1 15 5 15 6 0 8 6 5 14 -3 8 -1 17 4 20 6
3 8 15 5 26 -3 11 0 20 6 20 6 0 8 11 5 30 -4 17 -3 30 2 30 5 0 9 74 9 165 0
91 -4 165 -9 165 -4 0 -5 16 -2 36 5 22 3 41 -4 49 -7 8 -9 23 -5 34 3 10 1
22 -5 26 -6 4 -8 15 -5 25 3 10 1 21 -5 25 -6 3 -8 11 -4 16 3 5 0 16 -6 24
-6 8 -9 19 -5 25 3 5 1 10 -5 10 -7 0 -10 7 -6 15 3 8 1 15 -5 15 -6 0 -9 7
-5 15 3 8 1 15 -5 15 -6 0 -9 7 -5 15 3 8 2 15 -3 15 -7 0 -73 131 -72 144 0
3 -17 23 -39 46 -21 22 -42 49 -45 60 -4 11 -10 20 -15 20 -4 0 -29 17 -55 39
-129 106 -340 161 -541 141z"
        />
      </g>
    </svg>
  ),
  Default_Avi_Body: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="265"
      zoomAndPan="magnify"
      viewBox="0 0 198.75 92.249997"
      height="123"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <clipPath id="7acd8599df">
          <path
            d="M 0.675781 0 L 197.824219 0 L 197.824219 91.507812 L 0.675781 91.507812 Z M 0.675781 0 "
            clip-rule="nonzero"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#7acd8599df)">
        <path
          d="M 81.375 2.167969 C 41.125 10.292969 10.054688 42.71875 2.082031 84.921875 C 1.402344 88.382812 0.875 91.316406 0.875 91.46875 C 0.875 91.617188 45.265625 91.769531 99.433594 91.769531 C 153.675781 91.769531 197.988281 91.617188 197.988281 91.46875 C 197.988281 89.4375 195.128906 77.023438 193.398438 71.683594 C 190.691406 63.179688 188.285156 57.6875 184.222656 50.765625 C 169.25 25.039062 145.402344 7.65625 117.261719 2.167969 C 107.707031 0.285156 90.628906 0.285156 81.375 2.167969 Z M 81.375 2.167969 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
      </g>
    </svg>
  ),
  "Add Photo": (
    <svg viewBox="0 0 24 24">
      <path d="M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z" />
    </svg>
  ),
  "Zoom Out": (
    <svg viewBox="0 0 24 24">
      <path d="M11 4c-3.87 0-7 3.13-7 7s3.13 7 7 7c1.93 0 3.68-.78 4.95-2.05C17.21 14.68 18 12.93 18 11c0-3.87-3.14-7-7-7zm-9 7c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.12-.74 4.08-1.97 5.62l3.68 3.67-1.42 1.42-3.67-3.68C15.08 19.26 13.12 20 11 20c-4.97 0-9-4.03-9-9zm12.5 1h-7v-2h7v2z" />
    </svg>
  ),
  "Confirmed Check": (
    <svg viewBox="0 0 24 24">
      <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z" />
    </svg>
  ),
  "Error Exclamation": (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#f1202d" />
      <text
        x="50%"
        y="50%"
        fontSize="14"
        fontWeight="bold"
        dy=".3em"
        fill="white"
      >
        !
      </text>
    </svg>
  ),
};

export default icons;
