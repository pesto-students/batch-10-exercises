
function parseMs(ms) {
  const CheckForNegative = String(ms).split('-').length; 
  if(ms <= 0 || CheckForNegative == 2){
    return ms;
  }
  const ParsedMS = new Date(ms).getMilliseconds();
  return {
    days: (ms / (1000 * 60 * 60 * 24)),
    hours: (ms / (1000 * 60 * 60)),
    minutes: (ms / (1000 * 60)),
    seconds: (ms / (1000)),
    milliseconds: ParsedMS,
  }
}

export {
  parseMs,
};
