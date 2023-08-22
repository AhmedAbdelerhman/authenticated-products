export interface ServiceOptions {
  repository: any;

  limit: number;
  page: number;

}

export interface ServiceOptionFilterSetter {
  keyName: string;
  type: string;
  relation?: string;
}
