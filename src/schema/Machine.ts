export class Machine {
  public companyCnpj: string;
  public serial: string;
  public description: string;

  equals(machine: Machine): boolean {
    return this.serial == machine.serial;
  }

  compareTo(machine: Machine): boolean {
    return this.serial > machine.serial;
  }

  constructor({
    companyCnpj,
    description,
    serial
  }: Omit<Machine, 'equals' | 'compareTo'>) {
    this.companyCnpj = companyCnpj;
    this.description = description;
    this.serial = serial;
  }
}