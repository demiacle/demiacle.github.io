const context = require.context('.', true, /\.js$/);

// Load all files inside this directory
const projects = [];
context.keys().forEach(key => {
  if (key === './index.js') return;
  const project = context(key);
  projects.push(project.default);
});

projects.sort((a, b) => a.sort_order - b.sort_order);

export default projects;
