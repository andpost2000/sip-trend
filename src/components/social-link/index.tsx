import * as React from 'react';

import './index.scss';

class SocialLink extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="social">
        <a
          href="http://facebook.com"
          aria-label="facebook"
          className="social__link"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a
          href="http://instagramm.com"
          aria-label="instagramm"
          className="social__link"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
          </svg>
        </a>
        <a
          href="http://twitter.com"
          aria-label="twitter"
          className="social__link"
          target="_blank"
        >
          <svg
            width="10px"
            height="15px"
            viewBox="0 0 10 15"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="@Symbols"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Component-/-Sharing-/-Desktop-/-Expanded"
                transform="translate(-164.000000, -14.000000)"
                fill="#00077B"
              >
                <g id="Button" transform="translate(147.000000, 0.000000)">
                  <path
                    d="M23.6224764,24.9001887 L25.8641436,27.0642739 C26.3233698,27.506633 26.3233698,28.2250611 25.8641436,28.6678833 C25.4053972,29.1107056 24.6618537,29.1107056 24.2035872,28.6678833 L21.9995891,26.5413175 L19.7975104,28.6678833 C19.5678972,28.8890628 19.2670249,28.9997684 18.9661525,28.9997684 C18.66576,28.9997684 18.3653675,28.8890628 18.1357543,28.6678833 C17.6770079,28.2250611 17.6770079,27.5070962 18.1352745,27.0642739 L20.3771816,24.9001887 C19.5609393,24.7206974 18.7737285,24.4084985 18.0486597,23.9693819 C17.4999395,23.6354124 17.3351075,22.935744 17.6808468,22.405608 C18.0256264,21.8747771 18.7506952,21.714972 19.3003752,22.0489415 C20.9419771,23.0457548 23.0567212,23.0459864 24.6992828,22.0489415 C25.2489627,21.714972 25.9737917,21.8747771 26.319291,22.405608 C26.6650303,22.9352808 26.4997185,23.6354124 25.9509983,23.9693819 C25.2259295,24.4089617 24.4387187,24.7206974 23.6224764,24.9001887 Z M21.9898124,21.7408199 C19.7783765,21.7408199 17.9798602,20.004966 17.9798602,17.870989 C17.9798602,15.7363171 19.7783765,14 21.9898124,14 C24.2017282,14 25.9997646,15.7363171 25.9997646,17.870989 C25.9997646,20.004966 24.2017282,21.7408199 21.9898124,21.7408199 Z M21.9898124,16.2685376 C21.0749589,16.2685376 20.329496,16.9871973 20.329496,17.870989 C20.329496,18.7540858 21.0749589,19.4732087 21.9898124,19.4732087 C22.9053858,19.4732087 23.6501289,18.7540858 23.6501289,17.870989 C23.6501289,16.9871973 22.9053858,16.2685376 21.9898124,16.2685376 Z"
                    id="Combined-Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
        </a>
        <a
          href="http://youtube.com"
          aria-label="youtube"
          className="social__link"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
          </svg>
        </a>
      </div>
    );
  }
}

export default SocialLink;
