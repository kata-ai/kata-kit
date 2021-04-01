import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCSS: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-8.76 10.93a2.74 2.74 0 01-1.7.58A2.42 2.42 0 016 12a2.45 2.45 0 012.55-2.5 2.65 2.65 0 011.55.46.349.349 0 01.09.52l-.17.28a.32.32 0 01-.51.1 1.88 1.88 0 00-.91-.27A1.278 1.278 0 007.22 12a1.35 1.35 0 001.37 1.46 1.83 1.83 0 001-.34.32.32 0 01.52.07l.19.26a.35.35 0 01-.06.48zm2.21.58a2.71 2.71 0 01-1.54-.51.33.33 0 01-.07-.52l.21-.3c.13-.2.29-.21.52-.09.26.178.565.282.88.3.35 0 .52-.15.52-.34 0-.69-2.15-.58-2.15-2.1a1.559 1.559 0 011.73-1.49 2.53 2.53 0 011.31.36.36.36 0 01.12.51l-.17.32c-.13.26-.31.22-.5.13a1.66 1.66 0 00-.77-.23c-.38 0-.53.15-.53.34 0 .71 2.14.54 2.14 2.08a1.54 1.54 0 01-1.7 1.54zm3.85 0a2.74 2.74 0 01-1.54-.51.341.341 0 01-.07-.52l.21-.3c.14-.2.3-.21.52-.09.262.176.565.28.88.3.36 0 .52-.15.52-.34 0-.69-2.15-.58-2.15-2.1a1.56 1.56 0 011.74-1.49 2.53 2.53 0 011.31.36.35.35 0 01.11.51l-.16.32c-.14.26-.32.22-.51.13a1.63 1.63 0 00-.77-.23c-.37 0-.53.15-.53.34 0 .71 2.15.54 2.15 2.08a1.54 1.54 0 01-1.71 1.54z"
      fill={fill}
    />
  </svg>
);

IconCSS.defaultProps = {
  ...iconDefaultProps,
};

export default IconCSS;
