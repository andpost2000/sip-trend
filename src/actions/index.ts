
export const INCREMENT = 'PLUS';
export const DECRIMENT = 'MINUS';

export function increment(value: any) {
  return {
    payload: value,
    type: INCREMENT
  };
}

export function decriment(value: any) {
  return {
    payload: value--,
    type: DECRIMENT
  };
}
