import crypto from 'crypto';

type THash = string;
type THashedData = string;


export class HashGenerator {
  private hashMap: Map<THash, THashedData>;
  private readonly size: number;

  constructor(size: number = 5) {
    this.hashMap = new Map();
    this.size = size;
  }

  getHashFrom(...data: THashedData[]): THash {
    const hashedData = data.join('');

    const baseHash = crypto.createHash('md5');
    baseHash.update(hashedData);

    const hash = baseHash
      .digest('base64')
      .replace(/[^a-zA-Z0-9]/g, '')
      .slice(0, this.size);

    /** Проверяем наличие коллизии. */
    if (this.hashMap.has(hash)) {
      const hashSalt = Math.random().toString();
      return this.getHashFrom(hashedData, hashSalt);
    }

    this.hashMap.set(hash, hashedData);
    return hash;
  }
}
