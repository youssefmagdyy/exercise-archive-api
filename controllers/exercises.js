import exercise from "../models/exercise.js";

export const getExercises = async(req,res)=> {
    try {
        
        let exercises = await exercise.find();
        res.json(exercises);
        
    } catch (error) {
        res.json({message:error.message});
    }
};