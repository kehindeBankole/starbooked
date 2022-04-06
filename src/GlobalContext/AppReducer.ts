/* eslint-disable import/no-anonymous-default-export */
export default (state:any,action:any)=>{
switch(action.type){
case "CHANGE":
return {...state,showForm:!state.showForm}

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
default: state
}
console.log(action.type);

}