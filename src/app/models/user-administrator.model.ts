// user.model.ts

export interface Users {
    id: number;
    enterpriseType: string,
    enterpriseName: string,
    businessName: string,
    fullName: string,
    adress: string;
    phone: number;
    email: string,
    password: string,
    rol: string,
    confirmPassword: string,
    typeOfPerson?: string; // opcional porque en algunos casos puede ser nulo
    naturalPersonName?: string;
    NaturalPersonAddress?: string;
    NaturalPersonPhone?: string;
    naturalPersonEmail?: string;
    naturalPersonPassword?: string;
    naturalPersonConfirmPassword?: string;
    typeOfAdvice?: string;
    typeCompany?: string;
    typeCompanyAnother?: string;
    legalPersonName?: string;
    legalPersonCompanyName?: string;
    sector?: string;
    LegalPersonAddress?: string;
    LegalPersonPhone?: string;
    legalPersonEmail?: string;
    legalPersonPassword?: string;
    legalPersonConfirmPassword?: string;
  }
  