import { $signal} from "../../prix";

export default async function counter({ $, dataSet }) {
  const count = $signal(0);


  function counterF() {  
    count.value++;
    $.removeEventListener("click", counterF);
  }

  $.addEventListener("click", counterF);

 return  `<button style="pointer-events: none;">${count.value} derivado ${count.value * 2}</button>`

}
