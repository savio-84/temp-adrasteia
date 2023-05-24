import { beforeAll, describe, expect, it } from "vitest";
import { Company } from "../schema/Company";
import { Machine } from "../schema/Machine";

describe('machine tests', () => {
  let company: Company;

  beforeAll(() => {
    company = new Company({
      cnpj: '123',
      name: 'microsoft',
    })
  })
  it('shold test if two machines are equals', () => {
    const machine1 = new Machine({
      companyCnpj: company.cnpj,
      description: 'description',
      serial: '123',
    })
    const machine2 = new Machine({
      companyCnpj: company.cnpj,
      description: 'description',
      serial: '123',
    })
    expect(machine1.equals(machine2)).toBe(true);
  });

  it('should test if two machines are different', () => {
    const machine1 = new Machine({
      companyCnpj: company.cnpj,
      description: 'description',
      serial: '123',
    })
    const machine2 = new Machine({
      companyCnpj: company.cnpj,
      description: 'description',
      serial: '124',
    })
    expect(machine1.equals(machine2)).toBe(false);
  });

  it('should be able to compare two machines', () => {
    const machine1 = new Machine({
      companyCnpj: company.cnpj,
      description: 'description',
      serial: '123',
    })
    const machine2 = new Machine({
      companyCnpj: company.cnpj,
      description: 'description',
      serial: '124',
    })
    expect(machine1.compareTo(machine2)).toBe(false);
  });
})