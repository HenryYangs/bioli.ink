class Events {
  /**
   * registered events
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  private _events: Record<string, Function[]>;

  public constructor() {
    this._events = {};
  }

  /**
   * register event
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  public on(eventName: string, callback: Function) {
    /**
     * create an array if the event has not been registered
     */
    if (this._events[eventName]) {
      this._events[eventName].push(callback);
    } else {
      this._events[eventName] = [callback];
    }

    return this;
  }

  /**
   * unregister event
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  public off(eventName: string, callback: Function) {
    const events = this._events[eventName];

    /**
     * early return if there is no event or callback
     */
    if (!events || !events.length) return this;

    /**
     * clear all callback of event if argument callback is not been passed
     */
    if (!callback) {
      this._events[eventName] = [];
      return this;
    }

    /**
     * find specific callback and remove it
     */
    const eventIdx = events.findIndex(cb => {
      return (cb === callback)
    });

    if (eventIdx >= 0) {
      events.splice(eventIdx, 1);
    }

    return this;
  }

  public emit(eventName: string, ...args: unknown[]) {
    const events = this._events[eventName];
    /**
     * early return if there is no callback
     */
    if (!events || !events.length) return this;

    for (let i = 0; i < events.length; i++) {
      events[i].apply(this, args);
    }

    return this;
  }

  /**
   * register an event，and can be emit once
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  public once(eventName: string, callback: Function) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function on(this: any, ...args: unknown[]) {
      this.off(eventName, callback);
      callback.apply(this, ...args);
    }

    this.on(eventName, on);

    return this;
  }
}

export default new Events();
