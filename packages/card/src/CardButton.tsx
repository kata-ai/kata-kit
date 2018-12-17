import React from 'react';
import styled from 'styled-components';
import { variables } from '@kata-kit/theme';

export interface CardButtonProps {
  /** Label text */
  label: string;
  /** Icon for the button. */
  icon?: string;
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
  /** Additonal event handler. */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export class CardButton extends React.Component<CardButtonProps> {
  triggerOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  render() {
    const { className, style, icon, label } = this.props;

    return (
      <Root className={className} style={style} onClick={this.triggerOnClick}>
        <Icon className="kata-card__button-icon">
          <i className={`icon-${icon}`} />
        </Icon>
        <Label className="kata-card__button-label">{label}</Label>
      </Root>
    );
  }
}

const Label = styled('span')`
  display: block;
  margin-top: 8px;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.54;
  color: ${variables.colors.kataBlue};
`;

const Icon = styled('div')`
  font-size: 32px;
  color: ${variables.colors.kataBlue};
`;

const Root = styled('div')`
  cursor: pointer;
  padding: 24px 48px;
  text-align: center;
`;

export default CardButton;
