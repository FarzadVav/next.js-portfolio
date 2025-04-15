// Base variants type that are shared across components

export type ShapeVariantsT = "fill" | "soft" | "outline" | "ghost";

export type ColorVariantsT =
  | "foreground"
  | "danger"
  | "success"
  | "warning";

export type FontVariantsT = "kalameh" | "vazir"

export type AllSizeVariantsT = "xs" | "sm" | "normal" | "lg" | "xl";

export type SizeVariantsT = Extract<AllSizeVariantsT, "sm" | "normal" | "lg">;