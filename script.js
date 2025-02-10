const facts = [
    "Iron Man's real name is Tony Stark, a genius billionaire playboy philanthropist.",
    "The first Iron Man movie was released in 2008 and launched the Marvel Cinematic Universe.",
    "Tony Stark's suit has gone through numerous upgrades, with the Mark 85 being the most advanced in 'Avengers: Endgame'.",
    "Iron Man's arc reactor was originally designed to keep shrapnel from reaching his heart.",
    "The character of Iron Man was created by writer Larry Lieber and artists Don Heck and Jack Kirby.",
    "In the comics, Iron Man has battled numerous villains, including the Mandarin and Ultron.",
    "Robert Downey Jr. portrayed Iron Man in the Marvel Cinematic Universe, becoming one of the most iconic superheroes.",
    "Tony Stark is known for his quick wit and humor, often delivering memorable one-liners.",
    "Iron Man's suit is equipped with advanced AI, known as J.A.R.V.I.S., which assists him in combat and everyday tasks.",
    "The Iron Man suit has been featured in various comic book series, animated shows, and video games.",
    "Tony Stark's character arc includes themes of redemption, responsibility, and sacrifice.",
    "In 'Avengers: Endgame', Iron Man makes the ultimate sacrifice to save the universe by wielding the Infinity Stones.",
    "The Iron Man suit has a self-repairing feature, allowing it to fix itself during battles.",
    "Tony Stark's technology has inspired real-world advancements in robotics and artificial intelligence.",
    "Iron Man has been a founding member of the Avengers, playing a crucial role in many of their missions."
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
});
