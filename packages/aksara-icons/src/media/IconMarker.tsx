import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconMarker: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 9.7745C18.9857 8.86951 18.7932 7.97624 18.4335 7.14578C18.0738 6.31532 17.554 5.56399 16.9038 4.93476C16.2537 4.30554 15.4859 3.81078 14.6444 3.47879C13.803 3.1468 12.9044 2.9841 12 3C11.0956 2.9841 10.197 3.1468 9.35556 3.47879C8.51411 3.81078 7.74633 4.30554 7.09616 4.93476C6.44599 5.56399 5.92619 6.31532 5.56651 7.14578C5.20682 7.97624 5.01431 8.86951 4.99999 9.7745C4.99674 11.0098 5.34347 12.2207 5.99999 13.2668L10.23 20.1314C10.4258 20.4002 10.6823 20.6188 10.9786 20.7696C11.2749 20.9204 11.6026 20.9989 11.935 20.9989C12.2674 20.9989 12.5951 20.9204 12.8914 20.7696C13.1877 20.6188 13.4442 20.4002 13.64 20.1314L18 13.2668C18.6565 12.2207 19.0032 11.0098 19 9.7745ZM12 6.39225C12.4518 6.3843 12.9007 6.46548 13.3211 6.63116C13.7415 6.79685 14.1251 7.04378 14.4502 7.35787C14.7752 7.67195 15.0352 8.04703 15.2153 8.46168C15.3954 8.87633 15.4922 9.32243 15.5 9.7745C15.5 10.7034 15.1312 11.5942 14.4749 12.251C13.8185 12.9078 12.9283 13.2768 12 13.2768C11.0717 13.2768 10.1815 12.9078 9.52512 12.251C8.86874 11.5942 8.49999 10.7034 8.49999 9.7745C8.5078 9.32243 8.60454 8.87633 8.78467 8.46168C8.9648 8.04703 9.2248 7.67195 9.54982 7.35787C9.87484 7.04378 10.2585 6.79685 10.6789 6.63116C11.0993 6.46548 11.5482 6.3843 12 6.39225Z"
      fill={fill}
    />
  </svg>
);

IconMarker.defaultProps = {
  ...iconDefaultProps,
};

export default IconMarker;
