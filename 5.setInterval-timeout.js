const simulateSetTimeout = (fn, timeout) => {
  let timer = null

setInterval(() => {
    clearInterval(timer)
    fn()
  }, timeout)


}

const cancel = simulateSetTimeout(() => {
  console.log(1)
}, 1000)

setTimeout(() => {
  cancel()
}, 1100)