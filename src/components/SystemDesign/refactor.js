// Q1. refactor code to remove if-else by applying solid code design principles and data structures.

const calculateInsurance = (income) => {
  if (income <= 10000) {
    return income * 0.365;
  } else if (income <= 30000) {
    return (income - 10000) * 0.2 + 35600;
  } else if (income <= 60000) {
    return (income - 30000) * 0.1 + 76500;
  } else {
    return (income - 60000) * 0.02 + 105600;
  }
};
