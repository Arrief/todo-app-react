import Button from "./Button";

const Welcome = (props) => (
  <section className="welcome-message">
    <h1>Welcome to the Wild ToDo List</h1>
    <h3>We get you on track!</h3>
    <p>
      Are you struggling to keep track of your tasks, chores and plans? You keep
      forgetting - or worse: procrastinating - the things that should be done
      today, only to repeat the same cycle tomorrow? But you've finally had
      enough and want to become organized and efficient?
    </p>
    <p>
      Then you've come to the right place! Here at{" "}
      <span className="wild">Wild ToDo</span>, we help you to visualize your
      tasks for the day.
    </p>
    <Button action={props.action} text={props.text} />
  </section>
);

export default Welcome;
