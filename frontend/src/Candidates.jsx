import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";


const Candidates = () => {

    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCandidates, setFilteredCandidates] = useState([]);
   
    axios.defaults.withCredentials = true;

    useEffect(() => {
        setLoading(true);
        axios.get("/api/candidates")
            .then((response) => {   
                console.log(response.data);
                setCandidates(response.data);
                setLoading(false);   
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);


    useEffect(() => {
        const filteredData = candidates.filter((candidate) => {
            const nameMatch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase());
            const skillsMatch = candidate.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()));
            return nameMatch || skillsMatch;
        });
        setFilteredCandidates(filteredData);
    }, [candidates, searchQuery]);

   

    if (loading) return <p>Loading candidates...</p>;


    return (
        <>
            <div className="mx-auto p-4 sm:p-6 md:p-8 bg-zinc-600">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-5xl font-sens text-white">Candidate List</h1>
                    <input
                        type="search"
                        placeholder="Search by Name or Skills"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ marginBottom: '20px', padding: '10px', width: '300px', outline: 'none', cursor: "pointer", border: "none", display: "flex"  }}
                    />
                </div>



                <div className="overflow-x-auto">
                    <table className=" min-w-full bg-white shadow-md rounded-lg">
                        <thead className="bg-zinc-900  text-white">
                            <tr>
                                <th className="px-6 py-3 text-left text-l font-semibold">Name</th>
                                <th className="px-6 py-3 text-left text-l font-semibold">Skills</th>
                                <th className="px-6 py-3 text-left text-l font-semibold">Years of Experience</th>
                            </tr>
                        </thead>
                        <tbody className="bg-orange-200">
                            {filteredCandidates.map((candidate) => (
                                <tr key={candidate.id}>
                                    <td className="px-6 py-4 text-m text-gray-700" >{candidate.name}</td>
                                    <td className="px-6 py-4 text-m text-gray-700">{candidate.skills.join(', ')}</td>
                                    <td className="px-6 py-4 text-m text-gray-700">{candidate.yearsOfExperience}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};



export default Candidates;
