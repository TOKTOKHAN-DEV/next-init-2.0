export const emailValidate = {
  confirm: (value: string) => {
    const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return reg.test(value) ? true : '이메일형식을 확인해주세요.';
  },
};

export const passwordValidate = {
  hasNumber: (value: string) => {
    const reg = /[0-9]/;
    console.log('iii');
    return reg.test(value) ? true : '숫자가 포함되어야 합니다.';
  },
  hasText: (value: string) => {
    const reg = /[a-zA-Z]/;
    return reg.test(value) ? true : '대문자&소문자가 포함되어야 합니다.';
  },
  hasSpecial: (value: string) => {
    const reg = /[~!@#$%^&*()_+|<>?:{}]/;
    return reg.test(value) ? true : '특수문자가 포함되어야 합니다.';
  },
  length: (value: string) => {
    return value.length > 8 ? true : '8자리 이상이어야 합니다.';
  },
};
