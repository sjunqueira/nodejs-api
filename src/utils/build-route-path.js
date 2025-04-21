//'/users/:id'

export function BuildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)');

  const pathRegex = new RegExp(`^${pathWithParams}`);
  // return new RegExp(routeParametersRegex);
  // console.log(Array.from(path.matchAll(routeParametersRegex)));
  // console.log(path);
  return pathRegex;
}
