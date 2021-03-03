import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconAudio: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.8664 3H11.3854C10.9386 2.99998 10.5018 3.13232 10.1302 3.38031L5.17255 7.4986H5C4.46957 7.4986 3.96086 7.70932 3.58579 8.08439C3.21071 8.45946 3 8.96817 3 9.4986V14.5015C3 15.0319 3.21071 15.5406 3.58579 15.9157C3.96086 16.2907 4.46957 16.5015 5 16.5015H5.20789L10.1279 20.6151C10.5009 20.866 10.9404 21.0001 11.39 21H11.8664C12.1652 21.0004 12.452 20.8821 12.6636 20.671C12.8752 20.46 12.9943 20.1735 12.9947 19.8747V4.12537C12.9943 3.82651 12.8752 3.54005 12.6636 3.329C12.452 3.11795 12.1653 2.99961 11.8664 3ZM18.6043 5.50648C18.4321 5.30498 18.1869 5.18015 17.9226 5.15946C17.6583 5.13876 17.3966 5.2239 17.1951 5.39613C16.9936 5.56837 16.8688 5.8136 16.8481 6.07787C16.8274 6.34214 16.9125 6.60381 17.0848 6.80531C18.3208 8.25395 18.9998 10.0958 18.9998 12.0001C18.9998 13.9044 18.3208 15.7463 17.0848 17.195C16.9992 17.2947 16.9341 17.4103 16.8933 17.5352C16.8524 17.6602 16.8366 17.7919 16.8467 17.9229C16.8569 18.054 16.8927 18.1817 16.9523 18.2989C17.0118 18.416 17.0939 18.5203 17.1938 18.6057C17.2937 18.6911 17.4095 18.7559 17.5345 18.7965C17.6595 18.8371 17.7913 18.8527 17.9223 18.8423C18.0533 18.8319 18.181 18.7957 18.298 18.7359C18.415 18.6761 18.5191 18.5939 18.6043 18.4938C20.1504 16.6834 20.9998 14.3808 20.9998 12.0001C20.9998 9.61943 20.1504 7.31684 18.6043 5.50648ZM15.4547 8.03357C15.7109 8.10188 15.9294 8.26917 16.0623 8.49865V8.49867C16.6765 9.5634 16.9998 10.771 16.9998 12.0001C16.9998 13.2293 16.6765 14.4369 16.0623 15.5016C15.9965 15.6152 15.909 15.7148 15.8047 15.7946C15.7005 15.8744 15.5815 15.9329 15.4546 15.9667C15.3278 16.0005 15.1955 16.009 15.0653 15.9917C14.9352 15.9744 14.8097 15.9316 14.6961 15.8658C14.5825 15.8 14.4829 15.7125 14.4031 15.6082C14.3233 15.504 14.2648 15.385 14.231 15.2582C14.1972 15.1313 14.1887 14.999 14.206 14.8688C14.2233 14.7387 14.2661 14.6132 14.3318 14.4996C14.7695 13.7393 14.9998 12.8774 14.9998 12.0001C14.9998 11.1228 14.7695 10.2609 14.3318 9.5006C14.199 9.27112 14.1627 8.99827 14.231 8.74205C14.2993 8.48584 14.4666 8.26726 14.6961 8.13439C14.9256 8.00152 15.1984 7.96526 15.4547 8.03357Z"
      fill={fill}
    />
  </svg>
);

IconAudio.defaultProps = {
  ...iconDefaultProps,
};

export default IconAudio;
