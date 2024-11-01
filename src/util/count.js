export const count = (num) => {
  if (num >= 100000000) {
    return `${Math.floor(num / 100000000)}억`
  } else if (num >= 10000) {
    return `${Math.floor(num / 10000)}만`
  } else if (num >= 1000) {
    return `${Math.floor(num / 1000)}천`
  } 
  return num;
}