import { describe, expect, it } from "vitest";
import { Company } from "../schema/Company";

describe('company tests', () => {
  it('Should test if two companies are equal', () => {
    const company1 = new Company({
      cnpj: '123',
      name: 'microsoft',
    });

    const company2 = new Company({
      cnpj: '123',
      name: 'microsoft',
    });

    expect(company1.equals(company2)).toBe(true);
  });

  it('Should test if two companie are different', () => {
    const company1 = new Company({
      cnpj: '123',
      name: 'microsoft',
    });

    const company2 = new Company({
      cnpj: 'different',
      name: 'microsoft',
    });

    expect(company1.equals(company2)).toBe(false);
  });

  it('Should be able to compare two companies', () => {
    const company1 = new Company({
      cnpj: '123',
      name: 'microsoft',
    });

    const company2 = new Company({
      cnpj: 'different',
      name: 'microsoft',
    });

    expect(company1.compareTo(company2)).toBe(false);
  })
});