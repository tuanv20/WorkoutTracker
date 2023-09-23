export default function Item(props) {
    return (
        <div>{"Workout name: " + props.item.name + "\nWorkout Type: " + props.item.type + "\nReps: " + props.item.reps}</div>
    )
}