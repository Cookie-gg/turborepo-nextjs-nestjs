import { rest, ResponseResolver, RestContext, RestRequest } from 'msw';
type A1<T> = T extends (a1: infer I) => unknown ? I : never;

type Method = {
  reqHeaders: any;
  query: any;
  status: number;
  resBody: any;
  reqBody: any;
};

type MethodNames = 'get' | 'post' | 'put' | 'patch' | 'delete';

type Methods = { [K in MethodNames]: Method };

type Post = {
  post: (option: {
    body: Methods['post']['reqBody'];
    query: Methods['post']['query'];
    config?: any;
  }) => Promise<Methods['post']['resBody']>;
  $path: () => string;
};

type Get = {
  get: (option: { config?: any }) => Promise<Methods['get']['reqBody']>;
  $path: () => string;
};

export function restPost<T extends Post>(
  api: T,
  resolver: ResponseResolver<RestRequest<A1<T['post']>['body']>, RestContext, Awaited<ReturnType<T['post']>>['body']>,
) {
  console.log(`http://localhost${api.$path()}`);
  return rest.post(`http://localhost${api.$path()}`, resolver);
}
