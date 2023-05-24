export class Event {
  public date: Date;
  public sensorSerial: string;
  public value: number;

  equals(event: Event) {
    return this.date == event.date;
  }

  compareTo(event: Event) {
    return this.date > event.date;
  }

  constructor({
    date,
    sensorSerial,
    value
  }: Omit<Event, 'equals' | 'compareTo'>) {
    this.date = date;
    this.sensorSerial = sensorSerial;
    this.value = value;
  }
}