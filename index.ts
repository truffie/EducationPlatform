import { config } from "dotenv";
import App from "./src/app";
config();
const PORT = process.env.PORT;
App.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
