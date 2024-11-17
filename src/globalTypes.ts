/**
 * Перечисление для обозначения типа поздравительного текста.
 * - `Win`: Все ответы правильные.
 * - `SemiWin`: Часть ответов правильная.
 * - `Lose`: Все ответы неправильные.
 */
export enum CongratsTextE {
  Win = "WIN",
  SemiWin = "SEMIWIN",
  Lose = "LOSE",
}

/**
 * Тип, описывающий структуру поздравительного текста.
 * @property {string} title - Заголовок поздравления.
 * @property {string} text - Основной текст поздравления.
 * @property {CongratsTextE} type - Тип поздравления (Win, SemiWin, Lose).
 */
export type CongratsTextT = {
  title: string;
  text: string;
  type: CongratsTextE;
};

/**
 * Тип для объекта с поздравительными текстами.
 * Содержит текст для каждого результата теста (победа, частичная победа, поражение).
 *
 * @property {CongratsTextT} WIN - Текст поздравления при полном успехе.
 * @property {CongratsTextT} SEMIWIN - Текст поздравления при частичном успехе.
 * @property {CongratsTextT} LOSE - Текст поздравления при полном провале.
 */
export type CongratsTextsT = {
  [CongratsTextE.Win]: CongratsTextT;
  [CongratsTextE.SemiWin]: CongratsTextT;
  [CongratsTextE.Lose]: CongratsTextT;
};
