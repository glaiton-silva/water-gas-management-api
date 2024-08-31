
import express, { Request, Response } from 'express';
import { sequelize } from './config/database';
import { Measurement } from './models/measurement';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API Water-Gas Management');
});

app.listen(80, () => {
  console.log('Server is running on port 80');
  sequelize.sync();
});

app.post('/upload', async (req: Request, res: Response) => {
    const { image, customer_code, measure_datetime, measure_type } = req.body;

    if (!image || !customer_code || !measure_datetime || !['WATER', 'GAS'].includes(measure_type.toUpperCase())) {
        return res.status(400).json({
            error_code: "INVALID_DATA",
            error_description: "Os dados fornecidos no corpo da requisição são inválidos"
        });
    }

    const alreadyExists = await Measurement.findOne({ where: { customer_code, measure_datetime, measure_type } });

    if (alreadyExists) {
        return res.status(409).json({
            error_code: "DOUBLE_REPORT",
            error_description: "Leitura do mês já realizada"
        });
    }

    const geminiResponse = {
        image_url: "http://example.com/image.jpg",
        measure_value: 150,
        measure_uuid: "123e4567-e89b-12d3-a456-426614174000"
    };

    const newMeasurement = await Measurement.create({
        customer_code,
        measure_datetime,
        measure_type,
        measure_value: geminiResponse.measure_value,
        measure_uuid: geminiResponse.measure_uuid,
        image_url: geminiResponse.image_url,
    });

    res.status(200).json(geminiResponse);
});
