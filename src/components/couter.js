import { $signal } from "../../prix";

export default async function counter({ $, dataSet }) {
  const count = $signal(0);
  const text = $signal("");

  $.addEventListener("click", function counter(e) {
    if (e.target.id === "b") {
      count.value++;
      $.removeEventListener("click", counter);
    }
  });

  $.addEventListener("keyup", function counter(e) {
    if (e.target.id === "t" && e.key === "Enter") {
      text.value = e.target.value;
      $.removeEventListener("click", counter);
    }
  });

  return `
  <button id="b">
          ${count.value} derivado
          ${count.value * 2}
          </button>
   
          <input id="t" type="text" value="${text.value}" /> 
          <h1>${text.value}</h1>
`;
}
