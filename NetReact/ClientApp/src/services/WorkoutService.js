import axios from 'axios' 
const NET_API_URL = 'https://localhost:44475/';
class WorkoutService {
    getWorkouts() {
        return axios.get(NET_API_URL + "workout");
    }
    addWorkout(workout) {
        return axios.post(NET_API_URL + "workout/add", {
            name: workout.name,
            type: workout.type,
            reps: workout.reps
        });
    }
    updateWorkout(workout) {
        return axios.post(NET_API_URL + "workout/update", {
            id: workout.id,
            name: workout.name,
            type: workout.type,
            reps: workout.reps
        });
    }
    deleteAllWorkouts() {
    return axios.post(NET_API_URL + "workout/deleteAll");
    }
    deleteWorkout(workoutID) {
        return axios.post(NET_API_URL + "workout/delete/" + workoutID);
    }
}
export default new WorkoutService();
