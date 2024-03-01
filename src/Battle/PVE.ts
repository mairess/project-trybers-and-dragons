import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private monsters: Fighter[] | SimpleFighter[];

  constructor(player: Fighter, monsters: Fighter[] | SimpleFighter[]) {
    super(player);
    this.monsters = monsters;
  }

  private combat(monster: Fighter | SimpleFighter): boolean {
    while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
      this.player.attack(monster);
      if (monster.lifePoints > 0) { monster.attack(this.player); }
    }
    const isPlayerWinner = this.player.lifePoints > 0;
    return isPlayerWinner;
  }

  fight(): number {
    let result = 1;
    for (let index = 0; index < this.monsters.length; index += 1) {
      const monster = this.monsters[index];
      if (!this.combat(monster)) { result = -1; }
    }
    return result;
  }
}

export default PVE;