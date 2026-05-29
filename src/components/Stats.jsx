
function Stats({ habits }) {
  const totalHabits = habits.length;

  const totalCompletions = habits.reduce((total, habit) => {
    return total + habit.completions;
  }, 0);

  const bestStreak = habits.reduce((highest, habit) => {
    if (habit.streak > highest) {
      return habit.streak;
    }

    return highest;
  }, 0);

  const completedHabits = habits.filter((habit) => {
    return habit.completions > 0;
  }).length;

  const progressPercentage =
    totalHabits === 0
      ? 0
      : Math.round((completedHabits / totalHabits) * 100);

  return (
    <section className="stats-section">
      <h2>Stats Overview</h2>

      <div className="progress-card">
        <div className="progress-header">
          <h3>Today's Progress</h3>

          <span>{progressPercentage}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <p>
          {completedHabits} out of {totalHabits} habits completed
        </p>
      </div>

      <div className="stats">
        <div className="stat-card">
          <span>📋</span>

          <h3>{totalHabits}</h3>

          <p>Total Habits</p>
        </div>

        <div className="stat-card">
          <span>✅</span>

          <h3>{totalCompletions}</h3>

          <p>Total Completions</p>
        </div>

        <div className="stat-card">
          <span>🔥</span>

          <h3>{bestStreak}</h3>

          <p>Best Streak</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;