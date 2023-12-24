const ALPHABET = 'abcefghijklmnopqrstuvwxyzABCEFGHIJKLMNOPQRSTUVWXYZ';

export class IdGenerator {
  private readonly basis: string;
  private id: string;

  constructor(basis: string = ALPHABET) {
    this.basis = ALPHABET;
    this.id = '';
  }

  getId(): string {
    if (!this.id) {
      this.id = this.basis[0];
      return this.id;
    }

    this.id = this.incr(this.id);
    return this.id;
  }

  private incr(id: string): string {
    const digits = id.split('').map((char) => this.basis.indexOf(char));
    const lastDigitIndex = digits.length - 1;
    const lastBasisIndex = this.basis.length - 1;

    for (let i = lastDigitIndex; i >= 0; i--) {
      if (digits[i] === lastBasisIndex) {
        digits[i] = 0;

        if (i === 0) {
          digits.unshift(0);
        }
      } else {
        digits[i]++;
        break;
      }
    }

    return digits.map((digit) => this.basis[digit]).join('');
  }
}
