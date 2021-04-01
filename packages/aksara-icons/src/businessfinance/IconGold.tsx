import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconGold: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M10.758 16.12a1.59 1.59 0 00-.494-.98 1.438 1.438 0 00-.987-.386h-4.06a1.438 1.438 0 00-.986.386c-.273.252-.45.6-.495.98l-.37 3.123c-.026.221-.008.445.055.658.062.212.167.409.308.575.14.166.312.3.505.39.193.09.402.136.613.134h4.815c.211.002.42-.044.613-.134.193-.09.366-.224.506-.39s.245-.363.308-.575a1.64 1.64 0 00.055-.658l-.386-3.123zM16.329 13.192l-.423-3.575a1.819 1.819 0 00-.564-1.118 1.647 1.647 0 00-1.124-.444H9.566A1.647 1.647 0 008.44 8.5a1.819 1.819 0 00-.564 1.118l-.437 3.575h1.852c.53 0 1.05.151 1.505.435.456.285.832.692 1.087 1.182.256-.49.631-.897 1.087-1.182a2.848 2.848 0 011.506-.435h1.852zM20.032 16.12a1.589 1.589 0 00-.494-.98 1.438 1.438 0 00-.987-.386h-4.074a1.438 1.438 0 00-.987.386c-.273.252-.45.6-.495.98l-.37 3.123c-.026.221-.008.445.055.658.063.212.167.409.308.575.14.166.312.3.505.39.193.09.402.136.614.134h4.792c.211.002.42-.044.613-.134.193-.09.366-.224.506-.39s.245-.363.308-.575c.062-.213.08-.437.055-.658l-.349-3.123zM20.647 4.76l-.674-.39a.762.762 0 01-.274-.289l-.37-.71a.702.702 0 00-.25-.271.655.655 0 00-.693 0 .703.703 0 00-.25.27l-.37.711a.764.764 0 01-.267.289l-.674.39a.691.691 0 00-.258.261.74.74 0 000 .727c.062.11.151.2.258.261l.674.39a.703.703 0 01.267.29l.37.71a.703.703 0 00.25.271.655.655 0 00.692 0 .702.702 0 00.25-.27l.371-.711a.716.716 0 01.274-.29l.674-.39a.691.691 0 00.258-.26.74.74 0 000-.728.691.691 0 00-.258-.26zM12.625 4.971l.393.227c.065.037.12.094.155.163l.193.414a.412.412 0 00.146.157.384.384 0 00.403 0 .411.411 0 00.147-.157l.237-.39a.403.403 0 01.156-.164l.392-.25a.412.412 0 00.149-.154.44.44 0 000-.425.412.412 0 00-.149-.155l-.392-.226a.407.407 0 01-.156-.188l-.192-.39a.412.412 0 00-.147-.157.384.384 0 00-.403 0 .411.411 0 00-.147.157l-.237.39a.404.404 0 01-.155.164l-.393.25a.412.412 0 00-.149.155.44.44 0 000 .425.412.412 0 00.15.154zM3.736 8.875l.215.414a.412.412 0 00.147.156.384.384 0 00.403 0 .412.412 0 00.146-.156l.215-.414a.404.404 0 01.156-.164l.407-.203a.411.411 0 00.149-.155.44.44 0 000-.424.411.411 0 00-.149-.155l-.392-.226a.404.404 0 01-.156-.164l-.215-.438a.412.412 0 00-.146-.156.384.384 0 00-.403 0 .412.412 0 00-.147.156l-.23.414a.404.404 0 01-.155.164l-.378.203a.411.411 0 00-.149.155.44.44 0 000 .425.411.411 0 00.149.154l.393.226a.41.41 0 01.14.188z"
      fill={fill}
    />
  </svg>
);

IconGold.defaultProps = {
  ...iconDefaultProps,
};

export default IconGold;
