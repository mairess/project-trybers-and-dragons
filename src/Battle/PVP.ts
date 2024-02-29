import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private opponent: Fighter;

  constructor(player: Fighter, opponent: Fighter) {
    super(player);
    this.opponent = opponent;
  }

  fight(): number {
    return (this.player.lifePoints > this.opponent.lifePoints) ? 1 : -1;
  }
}

export default PVP;