import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBrain: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21.038 10.295a3.97 3.97 0 00-.855-2.408 4.01 4.01 0 00-2.15-1.397c0-.66-.265-1.294-.735-1.76a2.512 2.512 0 00-3.542 0c-.47.466-.734 1.1-.734 1.76v10.897c.09.615.371 1.186.804 1.635a3.023 3.023 0 003.426.648 2.999 2.999 0 001.351-1.227 4.448 4.448 0 001.991-1.068 4.387 4.387 0 00.284-6.154 4.04 4.04 0 00.16-.926zM8.513 4.04a2.503 2.503 0 00-1.76.712 2.473 2.473 0 00-.745 1.738 4.01 4.01 0 00-2.15 1.397 3.97 3.97 0 00-.856 2.408c.004.312.044.623.12.926a4.387 4.387 0 00.284 6.154c.56.521 1.246.889 1.99 1.068.305.554.778.999 1.353 1.27a3.022 3.022 0 003.476-.654 2.98 2.98 0 00.793-1.672V6.51a2.465 2.465 0 00-.738-1.75 2.496 2.496 0 00-1.767-.72z"
      fill={fill}
    />
  </svg>
);

IconBrain.defaultProps = {
  ...iconDefaultProps,
};

export default IconBrain;