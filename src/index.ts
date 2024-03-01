import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Super Punch Johnson');

const player2 = new Character('Super kick Jack');

const player3 = new Character('Stormy Sam');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]): void {
//   for (let index = 0; index < battles.length; index += 1) {
//     const battle = battles[index];
//     battle.fight();
//   }
  battles.forEach((battle: Battle): void => { battle.fight(); });
}

export { 
  player1, 
  player2, 
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};