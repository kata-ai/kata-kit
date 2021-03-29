import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBubbleTick: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.964 10.33l-.01-.05-.02-.19c0-.04-.01-.08-.02-.13v-.04h-.01c-.23-1.35-.87-2.64-1.85-3.74-.98-1.09-2.26-1.95-3.69-2.49-1.23-.46-2.53-.69-3.87-.69-1.81 0-3.56.44-5.08 1.26-2.92 1.6-4.64 4.52-4.39 7.46.13 1.52.71 2.97 1.68 4.19.91 1.15 2.14 2.07 3.56 2.68.87.37 1.73.55 2.65.73.23.04.41.24.41.49 0 .05-.01.09-.02.13-.09.39-.18.78-.1 1.22.09.53.41.84.89.84.51 0 1.1-.35 1.49-.59l.05-.03c.92-.56 1.8-1.19 2.45-1.67 1.44-1.06 3.06-2.27 4.28-3.83a7.735 7.735 0 001.6-5.55zm-4.75-1.21l-5.33 5.33c-.2.2-.45.29-.71.29-.26 0-.51-.1-.71-.29l-2.67-2.67a.996.996 0 111.41-1.41l1.96 1.96 4.63-4.63a.996.996 0 011.41 0c.39.39.4 1.03.01 1.42z"
      fill={fill}
    />
  </svg>
);

IconBubbleTick.defaultProps = {
  ...iconDefaultProps,
};

export default IconBubbleTick;
