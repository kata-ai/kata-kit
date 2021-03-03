import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconAudience: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.278 8.6L8.951 7h.017a3.228 3.228 0 01.112-2.02 3.143 3.143 0 016.063 1.22c-.004.27-.04.539-.111.8h.006l-.316 1.6h-.012a2.73 2.73 0 01-5.42 0h-.012zM3.923 9.85l-.226-1.1h.012a2.176 2.176 0 114.198 0h.004l-.219 1.1h-.008a1.892 1.892 0 01-3.753 0h-.008zm12.159-1.1l.226 1.1h.008a1.892 1.892 0 003.753 0h.008l.218-1.1h-.004a2.177 2.177 0 10-4.198 0h-.011zM2.307 14.938h.004c.243-1.067 1.714-1.888 3.497-1.888.068 0 .134.005.2.01l.107.008a4.514 4.514 0 00-1.116 2.038 10.31 10.31 0 00-.065.341l-.39 2.405c-.005.026-.005.053-.005.08 0 .022 0 .045-.002.068h-1.4a1.113 1.113 0 01-1.125-1.257l.276-1.686.01-.068.009-.051zm19.682 1.81l-.276-1.69a1.429 1.429 0 00-.012-.07l-.008-.05h-.004c-.243-1.067-1.713-1.888-3.497-1.888-.07 0-.138.005-.206.01l-.107.008c.55.578.939 1.29 1.128 2.065l.052.266.404 2.495c.003.018.003.037.002.056 0 .016 0 .033.002.05h1.395a1.113 1.113 0 001.127-1.252zm-4.904-1.028l.37 2.28.029.18A1.613 1.613 0 0115.856 20H8.145a1.613 1.613 0 01-1.627-1.828L6.545 18l.37-2.281a5.18 5.18 0 01.034-.173 3.02 3.02 0 011.437-1.788A6.819 6.819 0 0112 12.8a6.819 6.819 0 013.614.958 3.02 3.02 0 011.437 1.788s.03.14.034.174z"
      fill={fill}
    />
  </svg>
);

IconAudience.defaultProps = {
  ...iconDefaultProps,
};

export default IconAudience;
