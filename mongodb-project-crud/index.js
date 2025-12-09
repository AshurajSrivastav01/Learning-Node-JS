let express =  require("express");
const { dbConnnection } = require("./dbConnection");
const { ObjectId } = require("mongodb");
let app = express();

app.use(express.json()); // basically wea are going to use josn on over app.

// 
app.get("/student-read", async (req, res) => {
	let db = await dbConnnection();
	let studentCollection = db.collection('students');

	let result = await studentCollection.find().toArray();

	// Sending the response to the Cleint Server
	if(result){
		res.send({
			status: true,
			data: result,
			message: "Fetched Student Successfully!"
		});
	}else{
		res.send({
			status: false,
			message: "Faild to Fetch Student data!"
		});
	}
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

	console.log(studentsData);

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

app.delete("/student-delete/:id",async (req, res)=>{
	let db = await dbConnnection();
	let studentCollection = db.collection("students");
	
	let id = req.params.id;

	let result = await studentCollection.deleteOne({_id:new ObjectId(id)});
	if(result.deletedCount > 0){
		return res.send({
			status: true,
			data: result,
			message: "Student record has been delete Successfully!"
		});
	}else{
		return res.send({
			status: false,
			message: "Student is not present in your db!"
		});
	}
});

app.listen("8000");