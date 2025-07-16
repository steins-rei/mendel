import { useHoverPress } from '@/hooks/useHoverPress';

import { LinkButton, FunctionButton } from '../Button';
import { ButtonType } from '@/types/ButtonTypes';

import primStyle from './Primary.module.scss';

function Primary({
  children,
  className,
}: {
  children: React.ReactNode,
  className?: string
}) {
  const { hovered, pressed, eventHandlers, style } = useHoverPress();

  return (
    <div className={`${primStyle['primary-button']} ${className}`}
      {...eventHandlers}
      style={style}
    >
      { children }
    </div>
  )
}
 
export default function PrimaryButton({
  children,
  className,
  wrapperClass,
  link,
  clickHandler,
}: ButtonType) {
  let buttonContent;

  if (link) {
    buttonContent = (
      <LinkButton link={link} className={wrapperClass}>
        <Primary className={className}>{ children }</Primary>
      </LinkButton> 
    )
  }
  if (clickHandler) {
    buttonContent = (
      <FunctionButton clickHandler={clickHandler} className={wrapperClass}>
        <Primary className={className}>{ children }</Primary>
      </FunctionButton>
    )
  }

  return buttonContent;
}