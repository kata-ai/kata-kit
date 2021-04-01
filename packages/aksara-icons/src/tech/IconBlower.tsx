import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBlower: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M13.79 10.26a4.9 4.9 0 001.55-2.62A5.48 5.48 0 0012 6.5a5.8 5.8 0 00-1 .1 6 6 0 011.4 2.94 2.53 2.53 0 011.39.72z"
      fill={fill}
    />
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM5 4.5h2a.5.5 0 110 1H5a.5.5 0 110-1zm2 15H5a.5.5 0 010-1h2a.5.5 0 010 1zM5.5 12a6.5 6.5 0 116.5 6.5A6.51 6.51 0 015.5 12zM19 19.5h-2a.5.5 0 010-1h2a.5.5 0 010 1zm0-14h-2a.5.5 0 010-1h2a.5.5 0 010 1z"
      fill={fill}
    />
    <path
      d="M14.33 11.11c.112.283.17.585.17.89 0 .231-.038.46-.11.68a5 5 0 003.06 0 5.41 5.41 0 00-1.29-4.3 5.93 5.93 0 01-1.83 2.73zM10.07 10.43a2.55 2.55 0 011.32-.85 5 5 0 00-1.5-2.66 5.52 5.52 0 00-3.08 3.27 5.93 5.93 0 013.26.24zM9.67 12.89A2.43 2.43 0 019.5 12c0-.231.038-.46.11-.68a5.001 5.001 0 00-3.06 0 5.41 5.41 0 001.29 4.3 5.93 5.93 0 011.83-2.73zM16 13.94a5.998 5.998 0 01-2-.37 2.55 2.55 0 01-1.32.85 5.05 5.05 0 001.5 2.66 5.55 5.55 0 003.08-3.27c-.415.086-.837.13-1.26.13zM10.21 13.74a4.9 4.9 0 00-1.55 2.62A5.48 5.48 0 0012 17.5c.336-.004.67-.038 1-.1a6.06 6.06 0 01-1.43-2.94 2.53 2.53 0 01-1.36-.72zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      fill={fill}
    />
  </svg>
);

IconBlower.defaultProps = {
  ...iconDefaultProps,
};

export default IconBlower;
