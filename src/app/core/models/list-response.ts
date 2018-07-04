export interface ListResponse<T> {
  query: string;
  sort: string;
  responseGroup: string;
  totalResults: number;
  start: 1;
  numItems: number;
  items: Array<T>;
}