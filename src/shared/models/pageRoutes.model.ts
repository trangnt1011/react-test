export type pageRoutes<TParams = {}> = Partial<TParams> & {
  path?: string;
  component: object
  exact?: boolean;
  isProtected?: boolean;
};
