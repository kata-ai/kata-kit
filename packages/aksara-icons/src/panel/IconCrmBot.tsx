import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconCrmBot: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 18H10.1157C10.3809 18 10.6353 18.1054 10.8228 18.2929C11.0104 18.4804 11.1157 18.7348 11.1157 19C11.1157 19.2652 11.0104 19.5196 10.8228 19.7071C10.6353 19.8946 10.3809 20 10.1157 20H4.99854C4.4685 19.9992 3.96042 19.7881 3.58576 19.4132C3.21109 19.0383 3.00044 18.53 3 18V5C3.00044 4.46995 3.21109 3.96172 3.58576 3.58679C3.96042 3.21185 4.4685 3.00083 4.99854 3H17.979C18.509 3.00083 19.0171 3.21185 19.3918 3.58679C19.7664 3.96173 19.9771 4.46996 19.9775 5V12C19.9775 12.2652 19.8722 12.5196 19.6846 12.7071C19.4971 12.8946 19.2428 13 18.9775 13C18.7123 13 18.458 12.8946 18.2704 12.7071C18.0829 12.5196 17.9775 12.2652 17.9775 12V8H4.9989L5 18ZM20.5072 17.8193H20.5588C20.6759 17.8193 20.7881 17.8658 20.8708 17.9485C20.9536 18.0313 21.0001 18.1435 21.0001 18.2605V19.5901C21.0001 19.7071 20.9536 19.8193 20.8708 19.9021C20.7881 19.9849 20.6758 20.0314 20.5588 20.0314H20.4948C20.4584 20.2134 20.369 20.3807 20.238 20.5122C20.107 20.6438 19.9401 20.7338 19.7582 20.771C18.8345 20.9099 17.9025 20.9864 16.9685 21C16.0598 20.986 15.1532 20.9095 14.255 20.771C14.0731 20.7338 13.9062 20.6438 13.7752 20.5122C13.6442 20.3807 13.5549 20.2134 13.5184 20.0313H13.4414C13.3835 20.0313 13.3261 20.0199 13.2725 19.9978C13.219 19.9756 13.1704 19.9431 13.1294 19.9021C13.0884 19.8611 13.0559 19.8125 13.0337 19.7589C13.0115 19.7054 13.0001 19.648 13.0001 19.5901V18.2605C13.0001 18.1435 13.0466 18.0313 13.1294 17.9485C13.2121 17.8657 13.3244 17.8193 13.4414 17.8192H13.4917C13.4945 17.2161 13.6523 16.6238 13.95 16.0993C14.2477 15.5747 14.6752 15.1355 15.1915 14.8238C15.6053 14.571 16.0679 14.4087 16.5489 14.3476C17.0299 14.2865 17.5184 14.3279 17.9823 14.4693C18.4461 14.6107 18.8747 14.8487 19.2399 15.1677C19.605 15.4867 19.8985 15.8794 20.1009 16.32V16.3196L20.1058 16.331C20.1714 16.4635 20.2297 16.5995 20.2803 16.7384L20.2897 16.7687C20.3382 16.9042 20.3794 17.0423 20.4132 17.1822C20.4197 17.2093 20.4241 17.2372 20.4286 17.2651C20.4319 17.2854 20.4352 17.3058 20.4392 17.3259L20.4449 17.3541L20.4449 17.3542C20.4648 17.4525 20.4847 17.5509 20.4968 17.6523C20.5007 17.6847 20.5021 17.718 20.5035 17.7513C20.5045 17.774 20.5054 17.7967 20.5072 17.8193ZM19.5282 19.3979C19.6109 19.3151 19.6574 19.2029 19.6574 19.0859V18.1976C19.6574 17.9635 19.5644 17.7391 19.3989 17.5735C19.2334 17.408 19.0089 17.315 18.7748 17.315C18.7748 17.315 17.4606 17.2919 17.0225 17.2919C16.5785 17.2919 15.2463 17.315 15.2463 17.315C15.0123 17.315 14.7878 17.408 14.6223 17.5735C14.4568 17.7391 14.3638 17.9635 14.3638 18.1976V19.0859C14.3638 19.2029 14.4103 19.3151 14.493 19.3979C14.5758 19.4807 14.688 19.5271 14.8051 19.5271C14.8051 19.5271 16.4512 19.5917 17.0015 19.5917C17.554 19.5917 19.2161 19.5271 19.2161 19.5271C19.3332 19.5271 19.4454 19.4807 19.5282 19.3979ZM18.7749 18.3538C18.7749 18.5975 18.5773 18.795 18.3336 18.795C18.0899 18.795 17.8923 18.5975 17.8923 18.3538C17.8923 18.11 18.0899 17.9125 18.3336 17.9125C18.5773 17.9125 18.7749 18.11 18.7749 18.3538ZM15.6871 17.9124C15.5998 17.9123 15.5145 17.9382 15.4419 17.9867C15.3694 18.0352 15.3128 18.1041 15.2794 18.1847C15.246 18.2654 15.2372 18.3541 15.2543 18.4397C15.2713 18.5253 15.3133 18.6039 15.375 18.6657C15.4367 18.7274 15.5154 18.7694 15.601 18.7865C15.6866 18.8035 15.7753 18.7947 15.8559 18.7613C15.9366 18.728 16.0055 18.6714 16.054 18.5988C16.1025 18.5262 16.1284 18.4409 16.1284 18.3536C16.1284 18.2366 16.0819 18.1244 15.9991 18.0416C15.9164 17.9589 15.8042 17.9124 15.6871 17.9124Z"
      fill={fill}
    />
  </svg>
);

IconCrmBot.defaultProps = {
  ...iconDefaultProps,
};

export default IconCrmBot;
