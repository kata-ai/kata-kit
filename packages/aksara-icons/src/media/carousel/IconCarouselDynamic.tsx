import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconCarouselDynamic: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 3H9C8.46957 3 7.96086 3.21071 7.58579 3.58579C7.21071 3.96086 7 4.46957 7 5V10.9998H17V5C17 4.46957 16.7893 3.96086 16.4142 3.58579C16.0391 3.21071 15.5304 3 15 3ZM3.68583 16.17L3.0073 8.17426C2.98396 7.89844 3.01815 7.62077 3.1077 7.35884C3.19725 7.09692 3.34021 6.85644 3.52753 6.65263C3.71486 6.44883 3.94246 6.28614 4.19592 6.17488C4.44938 6.06361 4.72319 6.00618 5 6.00623V17.8768C4.64063 17.7479 4.32579 17.5185 4.09285 17.216C3.85992 16.9134 3.71866 16.5504 3.68583 16.17ZM19 17.8768V6.00623C19.2768 6.00619 19.5506 6.06362 19.8041 6.17489C20.0575 6.28616 20.2851 6.44885 20.4725 6.65265C20.6598 6.85646 20.8027 7.09694 20.8923 7.35886C20.9819 7.62079 21.016 7.89846 20.9927 8.17428L20.3142 16.17C20.2813 16.5504 20.1401 16.9134 19.9071 17.2159C19.6742 17.5185 19.3594 17.7478 19 17.8768ZM7.58579 20.4142C7.21071 20.0391 7 19.5304 7 19V12.9998H17V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H9C8.46957 21 7.96086 20.7893 7.58579 20.4142ZM13.9999 14.9993H9.99987C9.73465 14.9993 9.4803 15.1047 9.29276 15.2922C9.10523 15.4798 8.99987 15.7341 8.99987 15.9993C8.99987 16.2645 9.10523 16.5189 9.29276 16.7064C9.4803 16.894 9.73465 16.9993 9.99987 16.9993H13.9999C14.2651 16.9993 14.5194 16.894 14.707 16.7064C14.8945 16.5189 14.9999 16.2645 14.9999 15.9993C14.9999 15.7341 14.8945 15.4798 14.707 15.2922C14.5194 15.1047 14.2651 14.9993 13.9999 14.9993Z"
      fill={fill}
    />
  </svg>
);

IconCarouselDynamic.defaultProps = {
  ...iconDefaultProps,
};

export default IconCarouselDynamic;
