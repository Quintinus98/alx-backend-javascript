export const weakMap = new WeakMap();

export function queryAPI(endpointArg) {
  let queries = 0;
  if (weakMap.get(endpointArg) !== undefined) {
    queries = weakMap.get(endpointArg);
  }
  if (queries >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpointArg, queries + 1);
}
