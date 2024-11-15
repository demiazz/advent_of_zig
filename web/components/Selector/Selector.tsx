import { useId } from "preact/hooks";

import { clsx } from "clsx/lite";

import { Item } from "./Selector.Item";

import * as styles from "./Selector.css";

export type Links = Map<number | string, string>;

type Props = {
  className?: string;

  onSelect: (value: number) => void;

  options: number[];

  value: number;
};

export const Selector = ({ className, onSelect, options, value }: Props) => {
  const name = useId();

  const items = options.map((option) => (
    <Item
      isChecked={option == value}
      key={option}
      name={name}
      onSelect={onSelect}
      value={option}
    />
  ));

  return <nav className={clsx(styles.root, className)}>{items}</nav>;
};
