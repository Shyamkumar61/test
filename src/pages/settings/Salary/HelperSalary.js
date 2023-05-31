import { Parser } from "expr-eval";

export function evaluateFormula(formula, values) {
  const parser = new Parser();
  const variables = {};
  for (const [key, value] of Object.entries(values)) {
    variables[key] = value;
  }
  const expression = parser.parse(formula);
  const result = expression.evaluate(variables);
  return parseFloat(result.toFixed(0));
}


