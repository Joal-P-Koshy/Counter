import { useDispatch, useSelector } from 'react-redux';
import { decrement, increament, reset } from '../redux/counterSlice';
import { useState } from 'react';

function Counter() {
    const [range, setRange] = useState(1)
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);
    return (
        <div className="d-flex align-items-center justify-content-center w-100 mt-2 flex-column">
            <h1 style={{ fontSize: "70px" }}>{count}</h1>
            <div>
                <button className='btn btn-danger p-3 ms-2' onClick={() => dispatch(decrement(Number(range)))}>Decrement</button>
                <button className='btn btn-success p-3 ms-2' onClick={() => dispatch(increament(Number(range)))}>Increment</button>
                <button className='btn btn-primary p-3 ms-2' onClick={() => dispatch(reset())} style={{ width: "120px" }}>Reset</button>
            </div>
            <div>
                    <input type="text" placeholder='Enter the range' className='form-control mt-5 w-100' onChange={(e)=>setRange(e.target.value)}/>
            </div>
        </div>
    )
}

export default Counter