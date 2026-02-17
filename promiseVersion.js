function mowYard(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      resolve();
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let tiredness = Math.random();

      if (tiredness > 0.7) {
        reject(`${name} fell asleep after mowing the yard.`);
      } else {
        console.log(`${name} finished using weed eater.`);
        resolve();
      }
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let tiredness = Math.random();

      if (tiredness > 0.6) {
        reject(`${name} fell asleep after weed eating the yard.`);
      } else {
        console.log(`${name} finished trimming the edges.`);
        resolve();
      }
    }, 1000);
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let tiredness = Math.random();

      if (tiredness > 0.5) {
        reject(`${name} fell asleep after trimming the hedges.`);
      } else {
        console.log(`${name} collected wood.`);
        resolve();
      }
    }, 2500);
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let tiredness = Math.random();

      if (tiredness > 0.4) {
        reject(`${name} fell asleep after collecting wood.`);
      } else {
        console.log(`${name} finished watering the garden.`);
        resolve();
      }
    }, 500);
  });
}

function doSummerChores(name) {
  mowYard(name)
    .then(() => { console.log ("next: weedEat"); return weedEat(name);})
    .then(() => { console.log ("next: trimHedges"); return trimHedges(name);}) 
    .then(() => { console.log ("next: collectWood"); return collectWood(name);})
    .then(() => { console.log ("next: waterGarden"); return waterGarden(name);})
    .then(() => {
      console.log(`${name} finished all their chores!`);
    })
    .catch((error) => {
      console.log(error);
    });
}

doSummerChores("Luna");
