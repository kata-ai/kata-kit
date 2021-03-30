import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPanelSSL: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-6.73 2.18a.73.73 0 11-1.46 0 .73.73 0 011.46 0zm-2.18 0a.73.73 0 11-1.46 0 .73.73 0 011.46 0zm-2.18 0a.73.73 0 11-1.46 0 .73.73 0 011.46 0zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V8h14v10z"
      fill={fill}
    />
    <path
      d="M7.84 14.82a1.9 1.9 0 01-1-.32c-.24-.13-.41-.12-.55.09l-.23.33a.36.36 0 00.07.56 2.93 2.93 0 001.71.52 1.66 1.66 0 001.84-1.63c0-1.66-2.32-1.48-2.32-2.24 0-.2.17-.36.57-.36.293.008.578.091.83.24.2.1.4.14.55-.14l.17-.35a.37.37 0 00-.12-.52A2.67 2.67 0 008 10.59a1.668 1.668 0 00-1.87 1.6c0 1.64 2.31 1.52 2.31 2.26-.05.21-.22.37-.6.37zM12 14.82a1.89 1.89 0 01-1-.32c-.24-.13-.41-.12-.56.09l-.22.33a.36.36 0 00.07.56c.502.348 1.1.53 1.71.52a1.66 1.66 0 001.84-1.63c0-1.66-2.31-1.48-2.31-2.24 0-.2.16-.36.57-.36.29.01.571.092.82.24.21.1.41.14.55-.14l.18-.35a.37.37 0 00-.12-.54 2.68 2.68 0 00-1.42-.39 1.68 1.68 0 00-1.87 1.6c0 1.64 2.32 1.52 2.32 2.26-.01.21-.19.37-.56.37zM15 15.91h2.6a.361.361 0 00.4-.4v-.29a.361.361 0 00-.4-.41h-1.74v-3.73a.35.35 0 00-.4-.4H15a.35.35 0 00-.4.4v4.43a.361.361 0 00.4.4z"
      fill={fill}
    />
  </svg>
);

IconPanelSSL.defaultProps = {
  ...iconDefaultProps,
};

export default IconPanelSSL;
