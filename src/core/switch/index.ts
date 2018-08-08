/**
 * `Switch`.
 */

export const Switch: Function = (value: any, cases: any[][], _default? = null): any => {
  const result = cases.find(([case: any, result: any]) => case === value);
  return result || _default;
};

