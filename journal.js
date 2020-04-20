

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const journalEntry = {
    date: "4/17/2020",
    concept:"lab day",   
    entry:"",
    mood:""
}
const journalEntry2 = {
    date: "4/17/2020",
    concept:"lab day",   
    entry:"",
    mood:""
}
const journalEntry3 = {
    date: "4/17/2020",
    concept:"lab day",   
    entry:"",
    mood:""
}


const diary = []

console.log(diary)
diary.push(journalEntry)
diary.push(journalEntry2)
diary.push(journalEntry2)

const makeJournalEntryComponent = (journalEntry) => {
     //create html structure here for journal entry

    return`
    <section class="single-entry"> 
    
//add html here with literals interpolation

    </section>
    
    `


}

for(singleEntry of Diary){
    let domEnter = makeJournalEntryComponent(singleEntry)

    document.querySelector(".entry").innerHTML += domEnter
}