Mowingtheyard( () => {
    weedeatingtheedgesofthehouseandfenceline( () => {
    trimmingthehedges( () => {
    collectfallenwoodforsummernightfires( () => {
    waterthegarden( () => {
        
    });    
    });    
    });    
    });
});






function  Mowingtheyard (callback) {
    setTimeout(function () {
console.log("Mowing the yard");  
    callback();
}, 2000);
}

function weedeatingtheedgesofthehouseandfenceline(callback) { 
    setTimeout(function () {
    console.log("weedea"); 
    callback();   
    }, 1500);

} 

function trimmingthehedges (callback) {
    setTimeout(function() {
    console.log("Trimming the hedges"); 
    callback();  
    }, 1000);
}
function collectfallenwoodforsummernightfires (callback) {
    setTimeout(function() {
    console.log("collect wood"); 
    callback();  
    }, 2500);
}
function waterthegarden (callback) {
    setTimeout(function() {
    console.log("Water the garden"); 
    callback();  
    }, 500);
}

