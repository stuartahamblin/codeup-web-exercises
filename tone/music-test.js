const synth = new Tone.Synth();
// synth.oscillator.type = 'sine';                      //optional (INSTRUMENT)
const gain = new Tone.Gain(0.3);                        //volume
gain.toMaster();
synth.connect(gain);

let notes = ['C3', 'E3', 'G3', 'C4', 'E4', 'G4'];

let index = 0;

function repeat(time){
    let note = notes[index % notes.length];
    synth.triggerAttackRelease(note, '8n', time);       //(y,'x',y) x is the length of each note ~ < how often note played
    index++;
}

Tone.Transport.schedule(function(time){
    syth.triggerAttackRelease('')
    }
);


// Tone.Transport.scheduleRepeat(function(time){
// repeat(time);
// },'8n');                                                //how often a note is played

Tone.Transport.bpm.value = 90;                          //song tempo

Tone.Transport.start();

setTimeout(() => {
    Tone.Transport.stop()
}, 5000);                                              //how long the song plays