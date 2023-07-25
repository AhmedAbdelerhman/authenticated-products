export interface TypeOrmMethodsInterface {
  where?: {},
  relations?: {},
  select?: {},
  loadEagerRelations?: boolean,
  cache?: boolean,
  order?: {}
}

export interface TypeOrmOptionsMethodsInterface {
  withDeleted?: boolean,
}

export interface TypeOrmMethodsInterfaceOptions {
  cache?: {
    name: string,
    ttl?: number
  },
}

export interface TypeOrmMethodsPaginationInterface {

}
