import React from "react";

import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../ui/card";

let Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
