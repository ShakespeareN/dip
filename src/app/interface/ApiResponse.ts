export interface ApiResponse <T> {
  data: T;
  message: any;
  success: boolean;
}
