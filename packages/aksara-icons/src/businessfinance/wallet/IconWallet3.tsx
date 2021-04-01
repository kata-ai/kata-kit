import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconWallet3: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21 10.224h-.5v-.826a2.926 2.926 0 00-.744-1.97 3.015 3.015 0 00-1.886-.983l-3-2.904a2.002 2.002 0 00-1.415-.578 2.028 2.028 0 00-1.415.578l-.53.512L11 3.58a2.002 2.002 0 00-1.42-.582 2.028 2.028 0 00-1.42.582L5.29 6.445H5c-.796 0-1.559.31-2.121.864A2.93 2.93 0 002 9.398v8.612c0 .784.316 1.535.879 2.088A3.024 3.024 0 005 20.963h12.5c.796 0 1.559-.31 2.121-.864a2.93 2.93 0 00.879-2.089v-1.565h.5c.265 0 .52-.103.707-.288a.977.977 0 00.293-.696v-4.252a.977.977 0 00-.293-.696 1.008 1.008 0 00-.707-.289zm-2.5 7.786a.977.977 0 01-.293.696 1.008 1.008 0 01-.707.289H5c-.265 0-.52-.104-.707-.289A.977.977 0 014 18.01V9.398c0-.261.105-.512.293-.696.187-.185.442-.289.707-.289h12.5c.265 0 .52.104.707.289a.977.977 0 01.293.696v.826h-2.33c-.774 0-1.517.303-2.065.842a2.852 2.852 0 00-.855 2.033v.472c0 .762.308 1.494.855 2.033.548.538 1.29.841 2.065.841h2.33v1.565zm1.5-5.817v2.284h-3.83a.927.927 0 01-.65-.266.898.898 0 01-.27-.64V13.1c0-.24.097-.47.27-.64a.927.927 0 01.65-.266H20z"
      fill={fill}
    />
  </svg>
);

IconWallet3.defaultProps = {
  ...iconDefaultProps,
};

export default IconWallet3;
