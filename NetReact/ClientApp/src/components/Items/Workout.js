import React from 'react';
import { useState } from 'react';
import UpdateWorkout from './UpdateWorkout';
import 'bootstrap-icons/font/bootstrap-icons.css'
import WorkoutService from '../../services/WorkoutService';

//Component that represents a single task item 
//Makes up the rows of the taskList component 
export default function Workout(props) {
    let workout = props.workout;
    let name = workout.name;
    let type = workout.type;
    let reps = workout.reps;
    let [updatePressed, changeUpdate] = useState(false);

    let pressUpdate = function () {
        changeUpdate(!updatePressed);
        props.updatePressed();
    }

    let deleteWorkout = function () {
        WorkoutService.deleteWorkout(workout.id).then(response => {
            props.updatePressed();
        })
    }

    if (updatePressed == false) {
        return (
            //Switches out the task info for an updateButton item on double click
            <tr onDoubleClick={pressUpdate} className="border border-2 border-secondary">
                {/* Strikes through completed task titles */}
                <td className="text-center overflow-auto">{name}</td>
                <td className="text-center">{type}</td>
                {/* Displays complete date if task is completed, empty string otherwise */}
                <td className="text-center">{reps}</td>
                <td>
                    <button type="button" className="btn btn-danger btn-xs" alt="Update Task" onClick={deleteWorkout}>
                        Delete <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    }
    else {
        return (
            <UpdateWorkout workout={workout} updateCallback={pressUpdate}/>
        )
    }
}