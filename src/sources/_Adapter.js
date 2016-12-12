
// Server API emulation
export default class Adapter {
  constructor(store) {
    this.store = store;
  }

  list() {
    return this.store.all();
  }

  create(data) {
    return this.store.put({
      ...data,
      id: Date.now()
    })
    .then(this.store.get);
  }

  get(id) {
    return this.store.get(id);
  }

  update(data) {
    return this.store.put(data)
      .then(this.store.get);
  }

  remove(id) {
    return this.store.del(id).then(() => id);
  }
}
