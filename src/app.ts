import express from "express";
import routesTasks from "./routes/tasks";
import routeNotFound from "./middlewares/route-not-found";
import errorHandler from "./middlewares/error-handler";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/tasks", routesTasks);
app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
