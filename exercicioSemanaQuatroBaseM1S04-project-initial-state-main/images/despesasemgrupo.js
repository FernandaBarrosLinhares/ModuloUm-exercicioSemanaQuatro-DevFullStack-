
class GroupExpenses {
   title;
   partierValue;
   amount;
   #numberOfParticipants;
 
    constructor(title, numeroDeParticipantes, amount){
         this.title = title;
         this.#numberOfParticipants= numberOfParticipants;
        this.amount= amount;
        this.partierValue = (amount / numberOfParticipants).toFixed(2);
    }
}

const table = document.getElemeteByiD("group-expenses");

const GroupExpense = [];



const titleElement = document.getElementById("title-imput");
const participantesElement = document.getElementById("participantes-input");
const amountElement = document.getElementById("amount-input");


function updatePage() {
    const expense = groupExpenses[groupExpenses.length -1];

    table.insertAdjacenteHTML(
        "beforeend",

        
      <div class= "row">
            <div>${expense.title}</div>
            <div> R$ ${expense.partierValue}</div>
            <div>R$ ${expense.amount}</div>
        </div>
     );
}; 

    addGroupExpense = function () {
        groupExpenses.push(
            new GroupExpense(
                title.Element.value,
                participantesElement.value,
                amountElement.value
            )
        );

        updatePage();

        titleElement.value= "";
        participantesElement.value = "";
        amountElement = "";

        alert ("Despesa adicionada");
        
    };