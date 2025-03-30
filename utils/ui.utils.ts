import classMerge from "root/lib/classMerge";
import { ColorVariants, RoundedVariants, SizeVariants, ShapeVariants, VariantsProps } from "root/types/ui.types";

export const getVariantClasses = (
  props: VariantsProps,
  config: {
    base: string;
    style: Record<ColorVariants, Record<ShapeVariants, string>>;
    size: Record<SizeVariants, string>;
    rounded: Record<RoundedVariants, string>;
  }
) => {
  return classMerge(
    config.base,
    config.style[props.color ?? "primary"][props.shape ?? "fill"] || "",
    config.size[props.size ?? "normal"],
    config.rounded[props.rounded ?? "normal"],
    props.className || ""
  );
};