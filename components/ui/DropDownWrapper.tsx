import classMerge from "root/lib/classMerge";

/* Types */
type DropDownWrapperProps = React.HTMLAttributes<HTMLDivElement>;

/* Constants */
const baseClasses = "relative group/dropdown";

/* Component */
const DropDownWrapper: React.FC<DropDownWrapperProps> = ({ className, ...props }) => {
  const currentClass = classMerge(baseClasses, className);

  return <div className={currentClass} {...props} />;
};

export default DropDownWrapper;
