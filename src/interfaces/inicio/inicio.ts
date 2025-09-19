export type ItemType = "h1" | "h2" | "img";
export type ColType = "left" | "right";

export interface Item {
  type: ItemType;
  content: string;
  className?: string;
  col: ColType;
}