import * as React from 'react';
import { CommonSize, CommonStatus } from '../types';
import { Style_Button } from './style';

export interface ButtonProps extends React.PropsWithChildren {
  /**
   * @defaultValue false
   */
  loading?: boolean;
  /**
   * @defaultValue 'default'
   */
  status?: CommonStatus;
  /**
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * @defaultValue default
   */
  size?: CommonSize;

  className?: string;
}

export type ButtonRef = ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;

export const Button = React.forwardRef((props: ButtonProps, ref?: ButtonRef) => {
  const { children = <span>{' '}</span>, loading = false, status = 'default', disabled = false, size = 'default', className } = props;
  return (
    <Style_Button ref={ref} className={className}>{children}</Style_Button>
  );
});