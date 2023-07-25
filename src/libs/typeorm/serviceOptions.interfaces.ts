export interface ServiceOptions {
  repository: any;
  table: string;
  cache: string;
  tableTr: string;
  tableTrFk: string;
  joinTables: [
    {
      table: string;
      alias: string;
      tableTr: string;
      tableTrFk: string;
      pk: string;
      fk: string;
    },
  ] | [];
  filterSetter: ServiceOptionFilterSetter[];
  pkKey: string;
  pkValue: string | number;
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
