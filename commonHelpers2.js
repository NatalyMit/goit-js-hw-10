import"./assets/modulepreload-polyfill-ec808ebb.js";import{i}from"./assets/vendor-22bbdd8b.js";const s=document.querySelector(".form");s.addEventListener("submit",o=>{console.log(o),o.preventDefault();let e=s.delay.value;const r=s.state.value;new Promise((t,l)=>{setTimeout(()=>{r==="fulfilled"?t(e):r==="rejected"&&l(e)},e)}).then(t=>{i.show({messageColor:"white",message:`✅ Fulfilled promise in ${e}ms`,position:"topCenter",backgroundColor:"green"})},e).catch(t=>{i.show({messageColor:"white",message:`❌ Rejected promise in ${e}ms`,position:"topCenter",color:"red"})},e),o.currentTarget.reset()});
//# sourceMappingURL=commonHelpers2.js.map
