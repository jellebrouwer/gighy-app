export interface IGif {
  images: {
    fixed_width: {
      url: string;
    },
  };
}

export interface IGiphyServerResponse<T> {
  data: T[];
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
}
