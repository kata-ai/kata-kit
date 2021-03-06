import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconHumanoid: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.699 7.808a7.889 7.889 0 00-2.916-4.266 7.849 7.849 0 00-9.737.313 7.892 7.892 0 00-2.637 4.444h-1.36a1.047 1.047 0 00-.972.656A1.055 1.055 0 003 9.361v1.053a1.004 1.004 0 001 1.002h1.239v6.364c0 .56.22 1.096.614 1.492.393.397.927.62 1.484.623h1.66v1.363a.743.743 0 00.729.742h7.535a.738.738 0 00.73-.742v-5.121l.2-.18c.108-.085.21-.176.31-.271.23-.213.448-.44.649-.682l.17-.21a7.514 7.514 0 001.059-1.795c.316-.723.522-1.49.61-2.275a7.055 7.055 0 000-.802 7.659 7.659 0 00-.08-1.082 9.046 9.046 0 00-.21-1.032zM7.337 17.94a.11.11 0 01-.1-.11v-1.354h1.93a.998.998 0 00.998-1.002 1.004 1.004 0 00-.999-1.002H7.237v-3.007h1.53a.997.997 0 001.049-1.002V9.36a1.055 1.055 0 00-.646-.981 1.047 1.047 0 00-.404-.081H7.467a5.864 5.864 0 011.994-3.016 5.836 5.836 0 019.11 2.525H17.1a6.08 6.08 0 00-4.32 1.79 6.116 6.116 0 00-1.786 4.334v4.009H7.337z"
      fill={fill}
    />
  </svg>
);

IconHumanoid.defaultProps = {
  ...iconDefaultProps,
};

export default IconHumanoid;
