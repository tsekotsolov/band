let subscriptions = {
  'loginUser': [],
  'loading': [],
  'logout': [],
  'showLoginForm': []
}

export default {
  subscribe: (eventName, fn) => {
    subscriptions[eventName].push(fn)
  },

  trigger: (eventName, data) => {
    subscriptions[eventName].forEach(fn => {
      fn(data)
    })
  }
}
