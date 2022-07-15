function debounce(callback, delay, immediate = false) {
    let timerID
    return function(...args) {
      // 清除计时器
      clearTimeout(timerID)
      // 判断是否为立即执行，条件为1. 没有待执行的func, immediate为true
      const isCallImmediately = timerID ==null && immediate
      // 如果isCallImmediately 为true， 则直接执行 callback
      console.log('123',args)
      if(isCallImmediately){
        // 在callback上通过apply() bind this， 并将callback原先带的参数 再重新传入callback
        callback.apply(this,args)
      }
      timerID = setTimeout(()=>{
        if(!immediate){
          callback.apply(this,args)
        }
        timerID = null
      },delay)
    }
  }


  debounce(console.log(),900)
  