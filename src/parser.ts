import { isNumber } from "./helpers";
import { mathOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.replace(/\s/g, "");

  return stack.split("").reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);

    const isValidLongNumberPush = isNumber(prevItem) && isNumber(item);

    const isValidOperatorPush =
      isNumber(prevItem) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidLongNumberPush) {
      const lastItem = result.pop();
      result.push(Number(`${lastItem}${item}`));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Неверный синтаксис");
    }
    return result;
  }, []);
};
