import { useState } from "react";

function Form() {
    const [familia, setFamilia] = useState('');
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');

    return (
    <form  action='../data/action.php'>
        <div className='block'>
            <input value={familia} type='text' placeholder='Фамилия' onChange={(event)=>setFamilia(event.target.value)}/>
            <input value={name} type='text' placeholder='Имя' onChange={(event)=>setName(event.target.value)}/>
            <input value={fatherName} type='text' placeholder='Отчество' onChange={(event)=>setFatherName(event.target.value)}/>
        </div>
        <br/>
        <input type='submit' className="btn"/>
    </form>
    )
}

export default Form;