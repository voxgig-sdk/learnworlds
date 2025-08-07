
function formatJSONSrc(jsonsrc: string) {
  return jsonsrc
    .replace(/([{:\[,])/g, '$1 ')
    .replace(/([}\]])/g, ' $1')
}

export {
  formatJSONSrc
}
