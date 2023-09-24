
import React from 'react';
import { useState } from 'react';
import WorkoutService from '../../services/WorkoutService';
export default function UpdateWorkout(props) {
    let workout = props.workout;
    let [workoutName, setName] = useState(workout.name)
    let [workoutType, setType] = useState(workout.type)
    let [workoutReps, setReps] = useState(workout.reps)

    let updateWorkout = function () {
        let workoutUpdate = {
            id: workout.id,
            name: workoutName,
            type: workoutType,
            reps: workoutReps
        }
        WorkoutService.updateWorkout(workoutUpdate).then(response => {
            props.updateCallback();
            return response;
        })
    }
    return (
        //Uses standard form text input for changes to title and react-date-picker for changes to due date
        <tr>
            <td className="text-center">
                <input type="text" value={workoutName} className="form-control" placeholder="Type your workout here. " onChange={(e) => { setName(e.target.value) }} />
            </td>
            <td className="text-center" >
                <input type="text" value={workoutType} className="form-control" placeholder="Type your type here. " onChange={(e) => { setType(e.target.value) }} />
            </td>
            <td className="text-center">
                <input type="text" value={workoutReps} className="form-control" placeholder="Type your reps here. " onChange={(e) => { setReps(e.target.value) }} />
            </td>
            <td className="text-end">
                <button type="button" className="btn btn-default btn-warning" alt="Update Task" onClick={updateWorkout}>
                    <i className="bi bi-pencil-square" ></i> Update
                </button>
            </td>
        </tr>
    )
}