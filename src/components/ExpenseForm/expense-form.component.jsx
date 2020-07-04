import React from "react";

class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description: description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note: note }));
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.description}
            placeholder="Description"
            autoFocus
            onChange={this.onDescriptionChange}
          />
          <input type="number" placeholder="Amount" />
          <textArea
            value={this.state.note}
            onChange={this.onNoteChange}
            placeholder="Add a note for your expense(optional)"
          ></textArea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
