import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMoneySave: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12.02 20.977a12.8 12.8 0 007.28-5.799 12.726 12.726 0 001.41-9.182.5.5 0 00-.342-.36L12.17 3a.513.513 0 00-.3 0L3.67 5.637a.501.501 0 00-.34.36 12.726 12.726 0 001.408 9.181 12.8 12.8 0 007.28 5.8zm-.752-13.253v-.25a.748.748 0 01.752-.749.753.753 0 01.752.75v.25a2.853 2.853 0 012.004 1.228.746.746 0 01-.276 1.023.754.754 0 01-1.027-.274 1.784 1.784 0 00-1.453-.55c-.922 0-1.503.42-1.503.64 0 .22.32.449.821.539.23.05.461.08.692.11a8.213 8.213 0 011.664.36 1.854 1.854 0 011.333 1.767c0 .999-.942 1.838-2.255 2.067v.26a.747.747 0 01-.752.75.753.753 0 01-.752-.75v-.25a2.833 2.833 0 01-2.004-1.238.747.747 0 01.307-.972.754.754 0 01.996.233 1.815 1.815 0 001.473.55c.922 0 1.503-.42 1.503-.65 0-.08 0-.23-.34-.35a5.708 5.708 0 00-1.364-.29l-.821-.12c-1.504-.289-2.005-1.227-2.005-1.997 0-1.038.942-1.817 2.255-2.087z"
      fill={fill}
    />
  </svg>
);

IconMoneySave.defaultProps = {
  ...iconDefaultProps,
};

export default IconMoneySave;
