
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function checkIfFallsAsleep(chance, message) {
  if (Math.random() < chance) {
    throw new Error(message);
  }
}

// chores
async function mowYard(name) {
  await sleep(2000);
  console.log(`${name} mowed the yard.`);
}

async function weedEat(name) {
  await sleep(1500);
  checkIfFallsAsleep(0.30, `${name} fell asleep after mowing the yard.`);
  console.log(`${name} finished using weed eater.`);
}

async function trimHedges(name) {
  await sleep(1000);
  checkIfFallsAsleep(0.40, `${name} fell asleep after weed eating the yard.`);
  console.log(`${name} finished trimming the hedges.`);
}

async function collectWood(name) {
  await sleep(2500);
  checkIfFallsAsleep(0.50, `${name} fell asleep after trimming the hedges.`);
  console.log(`${name} collected wood.`);
}

async function waterGarden(name) {
  await sleep(500);
  checkIfFallsAsleep(0.60, `${name} fell asleep after collecting wood.`);
  console.log(`${name} finished watering the garden.`);
}

async function doSummerChores(name) {
  try {
    await mowYard(name);
    await weedEat(name);
    await trimHedges(name);
    await collectWood(name);
    await waterGarden(name);

    console.log(`${name} finished all their chores!`);
  } catch (err) {
    console.log(`Stop: ${err.message}`);
  }
}

doSummerChores("Luna");
