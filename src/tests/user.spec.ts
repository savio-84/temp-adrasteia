import { beforeAll, describe, expect, it } from "vitest";
import { User } from "../schema/User";
import { Company } from "../schema/Company";

describe('Users tests', ()=> {
  let company: Company;
  beforeAll(() => {
    company = new Company({
      name: 'companhia',
      cnpj: '123',
    });
  })
  it('should test if two user with same cpf and email are equal', () => {

    const user1 = new User({
      cpf: '123.123.123.12',
      email: 'user@email.com',
      lastName: 'lastname',
      name: 'name',
      password: 'password',
      phone: '+55 (84) 912341234',
      companyCnpj: company.cnpj,
      role: 'EMPLOYEE',
    });
  
    const user2 = new User({
      cpf: '123.123.123.12',
      email: 'user@email.com',
      lastName: 'lastname',
      name: 'name',
      password: 'password',
      phone: '+55 (84) 912341234',
      companyCnpj: company.cnpj,
      role: 'EMPLOYEE',
    });
  
    expect(user1.equals(user2)).toBe(true);
  });

  it('should test if two user with different cpf and email are different', () => {
    const user1 = new User({
      cpf: '123.123.123.11',
      email: 'user1@email.com',
      lastName: 'lastname',
      name: 'name',
      password: 'password',
      phone: '+55 (84) 912341234',
      companyCnpj: company.cnpj,
      role: 'EMPLOYEE',
    });
  
    const user2 = new User({
      cpf: '123.123.123.12',
      email: 'user2@email.com',
      lastName: 'lastname',
      name: 'name',
      password: 'password',
      phone: '+55 (84) 912341234',
      companyCnpj: company.cnpj,
      role: 'EMPLOYEE',
    });
    expect(user1.equals(user2)).toBe(false);
  });

  it('should test if two user with different cpf or email are different', () => {
    const user1 = new User({
      cpf: '123.123.123.11',
      email: 'user1@email.com',
      lastName: 'lastname',
      name: 'name',
      password: 'password',
      phone: '+55 (84) 912341234',
      companyCnpj: company.cnpj,
      role: 'EMPLOYEE',
    });
  
    const user2 = new User({
      cpf: '123.123.123.12',
      email: 'user1@email.com',
      lastName: 'lastname',
      name: 'name',
      password: 'password',
      phone: '+55 (84) 912341234',
      companyCnpj: company.cnpj,
      role: 'EMPLOYEE',
    });
    expect(user1.equals(user2)).toBe(false);
  });

  it('should test if two user with different cpf or email are different', () => {
    const user1 = new User({
      cpf: '123.123.123.11',
      email: 'user1@email.com',
      lastName: 'lastname',
      name: 'name',
      password: 'password',
      phone: '+55 (84) 912341234',
      companyCnpj: company.cnpj,
      role: 'EMPLOYEE',
    });
  
    const user2 = new User({
      cpf: '123.123.123.12',
      email: 'user1@email.com',
      lastName: 'lastname',
      name: 'name',
      password: 'password',
      phone: '+55 (84) 912341234',
      companyCnpj: company.cnpj,
      role: 'EMPLOYEE',
    });
    expect(user1.compareTo(user2)).toBe(false);
  });
})