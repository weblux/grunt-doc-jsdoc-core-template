function attr (name, value) {
  if (arguments.length === 1 && typeof name === 'string') {
    if (this.length) {
      let attribute = this[0].getAttribute(name)
      return attribute !== null
      ? attribute
      : this[0][name]
    }

    return undefined
  }

  return this.each(function (index) {
    if (value !== undefined && typeof value !== 'object') {
      this.setAttribute(name, value)
    } else {
      for (let attribute in name) {
        if (!name.hasOwnProperty(attribute)) {
          continue
        }

        value = name[attribute]
        if (attribute === '_text') {
          this.textContent = value
        } else if (attribute === '_html' && typeof value === 'object') {
          this.innerHTML = value.outerHTML
        } else if (attribute === '_html') {
          this.innerHTML = value
        } else if (value === null) {
          this.removeAttribute(attribute)
        } else if (attribute in this) {
          this[attribute] = value
        } else {
          this.setAttribute(attribute, value)
        }

        this.setAttribute(attribute, name[attribute])

        value = name[attribute]

        if (attribute === '_text') {
          this.textContent = value
        } else if (attribute === '_html' && typeof value === 'object') {
          this.innerHTML = value.outerHTML
        } else if (attribute === '_html') {
          this.innerHTML = value
        } else if (value === null) {
          this.removeAttribute(attribute)
        } else if (attribute in this) {
          this[attribute] = value
        } else {
          this.setAttribute(attribute, value)
        }
      }
    }
  })
}

export default attr
