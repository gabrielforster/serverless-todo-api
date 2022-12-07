export function get(obj, paths: string){
  const actualPaths = paths.replace(/\[(\d+)]/g, '.$1').split('.')
  let value = (actualPaths.every(step => (obj = obj[step]) !== undefined)) ? obj : undefined;
  return value
}