import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype { 
  private static createdArchetypeInstancesCounter = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this._name = name;
    this._special = 0;
    this._cost = 0;
    this._energyType = 'mana';
  }
  
  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    Mage.createdArchetypeInstancesCounter += 1;
    return this.createdArchetypeInstancesCounter;
  }
}

export default Mage;