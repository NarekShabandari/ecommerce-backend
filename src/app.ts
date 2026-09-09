import express,{Application} from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

const app:Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get("/health",(req,res)=>{
    res.json({status:"ok"});
});

export default app;