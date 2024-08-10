// user.model.ts

export interface Users {
Diagnosis: any;
    id: number;
    EnterpriseType?: string,
    EnterpriseName?: string,
    BusinessName?: string,
    FullName?: string,
    Adress: string;
    Phone: number;
    Email: string,
    Password: string,
    Rol: string,
    ConfirmPassword: string,
    TypeOfPerson?: string;
    NaturalPersonName?: string;
    NaturalPersonCompanyName?: string;
    NaturalPersonAddress?: string;
    NaturalPersonPhone?: number;
    NaturalPersonEmail?: string;
    NaturalPersonPassword?: string;
    NaturalPersonConfirmPassword?: string;
    TypeOfAdvice?: string;
    TypeCompany?: string;
    TypeCompanyAnother?: string;
    LegalPersonName?: string;
    LegalPersonCompanyName?: string;
    LegalPersonBusinessName?: string;
    Sector?: string;
    LegalPersonAddress?: string;
    LegalPersonPhone?: number;
    LegalPersonEmail?: string;
    LegalPersonPassword?: string;
    LegalPersonConfirmPassword?: string;
  }
  