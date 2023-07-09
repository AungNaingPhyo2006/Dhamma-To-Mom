// import {isUnicode} from 'react-native-mdetect';
import Rabbit from 'rabbit-node';

export const convertZawgyiToUnicode = zawgyiText => {
  const unicodeText = Rabbit.zg2uni(zawgyiText);
  return unicodeText;
};

export const convertUnicodeToZawgyi = uiText => {
  const zawgyiText = Rabbit.uni2zg(uiText);
  return zawgyiText;
};

// const zawgyiText = 'ပုတီးစိပ်မည် ထိပ်ထိပ်တင်ထွတ်';
// const unicodeText = convertZawgyiToUnicode(zawgyiText);
