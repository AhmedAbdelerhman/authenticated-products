export interface ServiceOptions {
  repository: any;
  table: string;
  filterSetter: ServiceOptionFilterSetter[];
  limit: number;
  page: number;
  orderKey: string;
  orderValue: string;
  filter: {};
  withDeleted: boolean;
  reqRoute?: string;
}

export interface ServiceOptionFilterSetter {
  keyName: string;
  type: string;
  relation?: string;
}
