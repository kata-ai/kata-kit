import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconHumanoid3: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21.15 10.508a2.868 2.868 0 00-.84-.562C20.21 4.672 17.58 2 12.5 2S4.79 4.672 4.69 9.946a2.71 2.71 0 00-.84.572 2.814 2.814 0 00-.85 2.01 3.71 3.71 0 001.15 2.611c.424.416.937.728 1.5.914a10.05 10.05 0 002.85 4.53v-1.416l-.45-2.47-.12-.704-.21-.07a2.48 2.48 0 01-1.65-1.809 2.623 2.623 0 01-.07-.562 2.52 2.52 0 011.216-2.153 2.492 2.492 0 013.396.812 2.52 2.52 0 01-.722 3.43l.61 3.255c.005.06.005.12 0 .18v2.663c.325.117.66.205 1 .261V11.834a2.505 2.505 0 01-1.221-1.149 2.522 2.522 0 01.644-3.101 2.493 2.493 0 013.154 0 2.513 2.513 0 01.644 3.101 2.505 2.505 0 01-1.221 1.15V22c.34-.056.675-.144 1-.261v-2.662a1.114 1.114 0 010-.181l.59-3.255a2.508 2.508 0 01-1.086-2.212 2.519 2.519 0 011.322-2.079 2.491 2.491 0 013.344.97c.214.376.327.8.33 1.232a2.456 2.456 0 01-.07.553 2.494 2.494 0 01-1.65 1.818l-.2.07-.13.693-.45 2.481v1.417a10.05 10.05 0 002.85-4.52 3.888 3.888 0 001.5-.915A3.698 3.698 0 0022 12.537a2.87 2.87 0 00-.84-2.009l-.01-.02z"
      fill={fill}
    />
    <path
      d="M12.5 10.036a.501.501 0 10-.002-1.002.501.501 0 00.002 1.002zM16.5 14.054a.501.501 0 10-.002-1.002.501.501 0 00.002 1.002zM8.5 14.054a.501.501 0 10-.002-1.002.501.501 0 00.002 1.002z"
      fill={fill}
    />
  </svg>
);

IconHumanoid3.defaultProps = {
  ...iconDefaultProps,
};

export default IconHumanoid3;