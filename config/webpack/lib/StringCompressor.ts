import { IdGenerator } from './IdGenerator';

type TId = string;

export class StringCompressor {
  private idMap: Map<string, TId>;
  private idGenerator: IdGenerator;

  constructor() {
    this.idMap = new Map();
    this.idGenerator = new IdGenerator();
  }

  compress(string: string): string {
    if (this.idMap.has(string)) {
      return this.idMap.get(string);
    }

    const id = this.idGenerator.getId();
    this.idMap.set(string, id);

    return id;
  }
}
