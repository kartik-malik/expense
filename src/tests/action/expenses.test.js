import { editExpense, addExpense, removeExpense } from "../../actions/expenses";
test("should setup remove expense", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123"
  });
});
test("should setup edit expense", () => {
  const action = editExpense("123", { note: "new" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: { note: "new" }
  });
});
test("should setup add expense with values", () => {
  const expenseData = {
    description: "1",
    amount: 1,
    note: "1",
    createdAt: 100
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) }
  });
});
test("should setup add expense without values", () => {
  const expenseData = {
    description: "1",
    amount: 1,
    note: "1",
    createdAt: 100
  };
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 100,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
