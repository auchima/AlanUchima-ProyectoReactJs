import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';

const CardItem = () =>{
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src="./tinto.jpg"/>
                    </div>
                    <p>Vino Tinto</p>
                    <span>$ 450</span>
                    <Button>Detalle</Button>
                </div>
            </CardContent>
            </Card>
    )
}

export default CardItem;