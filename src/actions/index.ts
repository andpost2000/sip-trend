import { Data } from 'src/interfaces/interfaces';

export const AREA = 'AREA';
export const SEND_FORM = 'SEND_FORM';
export const RESPONSE_FORM = 'RESPONSE_FORM';
export const FETCH_DATA = 'FETCH_DATA';
export const RESPONSE_DATA = 'RESPONSE_DATA';

export const fetchData = (url: string): any => {
  return {
    payload: url,
    type: FETCH_DATA,
  }
}

export const responseData = (status: string, data: Data) => {
  return {
    payload: {
      data,
      status,
    },
    type: RESPONSE_DATA,
  }
}

export const sendForm = (url: string, data: any, method: string) => {
  return {
    payload: {
      data,
      method,
      url,
    },
    type: SEND_FORM,
  }
}

export const responseForm = (result: string) => {
  return {
    payload: result,
    type: RESPONSE_FORM,
  }
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

