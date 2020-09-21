import React from 'react';

class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={(e) => {
              const amount = e.target.value;
              if (amount.match(/^\d*(\.\d{0,2})?$/)) this.setState({ amount });
            }}
          />
          <textarea
            placeholder="Add a note for your expense"
            value={this.state.note}
            onChange={(e) => this.setState({ note: e.target.value })}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
