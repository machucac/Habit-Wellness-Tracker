
function HabitCard({ habit, completeHabit, resetStreak, deleteHabit }) {
  return (
    <div className="habit-card">
      <h3>{habit.name}</h3>
      <p>Current Streak: {habit.currentStreak}</p>
      <p>Total Completions: {habit.completions}</p>

      <div className="habit-buttons">
        <button onClick={() => completeHabit(habit.id)}>Completed Today</button>
        <button onClick={() => resetStreak(habit.id)}>Reset Streak</button>
        <button onClick={() => deleteHabit(habit.id)}>Delete</button>
      </div>
    </div>
  );
}
export default HabitCard;