import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconSlinder: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 9.99764H19.58C19.1901 9.10643 18.5493 8.34828 17.7359 7.8159C16.9225 7.28352 15.9718 7 15 7C14.0282 7 13.0775 7.28352 12.2641 7.8159C11.4507 8.34828 10.8099 9.10643 10.42 9.99764H4C3.46957 9.99764 2.96086 10.2086 2.58579 10.5841C2.21071 10.9596 2 11.4689 2 12C2 12.5311 2.21071 13.0404 2.58579 13.4159C2.96086 13.7914 3.46957 14.0024 4 14.0024H10.42C10.8099 14.8936 11.4507 15.6517 12.2641 16.1841C13.0775 16.7165 14.0282 17 15 17C15.9718 17 16.9225 16.7165 17.7359 16.1841C18.5493 15.6517 19.1901 14.8936 19.58 14.0024H20C20.5304 14.0024 21.0391 13.7914 21.4142 13.4159C21.7893 13.0404 22 12.5311 22 12C22 11.4689 21.7893 10.9596 21.4142 10.5841C21.0391 10.2086 20.5304 9.99764 20 9.99764ZM15 15.0035C14.4067 15.0035 13.8266 14.8274 13.3333 14.4974C12.8399 14.1673 12.4554 13.6982 12.2284 13.1494C12.0013 12.6006 11.9419 11.9967 12.0576 11.414C12.1734 10.8314 12.4591 10.2962 12.8787 9.87618C13.2982 9.45612 13.8328 9.17007 14.4147 9.05417C14.9967 8.93828 15.5999 8.99776 16.1481 9.22509C16.6962 9.45242 17.1648 9.83739 17.4944 10.3313C17.8241 10.8253 18 11.406 18 12C18 12.7966 17.6839 13.5606 17.1213 14.1238C16.5587 14.6871 15.7956 15.0035 15 15.0035Z"
      fill={fill}
    />
  </svg>
);

IconSlinder.defaultProps = {
  ...iconDefaultProps,
};

export default IconSlinder;
