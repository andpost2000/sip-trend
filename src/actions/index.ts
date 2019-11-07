
export const INCREMENT = 'PLUS';
export const DECRIMENT = 'MINUS';
export const AREA = 'AREA';
export const FETCH_DATA = 'FETCH_DATA';
export const RESPONSE_DATA = 'RESPONSE_DATA';

export const fetchData = (url: string): any => {
  return {
    payload: url,
    type: FETCH_DATA,
  }
}

export const responseData = (status: string, data: any[]) => {
  return {
    payload: {
      data,
      status,
    },
    type: RESPONSE_DATA,
  }
}

export function increment(value: any) {
  return {
    payload: value,
    type: INCREMENT
  };
}

export function decrement(value: any) {
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

