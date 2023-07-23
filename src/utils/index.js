export const getStringTag = value => {
  return Object.prototype.toString.call(value).slice(8, -1)
}

export const hasOwnKey = (obj, key) => {
  if (obj === null || obj === undefined) {
    return false
  }
  return Object.prototype.hasOwnProperty.call(obj, key)
}

export const isObject = value => {
  if (value === null) {
    return false
  }
  return typeof value === 'object' || typeof value === 'function'
}

export const classes = options => {
  if (typeof options === 'string') {
    return options
      .trim()
      .split(/\s+/)
      .filter(item => item.trim())
      .join(' ')
  }
  if (Array.isArray(options)) {
    return options
      .filter(Boolean)
      .map(item => String(item))
      .join(' ')
  }
  if (isObject(options)) {
    return Object.keys(options)
      .map(key => (options[key] ? key : null))
      .filter(Boolean)
      .map(item => String(item))
      .join(' ')
  }
  return ''
}

export const applyCallback = (cb, ...args) => {
  return typeof cb === 'function' ? cb.apply(this, args) : undefined
}
