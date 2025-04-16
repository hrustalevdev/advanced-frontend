import { getPathToModule } from "./helpers";
import { GetCssClassIdent } from "./types";

const _charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const _radix = _charset.length;
const _classNameMap = new Map<string, string>();
let _counter = 0;

export const getCssClassIdentProd: GetCssClassIdent = (
  context,
  _,
  /** Название класса в CSS, напр. `button` */
  localName,
) => {
  const pathToModule = getPathToModule(context);
  const key = `${pathToModule}${localName}`;

  if (_classNameMap.has(key)) {
    return _classNameMap.get(key)!;
  }

  const className = _convertToCharsetRadix(_counter++);

  _classNameMap.set(key, className);

  return className;
};

/** Конвертирует число в систему счисления на основе `_charset` */
function _convertToCharsetRadix(number: number): string {
  let result = "";

  /** Поразрядно собираем число, по основанию `_radix` состоящее из символов `_charset` */
  do {
    /** Остаток - индекс позиции текущего разряда в `_charset` */
    const remainder = number % _radix;

    /** Больший разряд добавляем к меньшему разряду слева, как в обычной системе счисления */
    result = `${_charset[remainder]}${result}`;
    /** Проверяем, есть ли ещё разряды. Если результат >= 0, значит есть ещё разряд(ы) и для них тоже надо подобрать символ */
    number = Math.floor(number / _radix) - 1;
  } while (number >= 0);

  return result;
}
