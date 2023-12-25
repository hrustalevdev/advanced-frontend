type className = string | Record<string, boolean> | null | undefined;

export const cn = (...classes: className[]): string | undefined => {
  const result = classes.reduce((acc, item) => {
    if (typeof item === 'string') {
      acc.push(item);
    } else if (typeof item === 'object' && item !== null) {
      Object.entries(item).forEach(([key, value]) => {
        if (value) {
          acc.push(key);
        }
      });
    }

    return acc;
  }, [] as string[]);

  return result.join(' ') || undefined;
}
