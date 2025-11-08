// ### **1. Festival Ribbon Count**
// A craft booth cuts ribbons of different colors throughout the day:
// 
// ["red", "blue", "red", "green", "red", "blue"]
// 
// They want to know how many **blue** ribbons were cut.

const countRibbons = (count , currentElement) => 
  currentElement === 'blue' ? count + 1 : count;

const festivalRibbonCount = () => {
  const ribbons = ["red", "blue", "red", "green", "red", "blue"];
  const ribbonsCount = ribbons.reduce(countRibbons, 0);
  console.log("\nNo of blue ribbons => ", ribbonsCount);
}

// ### **2. Stargazing Log**
// A stargazing club logs visible constellations from each night:
// ["Orion", "Leo"]
// ["Taurus"]
// ["Orion", "Gemini"]
// Combine everyone’s observations into one list of all constellations spotted.

const removeDuplicates = (uniqueElements, currentElement) => {
  uniqueElements.includes(currentElement) ? "" : uniqueElements.push(currentElement);
  return uniqueElements;
}

const stargazingLog = () => {
  const observations = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]];
  const combinedObservations = observations.flat();
  const uniqueObservations = combinedObservations.reduce(removeDuplicates, []);
  console.log("\nCombined Observations =>", combinedObservations);
  console.log("Unique Observations =>", uniqueObservations);
}

// ### **3. Birdwatching Duplicate Removal**
// A birdwatcher notes species seen during a morning walk:
// 
// ["sparrow", "crow", "sparrow", "eagle", "crow"]
// 
// Create a list of the species without repeats, preserving the order first seen.

const birdwatchingDuplicateRemoval = () => {
  const species = ["sparrow", "crow", "sparrow", "eagle", "crow"];
  const uniqueSpecies = species.reduce(removeDuplicates, []);
  console.log("\nUnique Species => ", uniqueSpecies);
}

// ### **4. Classroom Attendance Check**
// A class records names of students present for each period:
// ["Asha", "Ravi", "Neel"]
// ["Ravi"]
// ["Asha", "Meera"]
// Determine which distinct students attended at least once.

const classroomAttendanceCheck = () => {
  const attendance = [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]];
  const allPeriodsAttendance = attendance.flat();
  const attendedStudents = allPeriodsAttendance.reduce(removeDuplicates, []);
  console.log("\nStudents those who attended at least once are => ", attendedStudents);
}

// ### **5. Candy Jar Stocking**
// A store logs candy refills like this:
// [5, 3]
// [2]
// [4, 1]
// Find the total number of candies added.

const add = (totalCandies, currentRefills) => totalCandies + currentRefills;

const candyJarStocking = () => {
  const logs = [[5, 3], [2], [4, 1]];
  const totalCandies = logs.flat().reduce(add);
  console.log("Total Candies => ", totalCandies);
}

// ### **6. Music Rehearsal Notes**
// Choir groups practice with sequences:
// ["mi", "fa", "so"]
// ["do", "mi"]
// ["fa"]
// Check whether **any** group sang `"do"`.

const sangDo = (currentSequence) => currentSequence.includes('do');

const musicReharsalNotes = () => {
  const sequences = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];
  const anyGroupSangDo = sequences.some(sangDo);
  const suffix = anyGroupSangDo ? "yes" : "no";
  console.log("Any group snag 'do' :", suffix);
}

const main = () => {
  festivalRibbonCount();
  stargazingLog();
  birdwatchingDuplicateRemoval();
  classroomAttendanceCheck();
  candyJarStocking();
  musicReharsalNotes();
}

main();