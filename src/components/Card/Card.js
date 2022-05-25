import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import {useState} from 'react';

const CardItem = () =>{

    const [count, setCount] = useState(0);

    const addCount = () =>{
        setCount(count + 1)
    }

    const removeCount = () =>{
        setCount (count - 1)
    }

    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src="./tinto.jpg"/>
                    </div>
                    <p>Vino Tinto</p>
                    <span>$ 450</span>
                    <div className = 'count-item'>
                        <Button onClick={removeCount}>-</Button>
                        <p>{count}</p>
                        <Button onClick={addCount}>+</Button>
                    </div>
                    <Button>Agregar</Button>
                </div>
            </CardContent>
            </Card>
    )
}

export default CardItem;