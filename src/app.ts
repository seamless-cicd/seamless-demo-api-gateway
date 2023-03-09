import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).send('Hello');
});

app.get('/seamless', (_req, res) => {
  res.status(200).send('Seamless');
});

// Communicate with Payment Service
app.post('/payments', async (req, res) => {
  try {
    const amount = req.body.amount;
    if (isNaN(amount)) {
      return res.status(400).json({
        message: 'Invalid or missing amount',
      });
    }

    const response = await axios.post(
      'http://seamless-demo-payment:3000/payments',
      { amount },
    );

    res.status(200).json(response.data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    }
    res.status(500).send('Error with Payment Service');
  }
});

// Communicate with Notification Service
app.post('/notifications', async (req, res) => {
  try {
    const message = req.body.message;
    if (!message) {
      return res.status(400).json({
        message: 'Invalid or missing message',
      });
    }

    const response = await axios.post(
      'http://seamless-demo-notification:3000/notifications',
      { message },
    );
    return res.status(200).json(response.data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    }
    res.status(500).send('Error with Notification Service');
  }
});

export default app;
