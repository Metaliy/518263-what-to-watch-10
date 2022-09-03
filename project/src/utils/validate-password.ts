import { MIN_PASSWORD_LENGTH } from '../const';

export const validatePassword = (password: string): boolean | null => {
  const passwordSymbolsArray = Array.from(password);
  let isPasswordCorrect = false;
  let isPasswordHasLetter = false;
  let isPasswordHasNember = false;
  if(MIN_PASSWORD_LENGTH >= password.length) {
    passwordSymbolsArray.forEach((symbol) => {
      const regex = new RegExp(/[A-Za-z]/i);
      if (regex.test(symbol)) {
        isPasswordHasLetter = true;
      }
    });
    passwordSymbolsArray.forEach((symbol) => {
      const regex = new RegExp(/\d/i);
      if (regex.test(symbol)){
        isPasswordHasNember = true;
      }
    });
  }

  if(isPasswordHasLetter && isPasswordHasNember) {
    isPasswordCorrect = true;
  }
  return isPasswordCorrect;
};

