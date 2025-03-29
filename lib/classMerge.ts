import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const classMerge = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export default classMerge