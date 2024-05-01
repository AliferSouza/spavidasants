const events = {}

export function $on(event, cb) {
  const nameEvent = event.tagName.toLowerCase() 
  if(!events[nameEvent]){
    events[nameEvent] = events[nameEvent] || []
    events[nameEvent].push(cb)
  }
  
}

export function emit(event, ...args) {
  if (events[event]) {
    events[event].forEach(cb => cb(...args))
  }
}
