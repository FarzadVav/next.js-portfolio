import classMerge from "root/lib/classMerge";

/* Types */
type TextAreaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> & {
  id: string;
};

/* Constants */
const baseClasses = "bg-transparent w-full h-full resize-none";

/* Component */
const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => {
  const currentClass = classMerge(baseClasses, className);

  return <textarea className={currentClass} {...props} />;
};

export default TextArea;
