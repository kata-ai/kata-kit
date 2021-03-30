import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconFlagMoney: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.17 4.236a19.056 19.056 0 00-8.39.546 17.122 17.122 0 01-7.61.556 1.828 1.828 0 00-.827.056 1.866 1.866 0 00-.723.417 1.786 1.786 0 00-.455.61c-.107.234-.163.49-.165.75v10.296a2.39 2.39 0 00.524 1.471c.333.415.794.698 1.306.805.931.166 1.875.252 2.82.257 1.881-.05 3.75-.327 5.57-.824a17.104 17.104 0 017.61-.556c.271.055.55.047.819-.023a1.86 1.86 0 00.731-.378c.2-.173.358-.389.466-.633.107-.244.16-.51.154-.778V6.511a2.39 2.39 0 00-.524-1.47 2.269 2.269 0 00-1.306-.805zm-8.39 12.901a22.99 22.99 0 01-4.85.762.148.148 0 000-.061 2.895 2.895 0 000-.515 2.832 2.832 0 00-.758-1.823 2.679 2.679 0 00-1.742-.844h-.5v-4.222c.16.065.329.11.5.134.333.038.67 0 .987-.108.317-.11.608-.288.852-.524.244-.236.436-.523.562-.842.126-.32.184-.663.169-1.007.01-.154.01-.31 0-.464a24.154 24.154 0 005.22-.782 22.447 22.447 0 014.85-.772.15.15 0 000 .061c-.032.17-.049.342-.05.515.027.683.297 1.331.758 1.823.46.491 1.08.792 1.742.844h.5v4.222a2.12 2.12 0 00-.5-.134c-.33-.03-.662.013-.974.127a2.308 2.308 0 00-.835.53 2.393 2.393 0 00-.549.838 2.452 2.452 0 00-.162.997c.002.155.019.31.05.463-1.78.06-3.547.323-5.27.782z"
      fill={fill}
    />
    <path
      d="M12 8.9a3.71 3.71 0 00-2.111 1.276A3.906 3.906 0 009 12.525c-.014.387.058.773.212 1.126.154.354.385.667.675.914.29.247.632.421.998.51.367.09.748.09 1.115.003a3.71 3.71 0 002.111-1.275 3.905 3.905 0 00.889-2.35 2.587 2.587 0 00-.212-1.126 2.517 2.517 0 00-.675-.913 2.423 2.423 0 00-.998-.511A2.381 2.381 0 0012 8.9z"
      fill={fill}
    />
  </svg>
);

IconFlagMoney.defaultProps = {
  ...iconDefaultProps,
};

export default IconFlagMoney;
