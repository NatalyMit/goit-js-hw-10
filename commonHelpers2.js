import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as l}from"./assets/vendor-22bbdd8b.js";const s=document.querySelector(".form");s.addEventListener("submit",t=>{console.log(t),t.preventDefault();let e=s.delay.value;const r=s.state.value;new Promise((o,i)=>{setTimeout(()=>{r==="fulfilled"?o(e):r==="rejected"&&i(e)},e)}).then(o=>{l.show({title:"Congratulations",messageColor:"rose",message:`✅ Fulfilled promise in ${o}ms`,position:"topCenter",color:"green"})},e).catch(o=>{l.show({title:"Looser",messageColor:"black",message:`❌ Rejected promise in ${o}ms`,position:"topCenter",color:"red"})},e),t.currentTarget.reset()});
//# sourceMappingURL=commonHelpers2.js.map