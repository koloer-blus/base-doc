import * as React from 'react';
import { Style__Input } from './style';

export interface InputProps {
  value: string;
  onChange: (v: string, onChange: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = () => {
  return (
    <Style__Input></Style__Input>
  )
}