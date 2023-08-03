import { formatPhoneNumberKR } from '../format-phone-number-kr';

describe('formatPhoneNumberKR', () => {
  it('should format phone number with two digit area code correctly', () => {
    expect(formatPhoneNumberKR('02-123-4567')).toEqual('02-123-4567');
    expect(formatPhoneNumberKR('021234567')).toEqual('02-123-4567');
    expect(formatPhoneNumberKR('02123456789')).toEqual('02-1234-5678');
    expect(formatPhoneNumberKR('0212345678910')).toEqual('02-1234-5678');
  });

  it('should format phone or cell number correctly', () => {
    expect(formatPhoneNumberKR('123-456')).toEqual('123-456');
    expect(formatPhoneNumberKR('1234567')).toEqual('123-456-7');
    expect(formatPhoneNumberKR('0101234567')).toEqual('010-123-4567');
    expect(formatPhoneNumberKR('01012345678')).toEqual('010-1234-5678');
    expect(formatPhoneNumberKR('010123456789')).toEqual('010-1234-5678');
    expect(formatPhoneNumberKR('0101234567890')).toEqual('010-1234-5678');
  });
});
