import { beforeAll, describe, expect, it } from "vitest";
import { Machine } from "../schema/Machine";
import { Sensor } from "../schema/Sensor";

describe('sensors tests', () => {
  let machine: Machine;

  beforeAll(() => {
    machine = new Machine({
      companyCnpj: '123',
      description: 'description',
      serial: '123',
    })
  });

  it('should test if two sensors are equals', () => {
    const sensor1 = new Sensor({
      category: 'temperature',
      machineSerial: machine.serial,
      serial: '123',
      status: 'active',
    });

    const sensor2 = new Sensor({
      category: 'temperature',
      machineSerial: machine.serial,
      serial: '123',
      status: 'active',
    });

    expect(sensor1.equals(sensor2)).toBe(true);
  });

  it('should test if two sensors are different', () => {
    const sensor1 = new Sensor({
      category: 'temperature',
      machineSerial: machine.serial,
      serial: '123',
      status: 'active',
    });

    const sensor2 = new Sensor({
      category: 'temperature',
      machineSerial: machine.serial,
      serial: '124',
      status: 'active',
    });

    expect(sensor1.equals(sensor2)).toBe(false);
  });

  it('should be able to compare two sensors', () => {
    const sensor1 = new Sensor({
      category: 'temperature',
      machineSerial: machine.serial,
      serial: '123',
      status: 'active',
    });

    const sensor2 = new Sensor({
      category: 'temperature',
      machineSerial: machine.serial,
      serial: '124',
      status: 'active',
    });

    expect(sensor1.compareTo(sensor2)).toBe(false);
  });
})