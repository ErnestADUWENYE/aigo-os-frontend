export type PaginationParams = {
    page?: number;
    page_size?: number;
  };
  
  export type SortDirection =
    | "asc"
    | "desc";
  
  export type SortParams = {
    sort_by?: string;
    sort_direction?: SortDirection;
  };
  
  export type SearchParams = {
    search?: string;
  };
  
  export type PaginatedResponse<T> = {
    items: T[];
    total: number;
    page: number;
    page_size: number;
    total_pages: number;
    has_next: boolean;
    has_previous: boolean;
  };
  
  export type CursorPaginationParams = {
    cursor?: string;
    limit?: number;
  };
  
  export type CursorPaginatedResponse<T> = {
    items: T[];
    next_cursor?: string;
    previous_cursor?: string;
    has_more: boolean;
  };