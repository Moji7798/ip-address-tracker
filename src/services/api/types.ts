/**
 * Represents the result of an operation, indicating success or failure.
 *
 * @template T - Type of the data on success.
 */
export type Result<T> = {
  message: string;
  output: T;
  result: boolean;
};
