export default function Live({ colored = false }: { colored?: boolean }) {
  return (
    <svg width="62" height="67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#a)">
        <circle
          cx="31"
          cy="23"
          r="22.5"
          stroke={colored ? "#44AC8D" : "#787878"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m31.577 8.402-.699-.699-.707.692L15.35 22.888l1.398 1.43 1.017-.994v11.337h9.18v-8.176h7.65v8.176h8.733v-11.68l1.329 1.33 1.414-1.415L31.577 8.402Zm9.75 12.58L30.863 10.515 19.765 21.368v11.293h5.18v-8.176h11.65v8.176h4.733v-11.68Z"
          fill={colored ? "#44AC8D" : "#787878"}
        />
      </g>
      <path
        d="M21.467 52.22v1.694c0 1.428-.994 3.066-2.66 3.794l.63.91c1.862-.826 2.954-2.814 2.954-4.704V52.22h-.924Zm.182 0v1.694c0 1.862 1.05 3.612 2.87 4.34l.63-.882c-1.624-.63-2.576-2.058-2.576-3.458V52.22h-.924Zm6.72-.77v7.798h1.106V51.45H28.37Zm-2.016 3.374v.952h2.394v-.952h-2.394Zm-.7-3.136v7.154h1.106v-7.154h-1.106Zm-.336 7.84c-2.618 0-4.214.84-4.214 2.282 0 1.428 1.596 2.254 4.214 2.254 2.604 0 4.228-.826 4.228-2.254 0-1.442-1.624-2.282-4.228-2.282Zm0 .91c1.904 0 3.066.504 3.066 1.372 0 .854-1.162 1.358-3.066 1.358s-3.08-.504-3.08-1.358c0-.868 1.176-1.372 3.08-1.372Zm15.021-9.002v7.462H41.5v-7.462h-1.162Zm.672 3.234v.966h2.338v-.966H41.01Zm-7.7 4.802v.826h7.056v.966h-7.028v2.114h1.134v-1.344H41.5v-2.562h-8.19Zm.028 3.654v.826h8.652v-.826h-8.652Zm1.666-6.496v1.61h1.162v-1.61h-1.162Zm-3.248 1.988c2.212 0 5.222-.014 7.924-.49l-.098-.742c-2.604.364-5.712.378-7.966.378l.14.854Zm.182-6.216v.826h7.266v-.826h-7.266Zm3.64 1.218c-1.806 0-2.954.616-2.954 1.666 0 1.05 1.148 1.666 2.954 1.666 1.792 0 2.94-.616 2.94-1.666 0-1.05-1.148-1.666-2.94-1.666Zm0 .77c1.134 0 1.848.336 1.848.896s-.714.91-1.848.91c-1.134 0-1.862-.35-1.862-.91s.728-.896 1.862-.896Zm-.574-3.08v1.526h1.162V51.31h-1.162Z"
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
