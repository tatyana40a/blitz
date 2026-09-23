window.ZACHET_DATA = window.ZACHET_DATA || [];
window.ZACHET_SECTIONS = [
 {title:"Общая химия", topics:[
  {title:"Базовые реакции", file:"topics/basic-reactions.js"},
  {title:"Строение атома", file:"topics/atomic-structure.js"},
  {title:"Периодический закон", file:"topics/periodic-law.js"},
  {title:"Химическая связь", file:"topics/chemical-bond.js"},
  {title:"ОВР", file:"topics/redox.js"}
 ]},
 {title:"Неорганическая химия", topics:[]},
 {title:"Органическая химия", topics:[]}
];
window.ZACHET_SECTIONS.forEach(s=>s.topics.forEach(t=>{
 document.write('<script src="'+t.file+'"><\\/script>');
}));
