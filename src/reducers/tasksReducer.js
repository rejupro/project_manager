export function projectReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: Math.floor(Math.random() * 10000),
          ...action.payload,
        },
      ];
    }
    case "changed": {
      const index = tasks.findIndex((t) => t.id === action.task.id);
      const newTasks = [...tasks];
      newTasks[index] = action.task;
      return newTasks;
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.payload);
    }
    case "search": {
      return tasks.filter((t) =>
        t.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
