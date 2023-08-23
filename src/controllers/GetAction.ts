import { generatePath } from 'react-router-dom';
import { RouteConfig } from '~/configs/Route.ts';
export default function GetAction(
  action: RouteConfig,
  params: { [key: string]: any } = {},
): string {
  try {
    if (action && typeof action.path === 'string' && action.path !== '*') {
      let str = `/${action.getFullPath()}`;
      return generatePath(str, { ...action.params, ...params });
    }
  } catch {
    return `/NotFound`;
  }
}
