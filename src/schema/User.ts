export class User {
  public name: string;

  public lastName: string;

  public email: string;

  public password: string;

  public cpf: string;

  public phone: string;

  public role: 'ADMIN' | 'CEO' | 'EMPLOYEE';

  public companyCnpj: string;

  public equals(object: User) {
    return object.cpf === this.cpf && object.email === this.email;
  }

  public compareTo(object: User): boolean {
    return this.cpf > object.cpf;
  }

  constructor({
    cpf,
    email,
    lastName,
    name,
    password,
    phone,
    role,
    companyCnpj,
  }: Omit<User, 'equals' | 'compareTo'>) {
    this.cpf = cpf;
    this.email = email;
    this.lastName = lastName;
    this.name = name;
    this.password = password;
    this.phone = phone;
    this.role = role;
    this.companyCnpj = companyCnpj;
  }
}
