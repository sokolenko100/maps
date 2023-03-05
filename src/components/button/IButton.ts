import type {Size, Type} from './enums';

export interface ButtonProps {
  size: Size;
  type: Type;
  text?: string;
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

export interface Colors {
  [key: string]: string;
}
