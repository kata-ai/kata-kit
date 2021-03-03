import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconSend: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.16847 3.23085L19.8039 10.0751C20.1637 10.2556 20.4662 10.5325 20.6774 10.8749C20.8886 11.2174 21.0003 11.6118 21 12.014C20.9997 12.4162 20.8873 12.8105 20.6755 13.1525C20.4637 13.4946 20.1609 13.7711 19.8008 13.951L6.13955 20.7715C5.73207 20.9749 5.27087 21.045 4.82131 20.9718C4.37175 20.8987 3.95662 20.6861 3.63472 20.3641C3.31283 20.0421 3.1005 19.6271 3.02781 19.1779C2.95512 18.7286 3.02577 18.2679 3.22973 17.861L5.65879 13.017C5.74335 13.0462 5.8314 13.0639 5.92063 13.0698L10.082 13.0705C10.3594 13.0705 10.6254 12.9604 10.8215 12.7644C11.0177 12.5684 11.1279 12.3026 11.1279 12.0255C11.1279 11.7483 11.0177 11.4825 10.8215 11.2865C10.6254 11.0905 10.3594 10.9804 10.082 10.9804L5.92061 10.9797C5.84558 10.9862 5.77152 11.0011 5.69985 11.0242L5.69376 11.0074L3.25499 6.13705C3.051 5.72992 2.98055 5.26893 3.05362 4.81952C3.12668 4.37012 3.33957 3.95512 3.66205 3.63344C3.98454 3.31176 4.40024 3.09974 4.85015 3.02747C5.30006 2.95521 5.76132 3.02636 6.16847 3.23085Z"
      fill={fill}
    />
  </svg>
);

IconSend.defaultProps = {
  ...iconDefaultProps,
};

export default IconSend;
