export const weakMap = new WeakMap();

export function queryAPI(endpointArg) {
  const count = weakMap.get(endpointArg) || 0;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpointArg, count + 1);
}
