// user.model.ts

export interface Clients {
    isActive: any;
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
    Role: string,
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
    NaturalPersonTypeCompany: string,
    LegalPersonTypeCompany: string,
    NaturalPersonTypeCompanyAnother: string,
    LegalPersonTypeCompanyAnother: string,
    LegalPersonName?: string;
    LegalPersonCompanyName?: string;
    LegalPersonBusinessName?: string;
    Sector?: string;
    LegalPersonAddress?: string;
    LegalPersonPhone?: number;
    LegalPersonEmail?: string;
    LegalPersonPassword?: string;
    LegalPersonConfirmPassword?: string;
    TypeCompany: string;
    TypeCompanyAnother: string;
    NaturalPersonCareer: string;
    NaturalPersonID: number;
    NaturalPersonSemester: number;
  }
  