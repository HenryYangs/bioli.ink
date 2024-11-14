export const joint = ({ data = [], separator = ' ' }: { data: string[]; separator?: string }) => {
  return data.join(separator);
};

export const cls = (...args: string[]) => {
  return joint({ data: args });
};
