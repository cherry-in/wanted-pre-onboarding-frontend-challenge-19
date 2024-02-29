import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { addition, deletion } from '../../store/todoSlice';

export function List() {
    const { list } = useAppSelector((state) => state.todo);
    const dispatch = useAppDispatch();
    const [todo, setTodo] = useState('');

    const enter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleClick();
    }

    const handleClick = () => {
        if (todo.trim() === '') {
            return;
        }

        dispatch(addition(todo));
        setTodo('');
    };

    const handleDelete = (index: number) => {
        dispatch(deletion(index));
    };

    return (
        <div className='page page-center'>
            <div className='container container-tight bg-white p-3'>
                <div className='d-flex'>
                    <input type='text' className='form-control' name='todo' value={todo} onChange={(e) => setTodo(e.target.value)} onKeyDown={(e) => enter(e)} />
                    <button className='btn btn-primary' onClick={handleClick}>Add</button>
                </div>
                <div className=''>
                    {list.map((el: string, i: number) =>
                        <div className='input-group mt-2' key={i}>
                            <div className='form-control' > {el} </div>
                            <button className='btn btn-danger btn-sm' type='button' onClick={() => handleDelete(i)}>Delete</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
