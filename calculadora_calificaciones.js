const notes = [
        {
            Materia : "Fisica",
            Nota : 8,
            Creditos : 2,
        },
        {
            Materia : "Matematicas",
            Nota : 6,
            Creditos : 3,
        },
        {
            Materia : "Artes",
            Nota : 8,
            Creditos : 1,
        },
        {
            Materia : "español",
            Nota : 7,
            Creditos : 2,
        },
        {
            Materia : "Informatica",
            Nota : 10,
            Creditos : 5,
        },
]
const NotesWCredit = notes.map(function(note){
    return note.Nota * note.Creditos;
})

const OnlyCredit = notes.map(function(note){
    return note.Creditos;
})

let SumNotesWCredit = 0;
for(let i = 0; i< NotesWCredit.length; i++){
    SumNotesWCredit += NotesWCredit[i];
}

let SumOnlyCredit = 0;
for(let i = 0; i<OnlyCredit.length; i++){
    SumOnlyCredit += OnlyCredit[i]
}

const PromedioFinal = Math.round(PromedioPonderado(SumNotesWCredit, SumOnlyCredit));

function PromedioPonderado (SumNotesWCredit, SumOnlyCredit){
        const PromedioFinal = (SumNotesWCredit / SumOnlyCredit);
        return PromedioFinal;
}

console.log(PromedioFinal)


