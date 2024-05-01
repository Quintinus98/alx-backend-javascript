export const weakMap = new WeakMap();

export function queryAPI(endpointArg) {
  const queries = weakMap.has(endpointArg) ? weakMap.get(endpointArg) : 0;
  weakMap.set(endpointArg, queries + 1);
  if (queries >= 5) {
    throw new Error('Endpoint load is high');
  }
}
