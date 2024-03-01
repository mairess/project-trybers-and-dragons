import Race from './Race';

class Dwarf extends Race {
  private static createdRacesInstancesCounter = 0;
  private _maxLifePoints: number;
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    Dwarf.createdRacesInstancesCounter += 1;
    return this.createdRacesInstancesCounter;
  }
}

export default Dwarf;