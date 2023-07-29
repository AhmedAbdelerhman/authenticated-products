export interface ServiceOptions {
  repository: any;

  limit: number;
  page: number;
  orderKey: string;
  orderValue: string;
  filter: {};
  withDeleted: boolean;
}

export interface ServiceOptionFilterSetter {
  keyName: string;
  type: string;
  relation?: string;
}
