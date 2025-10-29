const express = required("express");
const mongoose = required("required");
const studentsRoutes = required("./routes/studentsRoutes");

const app = express();

app.use(express());

mongoose.connect("mongodb://localhost:27017/hitech").then(() => console.log("MongoDB connected"))
.catch((error) => {
    console.log(error);
})

app.use("/api", studentsRoutes);

app.listen(8000 , () => console.log("server running port 8000")); 