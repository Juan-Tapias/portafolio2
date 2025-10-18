export type ItemType = "h1" | "h2" | "img";
export type ColType = "left" | "right";

export interface Item {
  Icon?: React.ElementType;
  type?: string;
  content?: string;
  className?: string;
  col?: ColType;
  link?: string
}