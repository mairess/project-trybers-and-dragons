abstract class Race {
  constructor(protected _name: string, protected _dexterity: number) {
    this._name = _name;
    this._dexterity = _dexterity;
  }

  get name(): string { return this._name; }
  get dexterity(): number { return this._dexterity; }
  abstract get maxLifePoints(): number;
  static createdRacesInstances(): number { throw new Error('Not implemented'); }
}

export default Race;