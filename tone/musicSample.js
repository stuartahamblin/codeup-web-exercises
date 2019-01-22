// console.log(Tone.Time(.5).toNotation());                     //convert seconds into 2n,4n,or 8n (bpm defined on Tone)
// console.log(Tone.Time('1m').toSeconds());                    //convert 2n,4n,or 8n into seconds

Tone.Transport.bpm.value = 132;                                 //song tempo 132

const synth = new Tone.Synth();
// synth.oscillator.type = 'sine';                              //optional (INSTRUMENT)
const gain = new Tone.Gain(1.0);                                //volume
const synth2 = new Tone.Synth();
const gain2 = new Tone.Gain(.3);                                //volume

gain.toMaster();
gain2.toMaster();

// BASS INSTRUMENT------------------------------------------------------------------------------------------------------
synth.connect(gain);
let notes = ['B2', 'B2', 'B2', 'B2', 'B2', 'B2', 'B2', 'B2', 'D2', 'D2', 'D2', 'D2', 'D2', 'D2', 'D2', 'D2', 'G2', 'G2', 'G2', 'G2', 'G2', 'G2', 'G2', 'G2', 'E2', 'E2', 'E2', 'E2', 'E2', 'E2', 'E2', 'E2'];
let lengths = ['8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n'];
let localTiming = ['8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n', '8n'];
let index = 0;

// MELODY INSTRUMENT----------------------------------------------------------------------------------------------------
synth2.connect(gain2);
let notes2 = ['B3', 'B3', 'B3', 'D4', 'F#4', 'D4', 'A4', 'B3', 'B3', 'B3', 'D4', 'F#4', 'D4', 'A4', 'B3', 'B3', 'B3', 'D4', 'F#4', 'D4', 'A4', 'B3', 'B3', 'B3', 'D4', 'F#4', 'D4', 'A4'];
let lengths2 = ['8n', '8n', '8n', '16n', '0:0:3', '8n', '4n', '8n', '8n', '8n', '16n', '0:0:3', '8n', '4n', '8n', '8n', '8n', '16n', '0:0:3', '8n', '4n', '8n', '8n', '8n', '16n', '0:0:3', '8n', '4n'];
let localTiming2 = ['8n', '8n', '8n', '16n', '0:0:3', '8n', '4n', '8n', '8n', '8n', '16n', '0:0:3', '8n', '4n', '8n', '8n', '8n', '16n', '0:0:3', '8n', '4n', '8n', '8n', '8n', '16n', '0:0:3', '8n', '4n'];
let index2 = 0;

// CONVERTS LOCAL TIME TO UPTICK TIMING---------------------------------------------------------------------------------
function scheduleTiming(timingArray) {
    let outputArray = [0],
        currentTime = 0;
    for (let i = 0; i < timingArray.length; i++) {
        currentTime += Tone.Time(timingArray[i]).toSeconds();
        outputArray.push(currentTime)
    }
    return outputArray;
}

let timing = scheduleTiming(localTiming);
let timing2 = scheduleTiming(localTiming2);
console.log(timing);
console.log(timing2);

// ---------------------------------------------------------------------------------------------------------------------

function repeat(time) {
    synth.triggerAttackRelease(notes[index], lengths[index], time);             //(y,'x',y) x is the length of each note ~ < how often note played
    index++;
}

function repeat2(time) {
    synth2.triggerAttackRelease(notes2[index2], lengths2[index2], time);             //(y,'x',y) x is the length of each note ~ < how often note played
    index2++;
}

Tone.Transport.start();                                         //starts the song

for (let i = 0; i < notes.length; i++) {
    Tone.Transport.schedule(function (time) {
        repeat(time);
    }, timing[i]);
}
for (let j = 0; j <= notes2.length; j++) {
    Tone.Transport.schedule(function (time) {
        repeat2(time)
    }, timing2[j]);
}

// setTimeout(() => {
//     Tone.Transport.stop()
// }, 21000);                                                      //ends the song