function Mowingtheyard(name, callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    callback();
  }, 2000);
}

function weede(name, callback) {
  setTimeout(() => {
    let tiredness = Math.random();

    if (tiredness > 0.7) {
      console.log(`${name} fell asleep after mowing the yard.`);
      return;
    }

    console.log(`${name} finished using weed eater.`);
    callback();
  }, 1500);
}

function trimmingthehedges(name, callback) {
  setTimeout(() => {
    let tiredness = Math.random();

    if (tiredness > 0.6) {
      console.log(`${name} fell asleep after weed eating the yard.`);
      return;
    }

    console.log(`${name} finished trimming the hedges!`);
    callback();
  }, 1000);
}

function collectfallenwoodforsummernightfires(name, callback) {
  setTimeout(() => {
    let tiredness = Math.random();

    if (tiredness > 0.5) {
      console.log(`${name} fell asleep after trimming the hedges.`);
      return;
    }

    console.log(`${name} finished collecting wood!`);
    callback();
  }, 2500);
}

function waterthegarden(name, callback) {
  setTimeout(() => {
    let tiredness = Math.random();

    if (tiredness > 0.4) {
      console.log(`${name} fell asleep after collecting wood.`);
      return;
    }

    console.log(`${name} finished watering the garden!`);
    callback();
  }, 500);
}

function doSummerchores(name) {
  Mowingtheyard(name, () => {
    weede(name, () => {
      trimmingthehedges(name, () => {
        collectfallenwoodforsummernightfires(name, () => {
          waterthegarden(name, () => {
            console.log(`${name} finished all their chores!`);
          });
        });
      });
    });
  });
}

doSummerchores("luna");
