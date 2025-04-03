import classMerge from "root/lib/classMerge";

/* Types */
type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> & {
  id: string;
};

/* Constants */
const baseClasses = "bg-transparent w-full h-full peer";

/* Component */
const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const currentClass = classMerge(baseClasses, className);

  return <input className={currentClass} {...props} />;
};

export default Input;
