import Race from './Race';

class Orc extends Race {
  private static createdRacesInstancesCounter = 0;
  private _maxLifePoints: number;
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    Orc.createdRacesInstancesCounter += 1;
    return this.createdRacesInstancesCounter;
  }
}

export default Orc;