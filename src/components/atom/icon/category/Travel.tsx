export default function Travel({ colored = false }: { colored?: boolean }) {
  return (
    <svg width="62" height="67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#a)" stroke={colored ? "#44AC8D" : "#787878"}>
        <circle cx="31" cy="23" r="22.5" />
        <path d="m24 33-5-4.5-4-3h9c5.667-3.833 17.7-11.4 20.5-11C47.3 14.9 32 27 24 33Z" />
        <path d="m36 18-15 .857 9.5 2.643" />
      </g>
      <path
        d="M24.52 54.25v.966h3.821v-.966H24.52Zm0 4.004v.966h3.821v-.966H24.52Zm-2.325-5.852c-1.848 0-3.15 1.722-3.15 4.41 0 2.702 1.302 4.424 3.15 4.424 1.834 0 3.15-1.722 3.15-4.424 0-2.688-1.316-4.41-3.15-4.41Zm0 1.05c1.218 0 2.058 1.316 2.058 3.36 0 2.058-.84 3.402-2.058 3.402s-2.058-1.344-2.058-3.402c0-2.044.84-3.36 2.058-3.36Zm5.894-2.03v12.684h1.148V51.422H28.09Zm13.16.014v8.008h1.105v-8.008h-1.106Zm-2.059 3.43v.966h2.394v-.966H39.19Zm-.644-3.178v7.308h1.092v-7.308h-1.092Zm-6.916 1.26v.924h6.412v-.924H31.63Zm3.22 1.568c-1.596 0-2.702.868-2.702 2.17 0 1.316 1.106 2.17 2.702 2.17 1.582 0 2.688-.854 2.688-2.17 0-1.302-1.106-2.17-2.688-2.17Zm0 .868c.98 0 1.652.518 1.652 1.302 0 .798-.672 1.302-1.652 1.302-.994 0-1.666-.504-1.666-1.302 0-.784.672-1.302 1.666-1.302Zm-.574-3.85v1.932h1.134v-1.932h-1.134Zm3.934 8.134c-2.66 0-4.228.784-4.228 2.198 0 1.4 1.568 2.198 4.228 2.198 2.632 0 4.214-.798 4.214-2.198 0-1.414-1.582-2.198-4.214-2.198Zm0 .896c1.918 0 3.066.462 3.066 1.302 0 .84-1.148 1.316-3.066 1.316-1.946 0-3.08-.476-3.08-1.316 0-.84 1.134-1.302 3.08-1.302Z"
        fill={colored ? "#44AC8D" : "#787878"}
      />
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h62v45.783H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}