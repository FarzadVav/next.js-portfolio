export const $mergeKeys = (middleChar: string, keys: (string | number)[]) => {
  return keys.join(middleChar)
}