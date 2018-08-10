class Storage {

  /**
   * constructor - Handle the local and session Storage
   *
   * @param  {string} type Type of storage (session or local)
   * @return {undefined}
   */
  constructor (type) {
    this.type = type
    this.store = window[type]

    this.isAvailable = () => {
      let key = 'skizz-is-awesome'
      let data = key

      try {
        // http://stackoverflow.com/questions/9077101/iphone-localstorage-quota-exceeded-err-issue#answer-12976988
        this.store.setItem(key, data)
        this.store.removeItem(key)
        return true
      } catch (error) {
        return false
      }
    }
  }

  /**
   * set - Set an item into the storage
   *
   * @param  {string} key The key used to store the item
   * @param  {any} data The data to store
   * @param  {date} [expires] When should the storage expire ?
   * @return {boolean|undefined} Return false if not supported or undefined when the data is store
   */
  set (key, data, expires) {
    if (!this.isAvailable) {
      return false
    }

    data = JSON.stringify({
      value: data,
      expires: expires
    })

    return this.store.setItem(key, data)
  }

  /**
   * get - Get an item into the storage
   *
   * @param  {string} key The key used to store the item
   * @return {any} The data previously store
   */
  get (key) {
    let data = this.store.getItem(key)
    if (data === null) {
      return data
    }

    data = JSON.parse(data)

    if (data.expires && (new Date() > new Date(data.expires))) {
      this.remove(key)
      return null
    }

    return data.value
  }

  /**
   * remove - Remove one item into the storage
   *
   * @param  {string} key The key used to store the item
   * @return {undefined}
   */
  remove (key) {
    return this.store.removeItem(key)
  }

  /**
   * removeAll - Remove all items into the storage
   *
   * @return {undefined}
   */
  removeAll () {
    return this.store.clear()
  }

  /**
   * storageLength - Get the length of the Storage collection
   *
   * @return {int}  The length of the Storage collection
   */
  storageLength () {
    return this.store.length
  }

  /**
   * getKey - Get the key of a store item by index
   *
   * @param  {int} index The index of the store item
   * @return {string} The name of the item
   */
  getKey (index) {
    return this.store.key(index)
  }
}

export default {
  local: new Storage('localStorage'),
  session: new Storage('sessionStorage')
}
