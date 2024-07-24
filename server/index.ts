import { config } from "dotenv";
config();

import App from "./src/app";

const PORT = process.env.PORT;

App.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
