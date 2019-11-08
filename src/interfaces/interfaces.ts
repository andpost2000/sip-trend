import { LoadStatus } from 'src/enums/enums';

export interface RootState {
  data: Data,
  loadStatus: null | LoadStatus,
  value: number,
  formSended: string;
}

export interface Data {
  complects: any[],
  projects: any[],
}

interface MutableState {
  root: Readonly<RootState>;
}

export type State = Readonly<MutableState>;
