import { beforeAll, describe, expect, it } from "vitest";
import { Sensor } from "../schema/Sensor";
import { Event } from "../schema/Event";

describe('event tests', () => {
  let sensor: Sensor;

  beforeAll(() => {
    sensor = new Sensor({
      category: 'temperature',
      machineSerial: '123',
      serial: '123',
      status: 'active',
    });
  });

  it('should test if two events are equal', () => {
    const defaultDate = new Date();
    const event1 = new Event({
      date: defaultDate,
      sensorSerial: sensor.serial,
      value: 1
    });

    const event2 = new Event({
      date: defaultDate,
      sensorSerial: sensor.serial,
      value: 1
    });

    expect(event1.equals(event2)).toBe(true);
  });

  it('should test if two events are different', () => {
    const event1 = new Event({
      date: new Date(),
      sensorSerial: sensor.serial,
      value: 1
    });

    const event2 = new Event({
      date: new Date(),
      sensorSerial: sensor.serial,
      value: 1
    });

    expect(event1.equals(event2)).toBe(false);
  });

  it('Should be able to compare two events', () => {
    const event1 = new Event({
      date: new Date(),
      sensorSerial: sensor.serial,
      value: 1
    });

    const event2 = new Event({
      date: new Date(),
      sensorSerial: sensor.serial,
      value: 1
    });

    expect(event1.compareTo(event2)).toBe(false);
  })
})