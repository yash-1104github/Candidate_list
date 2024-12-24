import express from "express";
import cors from "cors";

const app = express();

app.use(cors(
    {
        origin: ["https://https://candidate-list.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.use(express.json());

const PORT = process.env.PORT || 3000;



app.get("/api/candidates", (req, res) => {
   
    const candidates = [
        { id: 1, name: 'John Doe', skills: ['JavaScript', 'React', 'Node.js'], yearsOfExperience: 5 },
        { id: 2, name: 'Mohan Das', skills: ['Java', 'Spring', 'Hibernate'], yearsOfExperience: 8 },
        { id: 3, name: 'Bob Smith', skills: ['Python', 'Django', 'Flask'], yearsOfExperience: 3 },
        { id: 4, name: 'Alice Johnson', skills: ['C++', 'Java', 'OpenGL'], yearsOfExperience: 10 },
        { id: 5, name: 'Mike Brown', skills: ['C#', '.NET', 'ASP.NET'], yearsOfExperience: 7 },
        { id: 6, name: 'Sarah Johnson', skills: ['Java', 'Spring', 'Hibernate'], yearsOfExperience: 5 },
        { id: 7, name: 'David Smith', skills: ['Python', 'Django', 'Flask'], yearsOfExperience: 4 },
        { id: 8, name: 'Emily Davis', skills: ['JavaScript', 'React', 'Node.js'], yearsOfExperience: 6 },
        { id: 9, name: 'Chris Wilson', skills: ['Ruby', 'Rails', 'PostgreSQL'], yearsOfExperience: 3 },
        { id: 10, name: 'Jessica Taylor', skills: ['PHP', 'Laravel', 'MySQL'], yearsOfExperience: 8 },
        { id: 11, name: 'Daniel Martinez', skills: ['Go', 'Gin', 'Docker'], yearsOfExperience: 2 },
        { id: 12, name: 'Laura Anderson', skills: ['Swift', 'iOS', 'Xcode'], yearsOfExperience: 5 },
        { id: 13, name: 'James Thomas', skills: ['Kotlin', 'Android', 'Jetpack'], yearsOfExperience: 4 },
        { id: 14, name: 'Sophia Jackson', skills: ['TypeScript', 'Angular', 'Vue.js'], yearsOfExperience: 6 },
        { id: 15, name: 'Ethan King', skills: ['Elixir', 'Phoenix', 'Nerves'], yearsOfExperience: 4 },
        { id: 16, name: 'Harper Wright', skills: ['Perl', 'Dancer', 'Mojolicious'], yearsOfExperience: 5 },
        { id: 17, name: 'Alexander Scott', skills: ['Haskell', 'GHC', 'Stack'], yearsOfExperience: 3 },
        { id: 18, name: 'Sofia Green', skills: ['R', 'Shiny', 'ggplot2'], yearsOfExperience: 4 },
        { id: 19, name: 'Daniel Adams', skills: ['MATLAB', 'Simulink', 'Stateflow'], yearsOfExperience: 2 },
        { id: 20, name: 'Ella Nelson', skills: ['Clojure', 'Leiningen', 'Ring'], yearsOfExperience: 3 }
    ];
     
     res.send(candidates);

 });


 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
