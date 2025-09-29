export type ItemType = "h1" | "p" | "h2";

export interface ItemSobremi {
  type: ItemType;
  content: string;
  className?: string;
}