import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import Stats from './components/Stats'
import './App.css'

function App() {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habits');
    if (savedHabits) {
      return JSON.parse(savedHabits);
    } else {
      return [];
    }
  });
  /* Save habits to localStorage whenever they change*/
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  function addHabit(habitName) {
    const newHabit = {
      id: uuidv4(),
      name: habitName,
      streak: 0,
      completions: 0,
      lastCompleted: null
    };

    console.log('New habit:', newHabit);
    setHabits([...habits, newHabit]);
  }

  function completeHabit(id) {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) {
        return {
          ...habit,
          streak: habit.streak + 1,
          completions: habit.completions + 1,
          lastCompleted: new Date()
        };
      }
      return habit;
    });
    setHabits(updatedHabits);
  
  
  }

  function resetStreak(id) {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) {
        return {
          ...habit,
          streak: 0
        };
      }
      return habit;
    });
    setHabits(updatedHabits);
  }

  function deleteHabit(id) {
    const updatedHabits = habits.filter((habit) => habit.id !== id);

    setHabits(updatedHabits);
  }


  return (
  <div className="app">
    <header className="app-header">
      <h1>Habit & Wellness Tracker</h1>
      <p>Track your daily habits & improve your well being</p>
      <span>Today: {new Date().toLocaleDateString()}</span>
    </header>

    <main>
      <HabitForm addHabit={addHabit} />

      <Stats habits={habits} />

      <HabitList
        habits={habits}
        completeHabit={completeHabit}
        resetStreak={resetStreak}
        deleteHabit={deleteHabit}
      />
    </main>
  </div>
);
        }
export default App;