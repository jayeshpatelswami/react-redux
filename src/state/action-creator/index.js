export const depositMony = (amount)=>{
      return (dispatch)=>{
        dispatch({
            type : 'deposit',
            payload:amount
        })
      }
}
export const withdrawMony = (amount)=>{
      return (dispatch)=>{
        dispatch({
            type : 'withdraw',
            payload:amount
        })
      }
}