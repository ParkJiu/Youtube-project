import * as timeago from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

timeago.register('ko', koLocale)

export function formatAgo(date, lang = 'en_US') {
  return timeago.format(date, lang)

}