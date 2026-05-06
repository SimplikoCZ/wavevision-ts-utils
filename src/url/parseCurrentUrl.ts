import { parse, UrlWithParsedQuery } from 'url';

const parseCurrentUrl = (url = window.location.href): UrlWithParsedQuery =>
  parse(url, true);

export default parseCurrentUrl;
