import dotenv from 'dotenv';
import { createServer } from './server';

dotenv.config();

const port = Number(process.env.PORT ?? 3000);
const app = createServer();

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
