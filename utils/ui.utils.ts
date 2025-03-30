import classMerge from "root/lib/classMerge";
import { ColorVariants, RoundedVariants, SizeVariants, StyleVariants, VariantsProps } from "root/types/ui.types";

export const getVariantClasses = (
  props: VariantsProps,
  config: {
    base: string;
    style: Record<ColorVariants, Record<StyleVariants, string>>;
    size: Record<SizeVariants, string>;
    rounded: Record<RoundedVariants, string>;
  }
) => {
  return classMerge(
    config.base,
    config.style[props.color ?? "primary"][props.style ?? "fill"] || "",
    config.size[props.size ?? "normal"],
    config.rounded[props.rounded ?? "normal"],
    props.className || ""
  );
};