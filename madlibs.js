const prompt = require("prompt-sync")();

const madlibs = () => {
  let player = prompt("Would you like Story One or Story Two?");
  let which = player === "One" ? true : false;
  if (which) {
    let adjective = prompt("type an adjective");
    let place = prompt("type a general place");
    let vehicle = prompt("type a vehicle name (plural)");
    let game = prompt("type the name of a game");
    let noun = prompt("type a plural noun");
    let verb1 = prompt("type an 'ing' verb");
    let verb2 = prompt("type another 'ing' verb");
    let food = prompt("type a food name (plural)");
    let sport = prompt("type the name of a sport");
    let verb3 = prompt("type another 'ing' verb");
    let emotion = prompt("type an emotion");
    let number = prompt("type a number");
    console.log(
      `A vacation is when you take a trip to some ${adjective} place near an amazing ${place}. 
      A good vacation place is one where you can ride ${vehicle} or play ${game} or go hunting for ${noun}. 
      I like to spend my time ${verb1} or ${verb2}. When parents go on a vacation, they spend their time eating three ${food} a day. 
      Usually, fathers play ${sport}, and mothers spend their time ${verb3}. 
      Adults need vacations more than kids because adults are always very ${emotion} because they have to work 
      ${number} hours every day all year just to afford their vacations!`
    );
  } else {
    const toAsk = [
      "type an adjective",
      "type a famous place",
      "type a plural noun",
      "type another adjective",
      "type a food (plural)",
      "type an emotion",
      "type an 'ing' verb",
      "type a common place",
      "type another adjective",
      "type a noun",
      "type another adjective",
      "type another noun",
      "type a family member",
      "type another adjective",
    ];
    let s = [];
    toAsk.forEach((question) => {
      s.push(prompt(question));
    });
    console.log(
      `Today we took a ${s[0]} fieldtrip to ${s[1]}. They're famous for making ${s[2]} and for cooking ${s[3]} ${s[4]}. Eating all that food made me feel ${s[5]}. Next we enjoyed the local tradition of ${s[6]} in the middle of the ${s[7]}! Finally, we went shopping for souvenirs. I bought a ${s[8]} ${s[9]} for myself, and a ${s[10]} ${s[11]} for my favorite ${s[12]}. I'll definitely never forget this ${s[13]} trip!`
    );
  }
};

madlibs();
