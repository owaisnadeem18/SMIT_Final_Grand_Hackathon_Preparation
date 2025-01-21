import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin: "*" ,
}))

app.get("/" , (req , res) => {
    res.send("Server is ready")
})


app.get("/api/quotes" , (req , res) => {
    
    const successQuotes = [
        { id: 1, title: "Courage", quote: "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill" },
        { id: 2, title: "Passion", quote: "The only way to do great work is to love what you do. – Steve Jobs" },
        { id: 3, title: "Persistence", quote: "I have not failed. I've just found 10,000 ways that won't work. – Thomas Edison" },
        { id: 4, title: "Hard Work", quote: "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau" },
        { id: 5, title: "Perseverance", quote: "Don't watch the clock; do what it does. Keep going. – Sam Levenson" }
      ];
    
    res.send(successQuotes)      
  })

const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log("Server is ready ! ")
})