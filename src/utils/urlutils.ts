import { QueryParams, SanitizedQueryParams } from '../models/http/params';
import { Environments } from '../constants';

/**
 * Updates a url with the given params.
 */
export function addParamsToURL(
  url: string,
  params: QueryParams
): string {
  const parsedUrl = new URL(url);
  const urlParams = new URLSearchParams(parsedUrl.search.substring(1));

  const sanitizedParams: SanitizedQueryParams = sanitizeQueryParams (params);

  for (const key in sanitizedParams) {
    urlParams.append(key, sanitizedParams[key].toString());
  }
  let updatedUrl = parsedUrl.origin + parsedUrl.pathname;
  const paramsString = urlParams.toString();
  if (paramsString) {
    updatedUrl += '?' + paramsString;
  }
  return updatedUrl;
}

export function sanitizeQueryParams(params: QueryParams): SanitizedQueryParams {
  Object.keys(params).forEach(key => {
    if ( params[key] === undefined || params[key] === null ) {
      delete params[key];
    }
  });

  return params as SanitizedQueryParams;
}

/**
 * Returns the base url for the live api backend in the desired environment.
 * @param {Environments} env The desired environment.
 */
export function getCachedLiveApiUrl(env = Environments.Production): string {
  return env === Environments.Sandbox ? 'https://liveapi-sandbox.yext.com' : 'https://liveapi-cached.yext.com';
}

