export interface FetchResult<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}
export interface CountryResponse {
  country: string;
}
