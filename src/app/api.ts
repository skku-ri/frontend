export class API {
  private static API_URL = 'https://swe-skku-ri.run.goorm.site';

  static async fetch<T>(url: string, options?: RequestInit) {
    const response = await fetch(`${this.API_URL}${url}`, options);
    const data = await response.json();
    return data as T;
  }
}
