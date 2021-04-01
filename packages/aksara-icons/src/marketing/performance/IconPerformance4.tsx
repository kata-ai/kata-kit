import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPerformance4: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 5H4c-.53 0-1.04.207-1.414.574A1.941 1.941 0 002 6.961v10.078c0 .52.21 1.019.586 1.387A2.02 2.02 0 004 19h16c.53 0 1.04-.207 1.414-.574.375-.368.586-.867.586-1.387V6.961c0-.52-.21-1.019-.586-1.387A2.02 2.02 0 0020 5zM6 15.922a.97.97 0 01-.293.693 1.01 1.01 0 01-1.414 0A.97.97 0 014 15.922V12.98c0-.26.105-.509.293-.693a1.01 1.01 0 011.414 0A.97.97 0 016 12.98v2.942zm3 0a.97.97 0 01-.293.693 1.01 1.01 0 01-1.414 0A.97.97 0 017 15.922V11.02c0-.26.105-.51.293-.694a1.01 1.01 0 011.414 0A.97.97 0 019 11.02v4.902zm3 0a.97.97 0 01-.293.693 1.01 1.01 0 01-1.414 0 .97.97 0 01-.293-.693V9.059c0-.26.105-.51.293-.693a1.01 1.01 0 011.414 0 .97.97 0 01.293.693v6.863zm5-3.226a2.913 2.913 0 01-1.145-.163 2.872 2.872 0 01-.986-.595 2.805 2.805 0 01-.664-.93 2.757 2.757 0 010-2.222c.155-.351.38-.667.664-.93a2.87 2.87 0 01.986-.594c.366-.13.756-.187 1.145-.164v2.804h2.86c0 .368-.074.732-.218 1.072-.144.34-.355.648-.62.907-.266.26-.581.465-.928.605a2.9 2.9 0 01-1.094.21zm.71-3.5V7.098a2.177 2.177 0 011.52.611c.2.195.358.427.466.682.108.255.164.529.164.805h-2.15z"
      fill={fill}
    />
  </svg>
);

IconPerformance4.defaultProps = {
  ...iconDefaultProps,
};

export default IconPerformance4;
