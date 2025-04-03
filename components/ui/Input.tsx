import classMerge from "root/lib/classMerge";
import { ColorVariants, ShapeVariants, SizeVariants, RoundedVariants } from "root/types/ui.types";

/* Types */
type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> & {
  id: string;
  shape?: ShapeVariants;
  color?: ColorVariants;
  size?: SizeVariants;
  rounded?: RoundedVariants;
};

/* Constants */
const baseClasses = "bg-transparent w-full h-full peer";

/* Component */
const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const currentClass = classMerge(baseClasses, className);

  return <input className={currentClass} {...props} />;
};

export default Input;
