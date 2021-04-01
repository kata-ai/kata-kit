import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconSackDollar: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15 6.006l.65-2.634a.812.812 0 00-1-1.001l-.71.24a.759.759 0 01-.61 0l-.94-.49a.769.769 0 00-.72 0l-.94.49a.759.759 0 01-.61 0l-.71-.24a.809.809 0 00-1 1.001L9 6.056l6-.05zM4 16.112v.12a5.844 5.844 0 001.693 4.075A5.826 5.826 0 009.75 22.03h4.44a5.826 5.826 0 004.089-1.696A5.843 5.843 0 0020 16.252v-.14a7.02 7.02 0 00-2.32-5.238l-1.16-1.002a1 1 0 00.48-.861 1.002 1.002 0 00-1-1.002H8a1 1 0 00-1 1.002 1.003 1.003 0 00.48.831l-1.16 1.002A7.011 7.011 0 004 16.111zm8.75 1.802v.11a.752.752 0 01-.75.752.75.75 0 01-.75-.752v-.11a2.09 2.09 0 01-1.34-1.071.752.752 0 01.93-1.077.75.75 0 01.42.436.87.87 0 00.74.32c.46 0 .75-.24.75-.37s0-.15-.1-.18c-.271-.101-.553-.171-.84-.21l-.53-.101a1.82 1.82 0 01-1.53-1.763 1.915 1.915 0 011.5-1.772v-.11a.751.751 0 011.28-.532c.141.141.22.332.22.531v.11a2.117 2.117 0 011.34 1.072.753.753 0 01-.325 1.06.75.75 0 01-1.025-.419.87.87 0 00-.74-.32c-.47 0-.75.24-.75.38s.2.26.37.3l.44.08c.405.058.802.165 1.18.321a1.61 1.61 0 011 1.553 1.905 1.905 0 01-1.49 1.762z"
      fill={fill}
    />
  </svg>
);

IconSackDollar.defaultProps = {
  ...iconDefaultProps,
};

export default IconSackDollar;
