interface EmailParameter {
  email: string;
  password?: string;
}

interface EmailCheckParameter {
  email: string;
}

interface PhoneLoginParameter {
  phone: string;
  code: string;
}

interface AuthParameter {
  access: string;
  refresh: string;
}
