
export const INCREMENT = 'PLUS';
export const DECRIMENT = 'MINUS';
export const AREA = 'AREA';

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

export function changedFilter(name: any) {
  return {
    payload: name,
    type: AREA,
  }
}

export const CLOSE_DIALOG = `CLOSE_DIALOG`;
export const OPEN_DIALOG = `OPEN_DIALOG`;

/**
 *
 * open dialog by name
 *
 * @param name - name of dialog
 */
export const openDialog = (name: string): any => {
  return{
    payload: name,
    type: OPEN_DIALOG,
  };
};


/**
 * close dialog by name
 *
 * @param name -name of dialog
 */
export const closeDialog = (name: string): any => {
  return{
    payload: name,
    type: CLOSE_DIALOG,
  };
};

