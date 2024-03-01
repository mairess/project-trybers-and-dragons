import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private opponent: Fighter;

  constructor(player: Fighter, opponent: Fighter) {
    super(player);
    this.opponent = opponent;
  }

  private combat(): boolean {
    while (this.player.lifePoints > 0 && this.opponent.lifePoints > 0) {
      this.player.attack(this.opponent);
      if (this.opponent.lifePoints > 0) { this.opponent.attack(this.player); }
    }
    const isPlayerWinner = this.player.lifePoints > 0;
    return isPlayerWinner;
  }

  fight(): number {
    return this.combat() ? 1 : -1;
  }
}

export default PVP;