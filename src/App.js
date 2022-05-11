import React, { useState } from "react";
import NewExpense from "./Components/NewExpenses/NewExpense";
import Expenses from "./Components/Expenses/Expenses";
let Dummy_expense = [
  // {
  //   id: "e1",
  //   title: "School Fee",
  //   amount: 300,
  //   date: new Date(2021, 5, 12),
  // },

  // {
  //   id: "e2",
  //   title: "Books",
  //   amount: 400,
  //   date: new Date(2021, 2, 22),
  // },

  // {
  //   id: "e3",
  //   title: "Cricket Bat",
  //   amount: 600,
  //   date: new Date(2021, 4, 2),
  // },

  // {
  //   id: "e4",
  //   title: "Laptop",
  //   amount: 1200,
  //   date: new Date(2021, 5, 5),
  // },
];
function App() {
  const [expenses, setExpenditure] = useState(Dummy_expense);

  const addExpenseHandler = (expense) => {
    const upDatedExpense = [expense, ...expenses];
    setExpenditure(upDatedExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
