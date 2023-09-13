class ID {
  private _baseId = 1;
  private _prevIdTimestamp: number;

  next(prefix?: string): string {
    const timestamp = new Date().getTime();
    if (timestamp === this._prevIdTimestamp) {
      ++this._baseId;
    } else {
      this._baseId = 1;
    }
    this._prevIdTimestamp = timestamp;
    return `${prefix ?? ''}${timestamp}_${this._baseId}`;
  }
}

const id = new ID();

function createId(prefix?: string): string {
  return id.next(prefix);
}

export { createId };
