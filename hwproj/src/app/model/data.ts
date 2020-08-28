export class DataApi {
  IsSuccess: boolean;
  Error: boolean;
  Errors: boolean;
  Status: boolean;
  Data: Data[];
  Total: number;
  constructor() {}
}

export class Data {
  value: string;
  label: string;
  ShortName: string;
  Reference: any;
}
