# Performance Car Tool App Starter

## Setup

1. Clone this repository to your computer.

2. Open a terminal window, change into the project folder (the folder with the `package.json` file in it).

3. Run the `npm start` command.

4. To lengthen the time of the "reload and profile", open the browser's devtools from the detached devtools window and run the following command in the console.

```javascript
UI.panels.timeline._millisecondsToRecordAfterLoadEvent = 15000;
```

## Improve Car Tool Performance

### Lab 1

1. Find Edit Car function call. Explore modifying the edit car function to be an arrow function, a keyword-style function and the use of performance marks to help (or not help) in finding the function's invocation. In the browser's Performance tool, search for all using the Event Log. Remember, there are two ways to search the event log, you can use both the "filter" and "ctrl-f". One advantage to the "ctrl-f" is it highlights the function call in the performancee tool graph.

1. In the browser's Performance tool, under the Timings section, review the amount of rendering which occurs for the Edit Car. Compare to the timings for the simpler Car Tool. What happened when using a library such as Material UI?

1. Use the React Profiler to capture the edit car. Review the flamegraph. Were a lot of components re-rendered? How long did it take? Write down the time or take screenshot, you will need it later. Compare to the non-Material UI version.

1. Which of our custom components rendered which did not need to? Tool Header? Tool Footer? Car Table? Car Form? Car View Row?

1. Optimize the rendering of Tool Header and Tool Footer.

### Lab 2

1. The following optimizations should be performed when displaying a car edit row in the car table.

1. Optimize the Car Form. Car Form should only re-render if the "buttonText" or the "onSubmitCar" props change.

1. Optimize the View Row. Once again, this should only re-render if the incoming props change.

1. Optimize the Table Head. Same as before

1. What is the new render time? Compare to the time from the first lab. How did you verify the components did not re-render?

### Lab 3

1. How often does the array of cars re-sort? Can this be optimized? Do not optimize it yet.

1. Start profiler. Click Delete, then cancel (do not delete car). When the modal dialog displayed what re-rendered? What should not have been re-rendered? Should the Car Table re-render? Why did it re-render?

1. Optimize the necessary props (functions and data) to prevent re-rendering of the Car Table when displaying the modal and canceling the sort.

1. In the browser's Performance tool, under the Experience section, find the layout shift which occurs when editing a row. How can this be fixed? Fix it.
