import { useEffect, useState } from 'react';
import Workout from './Workout';
import CreateButton from './CreateButton';
import WorkoutService from '../../services/WorkoutService';
export default function WorkoutList() {
    let [workoutList, setWorkouts] = useState([]);
    let [taskEdit, editTask] = useState(0);

    let dbChange = function () {
        editTask(taskEdit + 1);
    }

    useEffect(() => {
        WorkoutService.getWorkouts().then((response) => {
            return response.data;
        }).then((results) => {
            setWorkouts(results);
        })
    }, [taskEdit])

    return (
        <div>
            <table className="table table-hover table-dark rounded-bottom overflow-hidden">
                <thead>
                    <tr>
                        <th className="text-center">Workout</th>
                        <th className="text-center">Type</th>
                        <th className="text-center">Repetitions</th>
                        <th className="text-center">Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Maps tasks for the current page (and sorts them if applicable) to TaskItems which are then displayed in the task list */}
                    {workoutList.map(function (element) {
                        return <Workout workout={element} updatePressed={dbChange} />
                    })}
                </tbody>
            </table>
            <CreateButton addTask={dbChange} deleteAllWorkoutsCallback={dbChange} />
        </div>
    )
}
