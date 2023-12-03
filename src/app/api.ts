export class APIError extends Error {
  constructor(
    message: string,
    public errorStatus: number,
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export class API {
  private static API_URL = 'https://swe-skku-ri.run.goorm.site';

  static async fetch<T>(
    url: string,
    options?: RequestInit & { data?: object; accessToken?: string },
  ) {
    if (options?.data) {
      options.body = JSON.stringify(options.data);
      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
      };
    }
    if (options?.accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${options.accessToken}`,
      };
    }
    const response = await fetch(`${this.API_URL}${url}`, options);
    if (!response.ok) {
      throw new APIError(response.statusText, response.status);
    }
    const data = await response.json();
    return data as T;
  }
}
