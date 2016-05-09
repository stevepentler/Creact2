var AllSkills = React.createClass({
  getInitialState() {
    return { skills: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { console.table(response) });
  },

  render() {
    return (
      <div>
        <h1>Hello from All Skills!</h1>
      </div>
    )
  }
});