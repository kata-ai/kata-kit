import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBubble: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21.468 9.84v-.06l-.02-.18c0-.04 0-.08-.02-.12v-.04c-.24-1.36-.86-2.64-1.86-3.74s-2.282-1.96-3.702-2.5a10.92 10.92 0 00-3.862-.7c-1.8 0-3.561.44-5.082 1.26C4 5.36 2.28 8.28 2.54 11.22c.12 1.52.7 2.98 1.66 4.18.901 1.14 2.142 2.08 3.562 2.68.88.38 1.741.54 2.641.74.22.04.4.24.4.48 0 .04 0 .08-.02.14-.1.38-.18.78-.1 1.22.1.54.42.84.901.84.52 0 1.1-.36 1.48-.58l.06-.04c.921-.56 1.801-1.18 2.462-1.68 1.44-1.06 3.061-2.26 4.282-3.82 1.24-1.58 1.82-3.58 1.6-5.54zm-12.445.84c0 .52-.42.96-.96.96h-.08a.96.96 0 01-.961-.96v-.08c0-.52.42-.96.96-.96h.08c.52 0 .96.42.96.96v.08zm4.002 0c0 .52-.42.96-.96.96h-.08a.96.96 0 01-.961-.96v-.08c0-.52.42-.96.96-.96h.08c.52 0 .96.42.96.96v.08zm4.001 0c0 .52-.42.96-.96.96h-.08a.96.96 0 01-.96-.96v-.08c0-.52.42-.96.96-.96h.08c.52 0 .96.42.96.96v.08z"
      fill={fill}
    />
  </svg>
);

IconBubble.defaultProps = {
  ...iconDefaultProps,
};

export default IconBubble;