import { useState, useEffect } from "react";

function HabitForm({ addHabit }) {
  const [habitName, setHabitName] = useState("");

  function handleChange(e) {
    setHabitName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Button clicked");
    console.log("Habit name:", habitName);

    if (habitName.trim() === "") {
      return;
    }

    addHabit(habitName);

    setHabitName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ex: Exercise, Meditate, Read"
        value={habitName}
        onChange={handleChange}
      />

      <button type="submit">Add Habit</button>
    </form>
  );
}

export default HabitForm;