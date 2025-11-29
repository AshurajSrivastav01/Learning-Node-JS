let express =  require("express");
const { dbConnnection } = require("./dbConnection");
let app = express();

app.use(express.json()); // basically wea are going to use josn on over app.

// 
app.get("/student-read", (req, res) => {
	res.send("Student View API");
});

app.post("/student-insert", async (req, res) => {
	let db = await dbConnnection(); // Createing a Conection
	let studentCollection = db.collection("students"); // Creating a Collection( Table ) Here
	
	// Coverted an Object
	let studentsData = req.body.map(data => ({
		studentName: data.studentName, 
		studentEmail: data.studentEmail, 
		studentPassword: data.studentPassword		
	}));

	// Insert the data and storing the result in the 'result' variable
	let result = await studentCollection.insertMany(studentsData);

	// Sending the response to the Cleint Server
	if(result){
		res.send({
			status: true,
			data: result,
			message: "Student Added Successfully!"
		});
	}else{
		res.send({
			status: false,
			message: "Faild to add Student!"
		});
	}
});

app.listen("8000");

