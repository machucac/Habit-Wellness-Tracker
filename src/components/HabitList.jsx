import HabitCard from './HabitCard';

function HabitList ({ habits, completeHabit, resetStreak, deleteHabit }) {
  return (
    <div className='habit-list'>
      {habits.map((habit) => {
        return (
         <HabitCard
          key={habit.id}
          habit={habit}
          completeHabit={completeHabit}
          resetStreak={resetStreak}
          deleteHabit={deleteHabit}
        />
      );
      })}
    </div>
  );
}
export default HabitList;