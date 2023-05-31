
export const validationRules = {
  name: [
    {
      rule: (value) => /^[a-zA-Z\s]+$/.test(value),
      message: "Only letters and spaces are allowed",
    },
    {
      rule: (value) => value.trim().split(" ").length === 2,
      message: "Must contain two words",
    },
  ],
  emp_id: [
    {
      rule: (value) => value.length === 4 && !isNaN(value),
      message: "Employee id should 4 digit",
    },
  ],
  workEmail: [
    {
      rule: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: "Please enter a valid email address",
    },
  ],
  
  attendacce: [
    {
      rule: (value) => value < 28,
      message: "Max Working Days are 27"
    }
  ],
};
