export const formatPhoneNumberKR = (phone: string) => {
  const phoneNumber = phone.replace(/[^0-9]/g, '');
  const areaCode = phoneNumber.slice(0, 3);
  const length = phoneNumber.length;

  // exception for 2 digit area code
  if (areaCode.indexOf('02') !== -1) {
    if (length >= 3 && length <= 6) {
      return phoneNumber.replace(/(\d{2})(\d)/, '$1-$2');
    }

    if (length > 6 && length < 10) {
      return phoneNumber.replace(/(\d{2})(\d{3})(\d)/, '$1-$2-$3');
    }

    if (length >= 10) {
      return phoneNumber
        .slice(0, 10)
        .replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
    }
  }

  // phone or cell convert dash number
  if (length >= 3 && length <= 6) {
    return phoneNumber.replace(/(\d{3})(\d)/, '$1-$2');
  }

  if (length > 6 && length <= 10) {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d)/, '$1-$2-$3');
  }

  if (length >= 11) {
    return phoneNumber.slice(0, 11).replace(/(\d{3})(\d{4})(\d)/, '$1-$2-$3');
  }

  return phoneNumber;
};
