export class Sensor {
  public category: 'vibration' | 'temperature' | 'humidity';
  public status: 'active' | 'stopped' | 'disabled';
  public serial: string;
  public machineSerial: string;
  
  equals(sensor: Sensor) {
    return this.serial == sensor.serial;
  }

  compareTo(sensor: Sensor): boolean {
    return this.serial > sensor.serial;
  }

  constructor({
    category,
    machineSerial,
    serial,
    status
  }: Omit<Sensor, 'equals' | 'compareTo'>) {
    this.category = category;
    this.machineSerial = machineSerial;
    this.serial = serial;
    this.status = status;
  }
}