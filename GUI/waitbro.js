const app = express();
const port = 3000;

const path = require('path');
const filePath = path.join(__dirname, 'data.json');

app.use(bodyParser.json());

app.post('/saveData', async (req, res) => {
    const inputData = req.body;
    // Write the data to a JSON file
    console.log('data getting written')
    try{
        fs.writeFileSync(filePath, JSON.stringify(inputData, null, 2));
    } catch (e){
    console.error('Error writing data to JSON file:', e);
    res.status(500).send('Error saving data');
    }
    res.send('Data saved successfully');
});

app.listen(port, () => {
    console.log(Server is running on port ${port});
});