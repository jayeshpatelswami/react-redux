import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCerators } from '../state/index';

const Shop = () => {
  const dispatch = useDispatch();
  const {depositMony ,withdrawMony} = bindActionCreators(actionCerators,dispatch)
  const amount = useSelector(state=> state.amount )
  
  return (
    <>
    <div className="container">
     <h3 className='my-3'>Add or Remove Cash</h3>
     <button className='btn btn-primary mx-2' onClick={()=>{depositMony(10)}} > + </button> 
     Update Balance : {amount}
     <button className='btn btn-primary mx-2' onClick={()=>{withdrawMony(10)}} > - </button>
     </div>  
    </>
  )
}

export default Shop
