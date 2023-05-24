export class Company {
  public name: string;
  public cnpj: string;

  public equals(company: Company): boolean {
    return this.cnpj == company.cnpj;
  }

  compareTo(company: Company): boolean {
    return this.cnpj.localeCompare(company.cnpj) == 1 ? true : false;
  }

  constructor({
    name,
    cnpj
  }: Omit<Company, 'equals' | 'compareTo'>) {
    this.name = name;
    this.cnpj = cnpj;
  }
}