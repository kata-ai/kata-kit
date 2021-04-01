import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconFlagMoneyDollar: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.17 4.24a18.904 18.904 0 00-8.39.545 17.281 17.281 0 01-7.61.546 1.819 1.819 0 00-.829.06 1.857 1.857 0 00-.721.423 1.786 1.786 0 00-.455.61c-.107.234-.163.49-.165.75v10.294c.006.537.19 1.056.524 1.47.333.415.794.699 1.306.805.931.166 1.875.252 2.82.257a23.006 23.006 0 005.57-.803 17.283 17.283 0 017.61-.546c.271.055.55.047.819-.022a1.86 1.86 0 00.731-.379c.202-.177.363-.398.47-.648.108-.25.159-.52.15-.793V6.515a2.39 2.39 0 00-.524-1.472 2.269 2.269 0 00-1.306-.804zm-8.39 12.898a23.11 23.11 0 01-4.85.762.148.148 0 000-.062 2.893 2.893 0 000-.515 2.831 2.831 0 00-.758-1.822 2.678 2.678 0 00-1.742-.844h-.5v-4.22c.16.065.329.11.5.133.333.038.67 0 .987-.108.317-.11.608-.288.852-.524.244-.235.436-.523.562-.842.126-.319.184-.662.169-1.006.01-.155.01-.31 0-.464a23.536 23.536 0 005.22-.782 23.103 23.103 0 014.85-.762.15.15 0 000 .062c-.032.17-.049.342-.05.515a2.83 2.83 0 00.758 1.822c.46.491 1.08.792 1.742.844h.5v4.22a2.116 2.116 0 00-.5-.133c-.329-.03-.66.013-.971.126a2.31 2.31 0 00-.835.527c-.238.235-.425.52-.548.834a2.45 2.45 0 00-.166.994c.001.152.018.304.05.453-1.78.068-3.546.334-5.27.792z"
      fill={fill}
    />
    <path
      d="M13.13 11.332a4.745 4.745 0 00-1.21-.103h-.44c-.23 0-.23-.061-.23-.113 0-.051.34-.576.89-.68.39-.082.59 0 .61.093a.77.77 0 00.438.408.73.73 0 00.823-.24.78.78 0 00.165-.584.789.789 0 00-.096-.294 1.793 1.793 0 00-.558-.623 1.73 1.73 0 00-.772-.293.784.784 0 00-.22-.546.74.74 0 00-.53-.226.74.74 0 00-.53.226.784.784 0 00-.22.546v.216c-.41.148-.771.415-1.037.77-.267.354-.427.78-.463 1.227a1.67 1.67 0 00.496 1.191c.155.155.34.275.541.355.202.08.417.118.633.111H12c.27-.023.542.009.8.093 0 .175-.34.577-.89.68-.38.082-.59 0-.61-.093a.773.773 0 00-.433-.436.729.729 0 00-.605.036.755.755 0 00-.382.483.794.794 0 00.09.617c.136.25.327.463.558.623.231.159.496.26.772.293 0 .205.079.401.22.546a.74.74 0 00.53.226.74.74 0 00.53-.226.784.784 0 00.22-.546v-.216c.41-.148.771-.415 1.037-.77.267-.354.427-.78.463-1.227.012-.356-.1-.704-.314-.983a1.455 1.455 0 00-.856-.54z"
      fill={fill}
    />
  </svg>
);

IconFlagMoneyDollar.defaultProps = {
  ...iconDefaultProps,
};

export default IconFlagMoneyDollar;
