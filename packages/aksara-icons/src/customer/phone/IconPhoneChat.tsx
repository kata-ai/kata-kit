import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPhoneChat: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17.07 6.1V5c0-.796-.318-1.559-.884-2.121A3.022 3.022 0 0014.055 2h-8.04c-.8 0-1.567.316-2.132.879A2.993 2.993 0 003 5v14c0 .796.318 1.559.883 2.121A3.023 3.023 0 006.015 22h8.04c.8 0 1.566-.316 2.131-.879A2.992 2.992 0 0017.07 19v-3.14a5.028 5.028 0 002.827-1.753 4.985 4.985 0 000-6.254A5.028 5.028 0 0017.07 6.1zm-2.01 0a5.03 5.03 0 00-2.888 1.737A4.984 4.984 0 0011.04 11c.006.788.202 1.563.573 2.26v-.05l-.573 2.28a.408.408 0 00.27.485.414.414 0 00.202.015l2.322-.56c.396.218.822.377 1.266.47V19a1.008 1.008 0 01-1.005 1h-8.08c-.267 0-.522-.105-.71-.293A.997.997 0 015.01 19V5c0-.265.106-.52.294-.707.189-.188.444-.293.71-.293h8.04c.267 0 .523.105.711.293A.998.998 0 0115.06 5v1.1z"
      fill={fill}
    />
    <path
      d="M10.035 19c.555 0 1.005-.448 1.005-1s-.45-1-1.005-1c-.555 0-1.005.448-1.005 1s.45 1 1.005 1z"
      fill={fill}
    />
  </svg>
);

IconPhoneChat.defaultProps = {
  ...iconDefaultProps,
};

export default IconPhoneChat;