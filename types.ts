export interface GeneratedNamesResponse {
  names: string[];
}

export interface CoupleData {
  yourName: string;
  crushName: string;
}

export enum AppState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  RESULTS = 'RESULTS',
  SELECTED = 'SELECTED',
  ERROR = 'ERROR'
}